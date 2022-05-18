export interface Input {
  label: string;
  type: "email" | "password";
}

export interface FormData {
  email: string;
  password: string;
}

const inputsLogin: Input[] = [
  { label: "E-mail", type: "email" },
  { label: "Senha", type: "password" },
];

const inputInfos = { inputsLogin };

export { inputInfos };
