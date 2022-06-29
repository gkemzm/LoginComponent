import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPageHTML from "./mainPage.presenter";
import axios from "axios";

export default function MainPageScript() {
  const [usersData, setUserData] = useState<
    Array<{ email: string; name: string }>
  >([{ email: "", name: "" }]);
  const [loginUser, setLoginUser] = useState<string | null>("");

  let navigate = useNavigate();

  useEffect(() => {
    BoardData();
  }, []);

  const BoardData = async () => {
    const users = await axios.get("http://localhost:3001/users");
    const loginUser = localStorage.getItem("loginUserData");
    setUserData([...users?.data]);
    setLoginUser(loginUser);
  };

  const OnClickLogout = () => {
    localStorage.setItem("loginUserData", [] as never);
    navigate("/");
    window.location.reload();
  };

  return (
    <MainPageHTML
      loginUser={loginUser}
      usersData={usersData}
      OnClickLogout={OnClickLogout}
    />
  );
}
