import * as S from "./mainPage.styles";
import { IMainPageHTMLProps } from "./mainPage.types";

export default function MainPageHTML(props: IMainPageHTMLProps) {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.LoginUserInfo>
            <S.BasicRow>
              <S.BasicColumn>
                <S.BasicRow>
                  <S.Text>로그인 계정</S.Text>
                  <S.Logout onClick={props.OnClickLogout}>로그아웃</S.Logout>
                </S.BasicRow>
                <S.LoginUserId>
                  {
                    String(props.loginUser)
                      .split('[{"email":"')
                      .join("")
                      .split('",')[0]
                  }
                </S.LoginUserId>
                <S.LoginUserName>
                  {
                    String(props.loginUser)
                      .split('"name":"')
                      .join("")
                      .split('"}]')
                      .join("")
                      .split(",")[2]
                  }
                </S.LoginUserName>
              </S.BasicColumn>
            </S.BasicRow>
          </S.LoginUserInfo>
          <S.UserRecommend>
            <S.Text>회원리스트</S.Text>
          </S.UserRecommend>
          {props.usersData?.map((el) => (
            <S.RecommendList key={el.email}>
              <S.BasicRow>
                <S.BasicColumn>
                  <S.UserName>{el.name}</S.UserName>
                  <S.UserEmail>{el.email}</S.UserEmail>
                </S.BasicColumn>
              </S.BasicRow>
            </S.RecommendList>
          ))}
        </S.Wrapper>
      </S.Container>
    </>
  );
}
