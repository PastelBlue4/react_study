import { useEffect, useState } from "react";
import styled from "styled-components";

function Clock() {
  const ClockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Title = styled.h1`
    font-weight: 500;
    margin-left: 15px;
    font-size: 30px;
  `;
  const Time = styled.h2`
    font-size: 20px;
    margin-left: 15px;
    margin-top: 10px;
  `;

  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <ClockContainer>
        <Title>React clock</Title>
        <Time>현재 시간: {time}</Time>
      </ClockContainer>
    </>
  );
}

export default Clock;
