import create from "zustand";

const useStore = create((set) => ({
  quizList: [],
  setQuizList: (quizList) => set({ quizList }),
  quizIndex: 1,
  setQuizIndex: (quizIndex) => set({ quizIndex }),
  exampleList: [],
  setExampleList: (exampleList) => set({ exampleList }),
  answerList: [],
  setAnswerList: (answerList) => set({ answerList }),
  myAnswerList: [],
  setMyAnswerList: (myAnswerList) => set({ myAnswerList }),
  isShowAnswer: false,
  setIsShowAnswer: (isShowAnswer) => set({ isShowAnswer }),
  stopWatch: null,
  setStopWatch: (stopWatch) => set({ stopWatch }),
  minutes: 0,
  setMinutes: (minutes) => set({ minutes }),
  seconds: 0,
  setSeconds: (seconds) => set({ seconds }),
}));

export default useStore;
