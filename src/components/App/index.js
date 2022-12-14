import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Reset } from "styled-reset";
import GlobalStyles from "./GlobalStyles";
import Standby from "../Standby";
import Quiz from "../Quiz";
import Report from "../Report";
import WrongAnswerNote from "../WrongAnswerNote";
import PageNotFound from "../PageNotFound";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Reset />
      <Router>
        <Routes>
          <Route path="/" element={<Standby />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/report" element={<Report />} />
          <Route path="/wrongAnswerNote" element={<WrongAnswerNote />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
