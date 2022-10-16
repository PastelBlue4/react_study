import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import WeekOne from "./week1/page/WeekOne";
import WeekTwo from "./week2/page/WeekTwo";
import WeekThree from "./week3/page/WeekThree";

const MainContainer = styled.div`
  width: 100%;
  height: 200vh;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  margin-left: 10px;
  font-size: 20px;
  color: #eef1ff;
  border: solid 2px #d2daff;
  border-radius: 8px;
  padding: 10px 13px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

function App() {
  return (
    <MainContainer>
      <ButtonContainer>
        <LinkButton to="/">Week 1</LinkButton>
        <LinkButton to="weektwo">Week 2</LinkButton>
        <LinkButton to="weekthree">Week 3</LinkButton>
      </ButtonContainer>

      <Routes>
        <Route path="/" element={<WeekOne />} />
        <Route path="weektwo" element={<WeekTwo />} />
        <Route path="weekthree" element={<WeekThree />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
