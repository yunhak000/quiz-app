# Quiz App

해당 프로젝트는 `Chrome`에 최적화 되어있습니다.  
[Quiz App 바로가기](https://graceful-fairy-7aebf1.netlify.app)

---

## 프로젝트 소개

퀴즈를 풀 수 있는 간단한 Quiz 웹앱 입니다.

---

## 기술스택

- React
- Zustand
- Styled-Components
- Local Storage
- Cypress
- Neylify

---

## 프로젝트 기능

- `start` 버튼을 눌러서 퀴즈풀기를 시작할 수 있습니다.
- 문제는 총 10문제며 퀴즈가 시작되면 시작하자마자 타이머가 흘러갑니다.
- 4개의 보기 중 하나를 선택할 수 있습니다.
- 하나의 보기 선택시 레이어팝업으로 정답, 오답이 표출되고 다음문제로 이동할 수 있는 버튼이 보입니다.
- `다음문제` 버튼 선택시 레이어팝업이 닫히며 다음문제가 표출됩니다.
- 마지막 문제의 레이어팝업에는 `결과보기`라는 버튼이 표출됩니다.
  - `결과보기`버튼 클릭시 타이머는 멈추며 풀이결과 페이지로 전환됩니다.
- `풀이결과` 페이지에서는 `소요시간` / 정답 및 오답 수,비율`그래프` / `다시풀기, 오답노트` 버튼이 표출됩니다.
  - `오답노트` 버튼 클릭시 나의답과 실제답을 볼 수 있다.
  - `다시풀기` 버튼 클릭시 다시 문제를 풀 수 있다.

---

## 실행방법

- 셋팅

  - git clone https://github.com/yunhak000/quiz-app.git
  - root 경로에 .env 파일 생성 및 내용추가 (내용 : 밑에 박스)

    ```
    REACT_APP_API_URL="https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple"
    ```

  - npm install

- 개발환경 실행

  - npm start
  - chrome 브라우저에서 http://localhost:3000/ 접속

- 테스트 환경 실행
  - npm test
  - cypress 실행창에서 `E2E Testing` 클릭
  - 최하단 `Continue` 클릭 (초기 실행시 최초 1회)
  - chrome 선택 후 `start E2E Testing in Chrome` 클릭
  - 좌측 메뉴 중 `Specs` 클릭 후 `cypress/e2e/app.cy.js` 클릭
