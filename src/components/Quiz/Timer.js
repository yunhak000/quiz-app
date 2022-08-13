import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useStore from "../../store";

const Timer = () => {
  const { minutes, setMinutes, seconds, setSeconds } = useStore();

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <TimerWrap>
      {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
    </TimerWrap>
  );
};

const TimerWrap = styled.p`
  display: inline-block;
  position: absolute;
  bottom: calc(100% + 10px);
  right: 0;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #fff;
  border: 2px solid #444;
`;

export default Timer;
