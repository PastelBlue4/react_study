import styled from "styled-components";
import Post from "./Post";

function PostList({ userName }) {
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

  const postItem = [
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
  ];

  return (
    <>
      <Container>
        <Title>{userName}의 짜장 멋진 블로그</Title>
        <PostContainer>
          {postItem.map((item) => (
            <Post item={item} />
          ))}
        </PostContainer>
      </Container>
    </>
  );
}

export default PostList;
