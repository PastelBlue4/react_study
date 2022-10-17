import { useEffect, useState } from "react";
import styled from "styled-components";

function Clock() {
  const ClockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const ClockGroup = styled.div`
    border: solid 1px black;
    width: 30%;
    height: 30%;
  `;

  const Title = styled.h1`
    font-weight: 500;
    margin-top: 20px;
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
        <ClockGroup>
          <Title>React clock</Title>
          <Time>현재 시간: {time}</Time>
        </ClockGroup>
      </ClockContainer>
    </>
  );
}

export default Clock;
