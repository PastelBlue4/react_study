import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, defaultTheme } from "./theme";

import WeekOne from "./week1/page/WeekOne";
import WeekTwo from "./week2/page/WeekTwo";
import WeekThree from "./week3/page/WeekThree";

const MainContainer = styled.div`
  width: 100%;
  height: 200vh;
  background-color: ${(props) => props.theme.bgColor};
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : defaultTheme}>
      <MainContainer>
        <ButtonContainer>
          <LinkButton to="/">Week 1</LinkButton>
          <LinkButton to="weektwo">Week 2</LinkButton>
          <LinkButton to="weekthree">Week 3</LinkButton>
          <button onClick={() => setIsDarkMode((prev) => !prev)}>toggle</button>
        </ButtonContainer>

        <Routes>
          <Route path="/" element={<WeekOne />} />
          <Route path="weektwo" element={<WeekTwo />} />
          <Route path="weekthree" element={<WeekThree />} />
        </Routes>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
