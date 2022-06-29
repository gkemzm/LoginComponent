import { ChangeEvent, KeyboardEvent, MouseEvent } from "react";

export interface ILoginInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  OnKeyPressLogin: (event: KeyboardEvent<HTMLInputElement>) => void;
  type: string;
  inputRef: React.RefObject<HTMLInputElement>;
  text: string;
  error: boolean;
}
