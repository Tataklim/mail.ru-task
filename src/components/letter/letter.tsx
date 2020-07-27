import React from 'react'
import {globalEventBus} from "../../libs/eventbus"
import LetterStructure from "../../libs/letter_structure"
import {EVENTBUS} from "../../libs/consts"

class Letter extends React.Component<LetterStructure, object> {
    selected: boolean
    checkboxRef: React.RefObject<HTMLInputElement>
    imageRef: React.RefObject<HTMLInputElement>

    constructor(props: Readonly<LetterStructure>) {
        super(props)
        this.selected = false
        this.checkboxRef = React.createRef()
        this.imageRef = React.createRef()
        this.subscribe()
    }

    subscribe() {
        globalEventBus.on(EVENTBUS.SELECT_ALL, this.setCheckbox.bind(this))
        globalEventBus.on(EVENTBUS.CLICKED_UNSELECT_BUTTON, this.setCheckbox.bind(this))
    }

    /**
     * Синтетическое нажатие на checkbox - вызывается при нажатии кнопок управление из меню
     */
    setCheckbox(value: boolean) {
        if (this.selected !== value) {
            this.checkboxRef?.current?.click()
        }
    }

    selectClicked(indexInArray: number) {
        const image = this.imageRef?.current;
        image?.classList.toggle('selected')
        image?.previousElementSibling?.classList?.toggle('selected-avatar')
        this.selected = !this.selected
        if (this.selected) {
            globalEventBus.emit(EVENTBUS.SELECT_LETTER, indexInArray)
            return
        }
        globalEventBus.emit(EVENTBUS.UNSELECT_LETTER, indexInArray)
    }

    render() {
        const {id, avatar, sender, theme, snippet, indexInArray} = this.props // id оставила на будущее
        return <div className="letter">
            <input className="letter__checkbox" type="checkbox" ref={this.checkboxRef}
                   onClick={() => this.selectClicked(indexInArray!)}/>
            <div className="letter__author" >
                <img className="letter__avatar"  src={avatar} alt={`user's avatar`}/>
                <div className="letter__select-image" ref={this.imageRef} onClick={() => this.setCheckbox(!this.selected)}/>
                <div className="letter__name" title={sender}>
                    {sender}
                </div>
            </div>
            <div className="letter__content">
                <div className="letter__theme">
                    {theme}
                </div>
                <div className="letter__snippet">
                    {snippet}
                </div>
            </div>
        </div>
    }
}

export default Letter
