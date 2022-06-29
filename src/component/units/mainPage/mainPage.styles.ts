import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 97.5rem;
  padding: 2rem 0rem;
  margin-top: 6rem;
`;
export const BasicColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BasicRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  max-width: 10rem;
  font-size: 1.2rem;
  font-weight: 700;
`;
export const UserEmail = styled.div`
  display: flex;
  align-items: center;
  max-width: 20rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #bebebe;
  margin-top: 0.5rem;
`;

export const Wrapper = styled.div`
  padding: 4rem 2rem;
`;

export const LoginUserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3rem;
`;

export const LoginUserName = styled.div`
  font-size: 1.2rem;
  color: gray;
`;

export const LoginUserId = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  padding: 1rem 0rem;
`;

export const UserRecommend = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`;
export const Text = styled.p`
  color: gray;
  font-size: 1.3rem;
  font-weight: 700;
`;

export const Logout = styled.button`
  margin-left: 1rem;
  border: 1px solid #bdbdbd;
  border-radius: 1rem;
  background-color: beige;
  cursor: pointer;
`;
export const RecommendList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0rem;
`;
