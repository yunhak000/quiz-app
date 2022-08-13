import { Link } from "react-router-dom";
import styled from "styled-components";
import useStore from "../../store";

const Answer = () => {
  const { quizList, quizIndex, setQuizIndex, setIsShowAnswer, answerList, myAnswerList, minutes, seconds } = useStore();

  const getNextQuiz = () => {
    const radioButton = document.querySelector("input[type=radio][name=example_list]:checked");

    radioButton.checked = false;

    setIsShowAnswer(false);

    quizIndex < quizList.length && setQuizIndex(quizIndex + 1);
  };

  const answerSubmit = () => {
    setIsShowAnswer(false);
    setQuizIndex(1);

    minutes === 0 ? localStorage.setItem("finishTime", seconds + "초") : localStorage.setItem("finishTime", minutes + "분" + seconds + "초");

    localStorage.setItem("answerList", JSON.stringify(answerList));
    localStorage.setItem("myAnswerList", JSON.stringify(myAnswerList));
  };

  return (
    <AnswerWrap>
      <div className="answer-content">
        {quizIndex === 10 && <p className="final-question-description">모든문제를 다 푸셨습니다 수고하셨습니다 !</p>}
        {answerList[quizIndex - 1] === myAnswerList[quizIndex - 1] ? (
          <>
            <img src="/images/true.png" alt="정답이미지" />
          </>
        ) : (
          <>
            <img src="/images/false.png" alt="오답이미지" />
          </>
        )}
        {quizIndex !== 10 ? (
          <button
            onClick={() => {
              getNextQuiz();
            }}
          >
            다음문제 &rarr;
          </button>
        ) : (
          <Link to="/report">
            <button
              onClick={() => {
                answerSubmit();
              }}
            >
              결과 보기
            </button>
          </Link>
        )}
      </div>
    </AnswerWrap>
  );
};

const AnswerWrap = styled.div`
  z-index: 1;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);

  .answer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .final-question-description {
      font-size: 30px;
      font-weight: bold;
      color: #fff;

      @media screen and (max-width: 480px) {
        font-size: 20px;
      }
    }

    img {
      margin: 30px 0;

      @media screen and (max-width: 480px) {
        width: 200px;
      }
    }

    button {
      padding: 20px 30px;
      cursor: pointer;
      border: none;
      border-radius: 20px;
      font-size: 20px;
      font-weight: bold;
      transition: 0.3s;
      background-color: #fff;

      :hover {
        background-color: #1a73e8;
        color: #fff;
      }
    }
  }
`;

export default Answer;
