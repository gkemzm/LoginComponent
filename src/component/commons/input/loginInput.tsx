import styled from "@emotion/styled";
import { ILoginInputProps } from "./input.types";

interface IInputProps {
  error: boolean;
}
const Input = styled.input`
  width: 25.8rem;
  height: 3.6rem;
  border: ${(props: IInputProps) =>
    props.error ? "2px solid #e42121" : "0.3px solid #dbd9d9"};
  margin: 0.5rem 0rem;
  padding-left: 1rem;
  background-color: #fafafa;
  ::placeholder {
    font-size: 1rem;
    padding-left: 0.1rem;
    color: gray;
    font-size: 1.2rem;
  }
`;

export default function LoginInput(props: ILoginInputProps) {
  return (
    <>
      <Input
        placeholder={props.text}
        onChange={props.onChange}
        type={props.type}
        error={props.error}
        onKeyPress={props.OnKeyPressLogin}
      ></Input>
    </>
  );
}
