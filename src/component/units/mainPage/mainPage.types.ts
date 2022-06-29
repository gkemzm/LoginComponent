export interface IMainPageHTMLProps {
  loginUser: string | null;
  usersData: Array<{ email: string; name: string }>;
  OnClickLogout: () => void;
}
