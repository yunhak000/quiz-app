import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Report = () => {
  const [answerList, setAnswerList] = useState(JSON.parse(localStorage.getItem("answerList")));
  const [myAnswerList, setMyAnswerList] = useState(JSON.parse(localStorage.getItem("myAnswerList")));
  const [finishTime, setFinishTime] = useState(localStorage.getItem("finishTime"));
  const [answerCount, setAnswerCount] = useState(0);
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);

  useEffect(() => {
    let answerCount = 0;
    let wrongAnswerCount = 0;

    myAnswerList &&
      myAnswerList.map((myAnswer, index) => {
        myAnswer === answerList[index] ? answerCount++ : wrongAnswerCount++;
      });

    setAnswerCount(answerCount);
    setWrongAnswerCount(wrongAnswerCount);
  }, []);

  return (
    <ReportWrap answerCount={answerCount} wrongAnswerCount={wrongAnswerCount}>
      {answerList ? (
        <div className="report-content">
          <h2>풀이 결과</h2>
          <p className="report-description">
            총 {answerList && answerList.length}문제 / 소요시간 <span>{finishTime}</span>
          </p>
          <table>
            <thead>
              <tr>
                <th>정답</th>
                <th>오답</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{answerCount}</td>
                <td>{wrongAnswerCount}</td>
              </tr>
            </tbody>
          </table>
          <div className="statistics">
            <div className="answer-ratio">
              <span className="ratio">{answerCount}0%</span>
              <span className="tag">정답</span>
            </div>
            <div className="wrong-answer-ratio">
              <span className="ratio">{wrongAnswerCount}0%</span>
              <span className="tag">오답</span>
            </div>
          </div>
          <div className="report-button-area">
            <Link
              to="/standby"
              onClick={() => {
                localStorage.clear();
              }}
            >
              다시풀기
            </Link>
            <Link to="/wrongAnswerNote">오답노트</Link>
          </div>
        </div>
      ) : (
        <div>
          <p>퀴즈를 풀어야 결과를 볼 수 있습니다.</p>
          <Link
            to="/standby"
            onClick={() => {
              localStorage.clear();
            }}
          >
            퀴즈풀러가기
          </Link>
        </div>
      )}
    </ReportWrap>
  );
};

const ReportWrap = styled.div`
  width: 450px;
  margin: 50px auto 0;
  text-align: center;

  .report-content {
    background-color: #fff;
    padding: 30px;
    border: 1px solid #444;
    border-radius: 20px;

    .report-description {
      span {
        font-weight: bold;
      }
    }

    table {
      width: 100%;
      margin: 30px 0 40px;

      td,
      th {
        border: 1px solid #444;
        padding: 10px;
      }

      th {
        background-color: #ddd;
        font-weight: bold;
      }
    }

    .statistics {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      border-bottom: 1px solid #ddd;
      margin-bottom: 30px;
      height: 100px;

      div {
        position: relative;
        width: 30px;
        border-radius: 5px 5px 0 0;

        .ratio {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
        }

        .tag {
          position: absolute;
          top: calc(100% + 5px);
          left: 50%;
          transform: translateX(-50%);
          font-size: 12px;
          white-space: nowrap;
        }
      }

      .answer-ratio {
        margin-right: 30px;
        height: ${(props) => (props.answerCount === 0 ? "0%" : props.answerCount + "0%")};
        background-color: #1a73e8;
      }

      .wrong-answer-ratio {
        height: ${(props) => (props.wrongAnswerCount === 0 ? "0%" : props.wrongAnswerCount + "0%")};
        background-color: #cb3232;
      }
    }

    .report-button-area {
      display: flex;
      justify-content: space-between;

      a {
        display: inline-block;
        width: 48%;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 10px;
        color: #fff;

        :first-child {
          background-color: #1a73e8;
        }

        :last-child {
          background-color: #cb3232;
        }
      }
    }
  }
`;

export default Report;
