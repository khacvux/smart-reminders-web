declare interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

declare interface IAction {
  type: string;
  payload: any;
}

declare interface IActionFail {
  message: any;
}
