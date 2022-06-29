import LoginBtn from "../../commons/button/loginBtn";
import LoginInput from "../../commons/input/loginInput";
import * as S from "./login.styles";
import { ILoginHTMLProps } from "./login.types";

export default function LoginHTML(props: ILoginHTMLProps) {
  return (
    <>
      <S.Container>
        <S.LoginBox>
          <S.Title>Login</S.Title>
          <LoginInput
            type="text"
            text="전화번호, 사용자 이름 또는 이메일"
            onChange={props.OnChangeEmail}
            error={props.emailError}
            inputRef={props.inputRef}
            OnKeyPressLogin={props.OnKeyPressLogin}
          />
          <LoginInput
            type="password"
            text="비밀번호"
            onChange={props.OnChangePassword}
            error={props.passwordError}
            inputRef={props.inputRef}
            OnKeyPressLogin={props.OnKeyPressLogin}
          />
          <LoginBtn
            isActive={props.isActive}
            title="로그인"
            onClick={props.OnClickLogin}
          />
        </S.LoginBox>
      </S.Container>
    </>
  );
}
