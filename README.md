## Login Component

## 개발환경 및 사용도구

프레임워크 : React v18.2.0 <br>
프로그래밍 언어 : Typescript <br>
서버/통신 : json-server/axios <br>
기타 : eslint, emotion, localstorage, react-router-dom

## Remark

로그인 컴포넌트 제작간 Token이 아닌 localstorage를 통해 정보를 저장하는 방식을 사용하였으므로, <br>
리랜더링 시 useEffect를 사용해 localstorage의 정보를 받아와 로그인 정보를 저장/유지 처리하였습니다. <br>
또한기존 포트폴리오에서 사용하던 Next Router가 아닌 React Router방식으로 구현을 해보았으며,<br> 
Container/Presenter 패턴을 이용해 구조를 나눴습니다.


## 결과물

![1](https://user-images.githubusercontent.com/100768044/176333924-8a07cafa-00fd-4544-ac5d-1c26a6985959.PNG)<br>
1. 초기화면으로 아이디 비밀번호를 입력가능하며 아이디는 E-mail형식입니다. <br>
   useRef를 사용하여 페이지 접속시 바로 아이디 부분에 focus가 잡히도록 설정해놨습니다. <br>

![2](https://user-images.githubusercontent.com/100768044/176334032-e2fc6991-0993-439b-8312-41edea8a7c59.PNG)<br>

2. 비밀번호는 영어대소문자+특수문자+숫자 형식으로 입력값이 적합하지 않을시 input주변 붉은색 테두리를 띄워줍니다.<br>
   validation.ts 파일의 검증함수를 통해서 검증됩니다.

![3](https://user-images.githubusercontent.com/100768044/176334328-5bfbf4b5-b89d-46d9-baad-b0089ccd4c3e.PNG)<br>
3. 아이디 비밀번호의 형식이 맞을경우 버튼이 활성화 됩니다. <br>
   validation.ts 파일의 검증함수를 통해서 검증됩니다.

![4](https://user-images.githubusercontent.com/100768044/176334802-d3584136-d2fc-43ab-94b4-09544b8842f7.PNG)<br>
4. 임시서버에 등록되어 있는 아이디와 비밀번호가 맞다면 해당 화면으로 라우팅되며 localstorage에 정보가 저장됩니다. <br>
   새로고침및 재접속을 하더라도 정보가 유지되며 로그아웃을 클릭할시localstorage가 초기화되며 로그인 화면으로 라우팅됩니다.<br>
   
![6](https://user-images.githubusercontent.com/100768044/176335159-18186945-1e86-4d63-9f3b-8ef5a8e19feb.PNG)<br>
5. 만약 임시서버에 없는 아이디와 비밀번호일 경우 경고 알럿이 나오게 됩니다.

