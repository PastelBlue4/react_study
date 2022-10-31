import { useState } from "react";
import styled from "styled-components";

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

function WriteForm(props) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const dateObject = new Date();
  const year = dateObject.getFullYear();
  const month = dateObject.getUTCMonth() + 1;
  const day = dateObject.getDate();

  const onSubmit = (e) => {
    e.preventDefault();

    let object = {
      title: title,
      date: `${year}년 ${month}월 ${day}일`,
      contents: contents,
    };
    props.onAddDataHandler(object);
  };

  return (
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
  );
}

export default WriteForm;
