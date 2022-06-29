import { KeyboardEvent, MouseEvent } from "react";

export interface ILoginBtnProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  title: string;
  isActive: boolean;
}
