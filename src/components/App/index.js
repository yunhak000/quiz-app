import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Reset } from "styled-reset";
import GlobalStyles from "./GlobalStyles";
import Standby from "../Standby";
import Quiz from "../Quiz";
import Report from "../Report";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Reset />
      <Router>
        <Routes>
          <Route path="/standby" element={<Standby />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
