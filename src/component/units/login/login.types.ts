import { ChangeEvent, KeyboardEvent, MouseEvent } from "react";

export interface ILoginHTMLProps {
  OnChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  OnChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  OnClickLogin: (event: MouseEvent<HTMLButtonElement>) => void;
  OnKeyPressLogin: (event: KeyboardEvent<HTMLInputElement>) => void;
  isActive: boolean;
  emailError: boolean;
  passwordError: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}
