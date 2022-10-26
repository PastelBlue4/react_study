import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50rem;
  margin-bottom: 30px;
  border: solid 1px black;
  border-radius: 15px;
  padding: 20px;
  background-color: white;
`;

const StyledTitle = styled.h1`
  font-size: 28px;
  color: #272727;
  margin-bottom: 7px;
`;

const StyledDate = styled.span`
  font-size: 15px;
  margin-bottom: 20px;
`;
const StyledContents = styled.span`
  font-size: 17px;
`;

function Post(props) {
  console.log(props);

  return (
    <>
      <PostContainer>
        <StyledTitle>{props.item.title}</StyledTitle>
        <StyledDate>{props.item.date}</StyledDate>
        <StyledContents>{props.item.contents} </StyledContents>
      </PostContainer>
    </>
  );
}
export default Post;
