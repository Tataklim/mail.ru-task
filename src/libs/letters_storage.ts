import data from './data.json'
import LetterStructure from "./letter_structure"
import {globalEventBus} from "./eventbus"
import {EVENTBUS} from "./consts"

/**
 * Класс, хранящий данные о письмах и действия пользователя с ними
 */
class Letters {

    isAllSelected: boolean
    lettersActive: Array<LetterStructure>
    lettersToDelete: Array<number>
    // lettersToDelete - хранит в себе индексы писем в массиве lettersActive
    // Почему сделано именно так - напишу в ридми
    // TODO записать в ридми
    constructor() {
        this.lettersActive = data.emails
        this.lettersToDelete = []
        this.isAllSelected = false
        this.subscribe()
    }

    subscribe() {
        globalEventBus.on(EVENTBUS.DELETE, this.deleteSelectedLetters.bind(this))
        globalEventBus.on(EVENTBUS.SELECT_ALL, this.changeIsAllSelected.bind(this))
        globalEventBus.on(EVENTBUS.SELECT_LETTER, this.selectLetter.bind(this))
        globalEventBus.on(EVENTBUS.UNSELECT_LETTER, this.unselectLetter.bind(this))
    }

    get data() {
        return this.lettersActive
    }

    /**
     * Вызывается при нажатии в меню выбрать все, либо при механическом выборе пользователем всех элементов
     */
    changeIsAllSelected() {
        if (this.lettersToDelete.length === 0) {
            globalEventBus.emit(EVENTBUS.CHANGE_MENU_BUTTON_VISIBILITY)
        }
        this.isAllSelected = !this.isAllSelected
        // Для быстрого удаления всех писем нет необходимости хранить данные каждого
        this.lettersToDelete = []
    }

    deleteSelectedLetters() {
        console.log('deleteSelectedLetters')
        if (this.isAllSelected) {
            return this.deleteAllLetters()
        }

        if (this.lettersToDelete.length === 0) {
            return
        }
        globalEventBus.emit(EVENTBUS.CHANGE_MENU_BUTTON_VISIBILITY)
        this.lettersToDelete
            .sort((a, b) => b - a)
            .map((elem: number) => {
                this.lettersActive.splice(elem, 1)
            })
        this.lettersToDelete = []
        console.log(this.lettersToDelete)
        console.log(this.lettersActive)
        // globalEventBus.emit(EVENTBUS.RENDER_LETTERS)
        globalEventBus.emit(EVENTBUS.CHANGE_LIST_STATE)

    }

    deleteAllLetters() {
        this.lettersActive.length = 0
        this.lettersToDelete = []
        this.isAllSelected = false
        console.log('deleteAllLetters')
        console.log(this.lettersActive)
        globalEventBus.emit(EVENTBUS.CHANGE_LIST_STATE)
        // globalEventBus.emit(EVENTBUS.RENDER_EMPTY)
    }

    /**
     * Выбор одного письма пользователем
     * @param selectedIndex - индекс письма в массиве всех писем
     */
    selectLetter(selectedIndex: number) {
        if (!this.isAllSelected) {
            this.lettersToDelete.push(selectedIndex)
        }
        if (this.isAllSelectedMechanical()) {
            this.isAllSelected = !this.isAllSelected
            globalEventBus.emit(EVENTBUS.CHANGE_MENU_CHECKBOX)
        }
        if (this.lettersToDelete.length === 1) {
            globalEventBus.emit(EVENTBUS.CHANGE_MENU_BUTTON_VISIBILITY)
        }
    }

    unselectLetter(selectedIndex: number) {
        if (this.isAllSelected) {
            return this.selectAllExceptOne(selectedIndex)
        }
        const index = this.lettersToDelete.indexOf(selectedIndex)
        this.lettersToDelete.splice(index, 1)
        if (this.lettersToDelete.length === 0) {
            globalEventBus.emit(EVENTBUS.CHANGE_MENU_BUTTON_VISIBILITY)
        }
    }

    /**
     * Функция вызывается при попытке "развыделить" пользователем письмо после состояния "isAllSelected=true"
     * @param index
     */
    selectAllExceptOne(index: number) {
        const amountOfActiveLetters = this.lettersActive.length
        this.isAllSelected = !this.isAllSelected

        // После режима "isAllSelected=true" массив lettersToDelete - пуст
        // Производится заполнение этого массива всеми письмами, кроме одного - выбранного пользователем
        this.lettersToDelete = Array.from(Array(amountOfActiveLetters).keys())
        this.lettersToDelete.splice(index, 1)

        globalEventBus.emit(EVENTBUS.CHANGE_MENU_CHECKBOX)
        if (this.lettersToDelete.length === 0) {
            globalEventBus.emit(EVENTBUS.CHANGE_MENU_BUTTON_VISIBILITY)
        }
    }

    /**
     * Проверка, все ли письма были выделены вручную или была нажата кнопка "выделить всё"
     */
    isAllSelectedMechanical() {
        return this.lettersToDelete.length === this.lettersActive.length && !this.isAllSelected
    }
}

export const letters = new Letters()
