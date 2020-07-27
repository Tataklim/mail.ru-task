/**
 * Структура письма, хранящаяся в json
 * поле indexInArray заполняется при передачи данных между компонентами (LetterList и Letter)
 */
export default interface LetterStructure {
    id: number
    avatar: string
    sender: string
    theme: string
    snippet: string
    indexInArray?: number
}
