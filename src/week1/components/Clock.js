import { useEffect, useState } from "react";
import styled from "styled-components";

function Clock() {
  const Title = styled.h1`
    font-weight: 500;
    margin-left: 15px;
  `;
  const Time = styled.h2`
    font-size: 20px;
    margin-left: 15px;
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
      <Title>React clock</Title>
      <Time>현재 시간: {time}</Time>
    </>
  );
}

export default Clock;
