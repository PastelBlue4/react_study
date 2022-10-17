import styled from "styled-components";
import Clock from "../components/Clock";
import CommentList from "../components/CommentList";
import Library from "../components/Library";

function WeekOne() {
  const WeekOneContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: solid red 1px;
    color: ${(props) => props.theme.textColor};
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
