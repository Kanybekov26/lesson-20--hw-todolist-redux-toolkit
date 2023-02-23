
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { todoActions } from '../store/todo/toDoSlice'

const TodoList = ({data}) => {
  console.log(data);
  const [editeInputValue,setEditeInputValue] = useState("")
    const dispatch = useDispatch()
    const [show,setShow] = useState(false)

 const inputChangeHndler = (event) => {
  setEditeInputValue(event.target.value)
 }
    const deleteHandler = (id) => {
        dispatch(todoActions.delete(id))
    }

    const completedHandler = (id) => {
      dispatch(todoActions.completed(id))
  }
  const editeHandler = (data) => {
    setShow(true)
    setEditeInputValue(data.title)
  }

  const saveHandler = (data) => {
  const obj = {
    id:data.id,
    editeInputValue
  }
    dispatch(todoActions.editeHandler(obj))
  }
  return (
    <Container>
      {show ? 
      <>
      <input type="text" value={editeInputValue} onChange={inputChangeHndler}/>
      <Button onClick={() => saveHandler(data)}>Save</Button>
      </> :
      

 <Card>
     <p className={`${data.completed ? 'dd' : null}`}>{data.title}</p>
     <div>
        <Button onClick={() => editeHandler(data)}>edit</Button>
        <Button onClick={() => deleteHandler(data.id)}>delete</Button>
        <Button onClick={() => completedHandler(data.id)}>completed</Button>
     </div>
    </Card>
}
    </Container>
   
  )
}

export default TodoList

const Container = styled.div`
  border: 2px solid black;
  display: flex;
  width: 700px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  background-color: #8e0c81;
  border-radius: 20px;

  p{
    color:white;
  }
  .dd {
    text-decoration:line-through;
    
  }
  `

const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`
const Button = styled.button`
  padding: 7px;
  background-color: blue;
  border-radius: 10px;
  margin-left: 20px;
  padding: 10px;
  color: aliceblue;
  cursor: pointer;
  :hover {
    background-color: blueviolet;
  }
`;