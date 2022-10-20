import { useEffect, useState } from "react";
import styled from "styled-components";

function Clock() {
  const ClockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const ClockGroup = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  `;

  const GropContainer = styled.div``;

  const Title = styled.h1`
    font-weight: 600;
    margin-top: 20px;
    font-size: 35px;
  `;
  const Time = styled.h2`
    font-size: 20px;
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
          <GropContainer>
            <Title>React clock</Title>
            <Time>현재 시간: {time}</Time>
          </GropContainer>
        </ClockGroup>
      </ClockContainer>
    </>
  );
}

export default Clock;
