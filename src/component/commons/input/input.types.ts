import { ChangeEvent, KeyboardEvent } from "react";

export interface IRefLoginInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  OnKeyPressLogin: (event: KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  type: string;
  text: string;
  error: boolean;
}

export interface ILoginInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  OnKeyPressLogin: (event: KeyboardEvent<HTMLInputElement>) => void;
  type: string;
  text: string;
  error: boolean;
}
