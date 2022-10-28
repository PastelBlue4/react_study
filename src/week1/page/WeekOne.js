import styled from "styled-components";
import Clock from "../components/Clock";
import CommentList from "../components/CommentList";
import Library from "../components/Library";

function WeekOne() {
  const WeekOneContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => console.log(props)};
  `;

  return (
    <>
      <WeekOneContainer>
        <Library />
        <Clock />
        <CommentList />
      </WeekOneContainer>
    </>
  );
}

export default WeekOne;
