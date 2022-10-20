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
  border: red 1px solid;
  background-color: ${(props) => props.theme.pointColor2};
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
      <Title>카드형 To Do List</Title>
      <OutPutContainer>
        <ToDoListContainer>
          {toDos.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </ToDoListContainer>
      </OutPutContainer>

      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </>
  );
}
export default ToDoList;
