import React from 'react';
import ReactDOM from 'react-dom'; // todo убрать
import LetterList from '../components/letter_list/letter_list';
import {letters} from './letters_storage';
import Menu from '../components/menu/menu';
import Empty from '../components/empty/empty';
import {globalEventBus} from './eventbus';
import {EVENTBUS} from './consts';

/**
 * Класс, ответсвеннный за рендеринг
 */
export default class ReactHelper {
    isStorybook: boolean

    /**
     * @param isStorybook отвечает за необходимый способ генерации данных для рендеринга
     */
    constructor(isStorybook: boolean) {
        this.isStorybook = isStorybook
        globalEventBus.on(EVENTBUS.RENDER_LETTERS, this.renderLetters.bind(this));
        globalEventBus.on(EVENTBUS.RENDER_EMPTY, this.renderEmptyPage.bind(this));
        this.renderLetters()
    }

    renderLetters() {
        console.log('RERENDER')
        if (this.isStorybook) {
            return <div>
                <Menu/>
                <LetterList data={letters.data}/>
            </div>
        }
        ReactDOM.render(
            <div>
                <Menu/>
                <LetterList data={letters.data}/>
            </div>,
            document.getElementById('root')
        );
    }

    renderEmptyPage() {
        if (this.isStorybook) {
            return <Empty/>
        }
        ReactDOM.render(
            <Empty/>,
            document.getElementById('root')
        );
    }
}
