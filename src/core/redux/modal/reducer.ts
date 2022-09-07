import * as CONST from "./constants";

export interface IAction {
  type: string;
  payload: any;
}

export interface IInitState {
  addReminderCardVisible: boolean;
  reminderModal: boolean;
}

const initState: IInitState = {
  addReminderCardVisible: false,
  reminderModal: false,
};

const reducer = (state: IInitState = initState, action: IAction) => {
  switch (action.type) {
    case CONST.OPEN_ADD_REMINDER_CARD:
      return {
        ...state,
        addReminderCardVisible: true,
      };
    case CONST.CLOSE_ADD_REMINDER_CARD:
      return {
        ...state,
        addReminderCardVisible: false,
      };
    case CONST.OPEN_REMINDER_MODAL:
      return {
        ...state,
        reminderModal: true,
      };
    case CONST.CLOSE_REMINDER_MODAL:
      return {
        ...state,
        reminderModal: false,
      };
    default:
      return state;
  }
};

export default reducer;
