import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Todo from '../components/Todo';
import { todoActions } from '../store/todo/toDoSlice';

const TodoForm = () => {
    const dispatch = useDispatch();
    const [enteredInput, setEnteretInput] = useState("");
   
  
    const inputChangeHandler = (event) => {
      setEnteretInput(event.target.value);
    };
  
  
  
    const addHandler = (event) => {
      event.preventDefault();
      const obj = {
        id: new Date().toString(),
        title: enteredInput,
        completed: false,
  
      };
      setEnteretInput("");
      dispatch(todoActions.add(obj));
    };
    const deleteAll = () => {
    dispatch(todoActions.deleteAll([]))
    }
    const disabled = enteredInput.trim().length > 1
  return (
    <>
      <Container>
        <Input
          type={"text"}
          placeholder={"enteret youre text"}
          value={enteredInput}
          onChange={inputChangeHandler}
        />
        <Button onClick={addHandler} disabled={!disabled}>add</Button>
        <Button onClick={deleteAll}>DELETE ALL</Button>
      </Container>
      <TodoContainer>
       <Todo/>
      </TodoContainer>
    </>
  )
}

export default TodoForm

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
`;
const Container = styled.div`
  background-color: #5c5c78;
  width: 400px;
  margin: auto;
  text-align: center;
  box-shadow: -3px 3px 37px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -3px 3px 37px 0px rgba(0, 0, 0, 0.75);
  padding: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
`;

const Input = styled.input`
  width: 200px;
  border-radius: 4px;
  padding: 10px;
`;

const Button = styled.button`
  padding: 7px;
  background-color: blue;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: blueviolet;
  }
`;
