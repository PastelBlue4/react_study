import { Link } from "react-router-dom";
import styled from "styled-components";
import BlogPage from "../components/BlogPage";

function WeekThree() {
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
