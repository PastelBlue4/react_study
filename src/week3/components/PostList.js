import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Post from "./Post";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 32px;
  color: beige;
  margin: 5px;
`;

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: gray;
  font-size: 20px;
  margin-top: 20px;
`;

const WriteButton = styled.button`
  font-size: 18px;
  padding: 8px 16px;
  border-radius: 15px;
  color: black;
  border: solid gray 1px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 50%;
`;

const WirteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WriteTitle = styled.h1`
  font-size: 32px;
  color: beige;
  margin-bottom: 20px;
`;

const StyledPostTitleInput = styled.input`
  width: 600px;
  height: 30px;
  font-size: 16px;
`;

const StyledPostContentsTextA = styled.textarea`
  width: 600px;
  height: 300px;
  margin-top: 50px;
  font-size: 16px;
`;

const PostSubmutButton = styled.button`
  margin-top: 15px;
  padding: 15px 25px;
  border-radius: 15px;
  color: AAC4FF;
  font-size: 16px;
`;

function PostList({ userName }) {
  const [isWrite, setIsWrite] = useState(false);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [postItems, setpostItems] = useState([
    {
      title: "10월 26일 일기",
      date: "2022년 10월 26일",
      contents: "오늘은 날이 화창했다. 왜 화창하지? 좀 그러네요 ",
    },
    {
      title: "10월 21일 일기",
      date: "2022년 10월 21일",
      contents: "오늘은 날이 화창했다. 왜 화창하지? 좀 그러네요 ",
    },
    {
      title: "10월 25일 일기",
      date: "2022년 10월 25일",
      contents: "오늘은 날이 화창했다. 왜 화창하지? 좀 그러네요 ",
    },
    {
      title: "10월 24일 일기",
      date: "2022년 10월 24일",
      contents: "오늘은 날이 화창했다. 왜 화창하지? 좀 그러네요 ",
    },
    {
      title: "10월 23일 일기",
      date: "2022년 10월 23일",
      contents: "오늘은 날이 화창했다. 왜 화창하지? 좀 그러네요 ",
    },
  ]);

  const onClick = () => {
    setIsWrite(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let object = {
      title: title,
      date: "2020년 10월 26일",
      contents: contents,
    };
    setpostItems((oldArray) => [object, ...oldArray]);
    setIsWrite(false);
  };
  return (
    <>
      {isWrite ? (
        <>
          <WirteContainer>
            <WriteTitle>입력폼</WriteTitle>
            <FormContainer>
              <StyledPostTitleInput
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="제목을 입력해 주세용."
              />
              <StyledPostContentsTextA
                onChange={(e) => {
                  setContents(e.target.value);
                }}
                placeholder="내용을 입력해 주세용."
              />
              <PostSubmutButton onClick={onSubmit}>작성완료</PostSubmutButton>
            </FormContainer>
          </WirteContainer>
        </>
      ) : (
        <Container>
          <Title>{userName}의 짜장 멋진 블로그</Title>
          <ButtonContainer>
            <WriteButton onClick={onClick}>글작성 하기 </WriteButton>
          </ButtonContainer>
          <PostContainer>
            {postItems.map((item, index) => (
              <Post key={index} item={item} />
            ))}
          </PostContainer>
        </Container>
      )}
    </>
  );
}

export default PostList;
