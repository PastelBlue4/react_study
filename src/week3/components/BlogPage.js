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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 400px;
  height: 30px;
  font-size: 20px;
  margin-right: 20px;
  border-radius: 13px;
  border: 1px beige solid;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 34px;
  background-color: aliceblue;
  border-radius: 13px;
  cursor: pointer;
  &:hover {
    background-color: #81c6e8;
  }
`;

const ErrorMessage = styled.span`
  font-size: 22px;
  color: #ff577f;
  margin-top: 15px;
`;

function BlogPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState(false);

  const onSubmit = (e) => {
    if (userName.length < 1) {
      setMessage(true);
      e.preventDefault();
    } else {
      setIsLogin(true);
      e.preventDefault();
    }
  };

  const onChange = (e) => {
    setUserName(e.target.value);
    setMessage(false);
  };

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
              onChange={onChange}
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
