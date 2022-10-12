import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <h1>react clock</h1>
      <h2>현재 시간: {time}</h2>
    </>
  );
}

export default Clock;
