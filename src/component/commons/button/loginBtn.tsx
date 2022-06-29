import styled from "@emotion/styled";
import { ILoginBtnProps } from "./btn.types";

interface LoginBtnProps {
  isActive: boolean;
}
const Button = styled.button`
  background-color: ${(props: LoginBtnProps) =>
    props.isActive ? "#434eea" : "#b0e2f6"};
  border: none;
  border-radius: 0.5rem;
  width: 25.8rem;
  height: 3rem;
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  margin-top: 1rem;
  cursor: ${(props) => (props.isActive ? "pointer" : "default")};
`;

export default function LoginBtn(props: ILoginBtnProps) {
  return (
    <>
      <Button
        isActive={props.isActive}
        onClick={props.onClick}
        disabled={props.isActive ? false : true}
      >
        {props.title}
      </Button>
    </>
  );
}
