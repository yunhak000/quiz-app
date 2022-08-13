import { Link } from "react-router-dom";
import styled from "styled-components";

const Standby = () => {
  return (
    <Link to="/quiz">
      <StartQuiz>퀴즈 풀기</StartQuiz>
    </Link>
  );
};

const StartQuiz = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 30px;
  border-radius: 20px;
  font-size: 30px;
  transition: 0.3s;
  cursor: pointer;
  background-color: #1a73e8;
  color: #fff;

  :hover {
    background-color: #4f9bff;
  }
`;

export default Standby;
