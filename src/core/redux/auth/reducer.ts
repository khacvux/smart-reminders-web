import * as CONST from "./constants";
import * as ACT from "./actions";
import * as INF from "./interfaces";

export interface IInitState extends INF.IResAuth {}

const initState: IInitState = {
  email: "",
  username: "",
  access_token: "",
};

const reducer = (state: IInitState = initState, actions: any) => {};
