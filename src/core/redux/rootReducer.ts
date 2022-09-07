import { combineReducers } from "redux";
import modal, { IInitState as ModalIInitState } from "./modal/reducer";

export interface IRootReducer {
  modal: ModalIInitState;
}

export default combineReducers<IRootReducer>({
  modal,
});
