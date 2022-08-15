import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WrongAnswerNote = () => {
  const [answerList, setAnswerList] = useState(JSON.parse(localStorage.getItem("answerList")));
  const [myAnswerList, setMyAnswerList] = useState(JSON.parse(localStorage.getItem("myAnswerList")));
  return (
    <WrongAnswerNoteWrap className="report-content">
      <h2>오답 노트</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>내 답안</th>
            <th>정답</th>
          </tr>
        </thead>
        <tbody>
          {myAnswerList &&
            myAnswerList.map(
              (myAnswer, index) =>
                myAnswer !== answerList[index] && (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{myAnswer}</td>
                    <td>{answerList[index]}</td>
                  </tr>
                )
            )}
        </tbody>
      </table>
      <Link to="/report" className="return-report-link">
        결과로 돌아가기
      </Link>
    </WrongAnswerNoteWrap>
  );
};

const WrongAnswerNoteWrap = styled.div`
  width: 550px;
  margin: 50px auto 30px;
  text-align: center;

  @media screen and (max-width: 480px) {
    max-width: 90vw;
    box-sizing: border-box;
  }

  a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #1a73e8;
    color: #fff;
    border-radius: 10px;
  }
`;

export default WrongAnswerNote;
