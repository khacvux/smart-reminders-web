import * as CONST from './constants'

export const openAddReminderCard = () => {
    return {
        type: CONST.OPEN_ADD_REMINDER_CARD,
        payload: true
    }
}

export const closeAddReminderCard = () => {
    return {
        type: CONST.CLOSE_ADD_REMINDER_CARD,
        payload: false
    }
}

export const openReminderModal = () => {
    return {
        type: CONST.OPEN_REMINDER_MODAL,
        payload: true
    }
}

export const closeReminderModal = () => {
    return {
        type: CONST.CLOSE_REMINDER_MODAL,
        payload: false
    }
}