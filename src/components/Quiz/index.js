import { useEffect } from "react";
import styled from "styled-components";
import useStore from "../../store";

import Answer from "../Modal/Answer";
import Timer from "./Timer";

const Quiz = () => {
  const { quizList, setQuizList, quizIndex, exampleList, setExampleList, setAnswerList, myAnswerList, setMyAnswerList, isShowAnswer, setIsShowAnswer } = useStore();

  useEffect(() => {
    localStorage.clear();
    getQuizList();
  }, []);

  useEffect(() => {
    quizList && getExampleList(quizIndex - 1);
  }, [quizList, quizIndex]);

  const getQuizList = async () => {
    const res = await fetch("https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple");
    const quizList = await res.json();
    const answerList = quizList.results.map((quiz) => quiz.correct_answer);

    console.log(answerList);

    setAnswerList(answerList);
    setQuizList(quizList.results);
  };

  const getExampleList = (index) => {
    if (quizList.length) {
      const exampleList = [...quizList[index].incorrect_answers];

      exampleList.push(quizList[index].correct_answer);
      exampleList.sort(() => Math.random() - 0.5);

      setExampleList(exampleList);
    }
  };

  const setMyAnswer = (answer) => {
    setMyAnswerList([...myAnswerList, answer]);
    setIsShowAnswer(true);
  };

  return (
    <>
      {isShowAnswer && <Answer />}
      <QuizWrap>
        <div className="container quiz-content">
          <Timer />
          <p className="question">
            문제{quizIndex} : {quizList.length && quizList[quizIndex - 1].question}
          </p>
          <ul>
            {exampleList.map((example, index) => {
              return (
                <li key={index}>
                  <input
                    type="radio"
                    id={"example_0" + (index + 1)}
                    name="example_list"
                    value={example}
                    onChange={(e) => {
                      setMyAnswer(e.target.value);
                    }}
                  />
                  <label htmlFor={"example_0" + (index + 1)}>{example}</label>
                </li>
              );
            })}
          </ul>
        </div>
      </QuizWrap>
    </>
  );
};

const QuizWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .quiz-content {
    position: relative;
    padding: 20px;
    font-size: 22px;
    border-radius: 20px;
    border: 2px solid #444;
    background-color: #fff;

    .timer {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    .question {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;
    }

    li:last-child label {
      margin-bottom: 0;
    }

    button {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    label {
      cursor: pointer;
      display: block;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 10px;
      border: 1px solid #ddd;

      :before {
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-right: 10px;
        border: 1px solid #444;
        border-radius: 50%;
        background-color: #fff;
      }
    }

    input:checked + label {
      :before {
        background-color: #1a73e8;
      }
    }

    input {
      display: none;
    }
  }
`;

export default Quiz;
