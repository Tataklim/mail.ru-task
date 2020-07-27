/**
 * Шина событий - для передачи сообщений между компонентами
 */
class EventBus {
    events: any
    constructor() {
        this.events = {}
    }

    /**
     * Подписка на событие
     * @param {string} event - сообщение
     * @param {function} listener - вызываемая функция
     * @return {EventBus}
     */
    on(event: string, listener: Function) {
        (this.events[event] || (this.events[event] = [])).push(listener)
        return this
    }

    /**
     * @param {string} event - сообщение
     * @param {Object} arg - список аргументов, передаваемый в функции, подписанные на данное сообщение
     */
    emit(event: string, ...arg: any) {
        (this.events[event] || []).slice().forEach((listener: any) => listener(...arg))
    }
}

export const globalEventBus = new EventBus()
