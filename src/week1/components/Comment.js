import styled from "styled-components";

function Comment(props) {
  const UserName = styled.span`
    margin-left: 10px;
    font-size: 22px;
  `;

  const Message = styled.span`
    margin-left: 10px;
    font-size: 22px;
  `;

  console.log(props);
  return (
    <>
      <div>
        <UserName>{props.name}</UserName>
        <Message>{props.comments}</Message>
      </div>
    </>
  );
}

export default Comment;
