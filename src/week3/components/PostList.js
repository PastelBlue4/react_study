import { useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import WriteForm from "./WriteForm";

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

function PostList({ userName }) {
  const [isWrite, setIsWrite] = useState(false);

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

  const AddDataHandler = (data) => {
    setpostItems((oldArray) => [data, ...oldArray]);
    setIsWrite(false);
  };

  const onClick = () => {
    setIsWrite(true);
  };

  return (
    <>
      {isWrite ? (
        <>
          <WriteForm onAddDataHandler={AddDataHandler} />
        </>
      ) : (
        <Container>
          <Title>{userName}의 간장게장같은 블로그</Title>
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
