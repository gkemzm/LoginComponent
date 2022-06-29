import React, { useEffect, useState } from "react";
import MainPage from "./pages/main/mainPage";
import LoginPage from "./pages/login/loginPage";
import { Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";

const Body = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(250, 250, 250);
`;

export default function App() {
  const [userData, setUserData] = useState<Array<string | null>>([]);

  useEffect(() => {
    UserData();
  }, []);

  const UserData = () => {
    const user: Array<string | null> = [];
    if (localStorage.getItem("loginUserData") !== "") {
      user.push(localStorage.getItem("loginUserData"));
      setUserData(user);
    }
  };
  return (
    <>
      <Body>
        <Routes>
          {userData.length === 0 || userData?.[0] === null ? (
            <>
              <Route path="/" element={<LoginPage />} />
            </>
          ) : (
            <>
              <Route path="/" element={<MainPage />} />
            </>
          )}
        </Routes>
      </Body>
    </>
  );
}
