import React from 'react'
import Letter from "../letter/letter"
import LetterStructure from "../../libs/letter_structure"
import {globalEventBus} from "../../libs/eventbus";
import {EVENTBUS} from "../../libs/consts";

/**
 * Компонент - список писем
 */
class LetterList extends React.Component<any, object> {

    state: { toChange: boolean }

    constructor(props: Readonly<Array<LetterStructure>>) {
        super(props);
        this.state = {
            toChange: false,
        }
        globalEventBus.on(EVENTBUS.CHANGE_LIST_STATE, this.changeSet.bind(this))
    }

    changeSet() {
        console.log('changeSet')
        this.setState((state) => {
            return {toChange: !this.state.toChange};
        });
    }

    render() {
        console.log('render')
        const letterList = this.props.data
        console.log(letterList)
        const letterListTemplate = this.generateTemplate(letterList)
        return <div className="letter-list">
            {
                letterListTemplate.length > 0 ?
                    letterListTemplate :
                    <div className="empty">You don`t have any letters ):</div>
            }
        </div>
    }

    /**
     * Генерерует данные на основании массива писем
     * @param letterList
     */
    generateTemplate(letterList: Array<LetterStructure>) {
        return letterList.map((letter: LetterStructure, index: any) =>
            <Letter key={letter.id.toString()} indexInArray={index} id={letter.id} avatar={letter.avatar}
                    sender={letter.sender}
                    theme={letter.theme}
                    snippet={letter.snippet}/>
        )
    }
}

export default LetterList
