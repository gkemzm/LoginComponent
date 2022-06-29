import { useState, useEffect, useRef } from "react";
import LoginHTML from "./login.presenter";
import axios from "axios";
import {
  CheckValidationLoginEmail,
  CheckValidationLoginPassword,
} from "./validation";
import { ChangeEvent } from "react";
import { KeyboardEvent } from "react";

export default function LoginScript() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const OnChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setEmail(event.target.value);
    }, 700);
    const emailInfo = CheckValidationLoginEmail(event.target.value);
    if (!emailInfo) {
      setEmailError(true);
      setIsActive(false);
      return;
    }
    try {
      setEmailError(false);
      if (event.target.value && password) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    } catch {
      alert("email error");
    }
  };

  const OnChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setPassword(event.target.value);
    }, 700);
    const pwInfo = CheckValidationLoginPassword(event.target.value);
    if (!pwInfo) {
      setPasswordError(true);
      setIsActive(false);
      return;
    }
    try {
      setPasswordError(false);
      if (event.target.value && email) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    } catch {
      alert("password error");
    }
  };

  const OnKeyPressLogin = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      OnClickLogin();
    }
  };
  const OnClickLogin = async () => {
    const result = await axios.get("http://localhost:3001/users");
    const userData = result?.data.filter(
      (el: { email: string; password: string }) =>
        el.email === email && el.password === password
    );
    try {
      if (userData.length === 1) {
        localStorage.setItem("loginUserData", JSON.stringify(userData));
        window.location.reload();
      } else {
        alert("잘못된 정보입니다.");
      }
    } catch (error) {
      alert("서버와 연결이 끊겼습니다.");
    }
  };

  return (
    <LoginHTML
      OnChangeEmail={OnChangeEmail}
      OnChangePassword={OnChangePassword}
      OnClickLogin={OnClickLogin}
      OnKeyPressLogin={OnKeyPressLogin}
      isActive={isActive}
      emailError={emailError}
      passwordError={passwordError}
      inputRef={inputRef}
    />
  );
}
