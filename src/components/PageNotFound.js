import { Link } from "react-router-dom";
import styled from "styled-components";

const PageNotFound = () => {
  return (
    <PageNotFoundWrap>
      <p>페이지를 찾을 수 없습니다.</p>
      <Link to="/">첫 화면으로 돌아가기</Link>
    </PageNotFoundWrap>
  );
};

const PageNotFoundWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
      font-size: 24px;
    }
  }

  a {
    display: inline-block;
    padding: 15px 20px;
    background-color: #1a73e8;
    color: #fff;
    border-radius: 15px;

    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

export default PageNotFound;
