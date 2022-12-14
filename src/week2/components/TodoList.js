import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 30px;
  font-weight: 500;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 20px;
`;
const OutPutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ToDoListContainer = styled.div`
  width: 80%;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 5px;
  column-gap: 3px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.pointColor2};
`;

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  width: auto;
  margin-top: 10px;
`;

const Input = styled.input`
  width: 450px;
  height: 30px;
`;

const InputButton = styled.button`
  color: ${(props) => props.theme.pointColor1};
  background-color: ${(props) => props.theme.pointColor2};
`;

const MaxComment = styled.span`
  font-size: 30px;
  color: ${(props) => props.theme.textColor};
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: 500;
  margin-top: 20px;
`;

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  return (
    <>
      <Title>To Do List</Title>
      <OutPutContainer>
        <ToDoListContainer>
          {toDos.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </ToDoListContainer>
      </OutPutContainer>

      <FormContainer onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="할 일을 추가해보세요."
        />
        <InputButton disabled={toDos.length > 5 ? true : false}>
          Add To Do
        </InputButton>
      </FormContainer>
      {toDos.length > 5 ? <MaxComment>리스트가 꽉 찼습니다!</MaxComment> : null}
    </>
  );
}
export default ToDoList;
