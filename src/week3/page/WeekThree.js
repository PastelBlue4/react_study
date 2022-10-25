import { Link } from "react-router-dom";
import styled from "styled-components";
import BlogPage from "../components/BlogPage";

function WeekThree() {
  const Title = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 30px;
    color: ${(props) => props.theme.textColor};
  `;

  const AnyThing = styled.div`
    width: 100px;
    height: 30px;
    background-color: beige;
    border: 1px darkcyan solid;
    border-radius: 5px;
    text-align: center;
  `;

  const StyledLinkButton = styled(Link)`
    width: 100px;
    height: 30px;
    background-color: beige;
    border: 1px darkcyan solid;
    border-radius: 5px;
    text-align: center;
  `;

  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `;

  return (
    <>
      <Container>
        <BlogPage />
      </Container>
    </>
  );
}

export default WeekThree;
