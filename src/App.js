import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, defaultTheme } from "./theme";

import WeekOne from "./week1/page/WeekOne";
import WeekTwo from "./week2/page/WeekTwo";
import BlogPage from "./week3/components/BlogPage";

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
  margin-bottom: 20px;
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

const DarkModeButton = styled.button`
  margin-left: 30px;
  font-size: 20px;
  color: ${(props) => props.theme.toggleModeTextColor};
  border: ${(props) => props.theme.toggleModeTextColor}, 1px solid;
  background-color: ${(props) => props.theme.bgColor};
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
          <DarkModeButton onClick={() => setIsDarkMode((prev) => !prev)}>
            toggle
          </DarkModeButton>
        </ButtonContainer>

        <Routes>
          <Route path="/" element={<WeekOne />} />
          <Route path="weektwo" element={<WeekTwo />} />
          <Route path="weekthree" element={<WeekThree />} />
          <Route path="blogPage" element={<BlogPage />} />
        </Routes>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
