import styled from "styled-components";

function WeekThree() {
  const Title = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 30px;
    color: ${(props) => props.theme.textColor};
  `;
  return (
    <>
      <Title>Week Three Page :)</Title>
    </>
  );
}

export default WeekThree;
