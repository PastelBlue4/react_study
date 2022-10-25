import { useState } from "react";
import styled from "styled-components";
import PostList from "./PostList";

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LoginTitle = styled.h1`
  font-size: 32px;
  color: beige;
  margin-top: 20px;
`;

const StyledForm = styled.form`
  margin-top: 20px;
`;

const StyledInput = styled.input`
  width: 400px;
  height: 30px;
  font-size: 20px;
  margin-right: 20px;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: aliceblue;
`;

const ErrorMessage = styled.span`
  font-size: 22px;
  color: #ff577f;
  margin-top: 10px;
`;

function BlogPage() {
  const onSubmit = (e) => {
    if (userName.length < 2) {
      setMessage(true);
      e.preventDefault();
    } else {
      setIsLogin(true);
      e.preventDefault();
    }
  };

  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState(false);

  return (
    <>
      {isLogin ? (
        <PostList userName={userName} />
      ) : (
        <LoginFormContainer>
          <LoginTitle>닉네임을 입력해 주세요.</LoginTitle>
          <StyledForm onSubmit={onSubmit}>
            <StyledInput
              placeholder="write your name  :)"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <StyledButton>Log In</StyledButton>
          </StyledForm>{" "}
          {message ? (
            <ErrorMessage>닉네임을 입력해 주세요!</ErrorMessage>
          ) : null}
        </LoginFormContainer>
      )}
    </>
  );
}
export default BlogPage;
