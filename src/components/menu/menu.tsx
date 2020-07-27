import React from 'react'
import {globalEventBus} from "../../libs/eventbus"
import {EVENTBUS} from "../../libs/consts"

/**
 * Класс, отвечающий за меню управлением письмами - их выделением и удалением
 */
class Menu extends React.Component {
    isAllSelected: boolean
    // Так называемое "искусственное" нажатие - click, вызванный не пользователем, а из js
    syntheticClick: boolean
    checkboxRef: React.RefObject<HTMLInputElement>
    unselectRef: React.RefObject<HTMLInputElement>

    constructor(props: any) {
        super(props)
        this.isAllSelected = false
        this.checkboxRef = React.createRef()
        this.unselectRef = React.createRef()
        this.syntheticClick = false
        this.subscribe()
    }

    subscribe() {
        globalEventBus.on(EVENTBUS.CHANGE_MENU_CHECKBOX, this.setCheckbox.bind(this))
        globalEventBus.on(EVENTBUS.CHANGE_MENU_BUTTON_VISIBILITY, this.changeVisibility.bind(this))
    }

    /**
     * Синтетическое нажатие на checkbox
     */
    setCheckbox() {
        this.syntheticClick = true
        this.checkboxRef?.current?.click()
    }

    /**
     * Изменение видимости раздела "снять выделение" - в зависимости от того, выбраны какие-либо элементы
     */
    changeVisibility() {
        this.unselectRef?.current?.classList.toggle('hidden')
    }

    /**
     * Реагирует на событие снятие выделения со всех писем
     */
    unselectedChosen() {
        globalEventBus.emit(EVENTBUS.CLICKED_UNSELECT_BUTTON, false)
    }

    /**
     * Нажат checkbox, либо "синтетическое" нажатие на него
     */
    selectAllClicked() {
        this.checkboxRef?.current?.nextElementSibling?.classList.toggle('selected-all')
        this.isAllSelected = !this.isAllSelected
        if (!this.syntheticClick) {
            globalEventBus.emit(EVENTBUS.SELECT_ALL, this.isAllSelected)
            return
        }
        this.syntheticClick = !this.syntheticClick
    }

    deleteClicked() {
        globalEventBus.emit(EVENTBUS.DELETE)
    }

    render() {
        return <div className="menu">
            <input className="menu__checkbox" ref={this.checkboxRef} type="checkbox"
                   onClick={() => this.selectAllClicked()}/>
                   <div className="menu__set-all" onClick={() => this.selectAllClicked()}>Выделить</div>
            {/*<div className="menu__delete" onClick={() => this.deleteClicked()}> delete</div>*/}
            <img src={require("./../../img/delete-24px.svg")} className="menu__delete" onClick={() => this.deleteClicked()}/>
            <div className="menu__unselect hidden" onClick={() => this.unselectedChosen()} ref={this.unselectRef}> Убрать выделение</div>
        </div>
    }
}

export default Menu
