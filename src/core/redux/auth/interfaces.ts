export interface ISignin {
  email: string;
  password: string;
}

export interface ISignup extends ISignin {
  username: string;
}

export interface IResAuth {
  email: string;
  username: string;
  access_token: string;
}

  