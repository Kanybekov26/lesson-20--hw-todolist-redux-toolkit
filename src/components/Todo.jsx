import React from 'react'
import { useSelector } from 'react-redux'
import TodoList from './TodoList';

const Todo = () => {
    const {todo} = useSelector((state) => state.todo)
    console.log(todo);
  return (
    <div>
   {todo.map((data) => {
    console.log(data,'data');
    return(
        <div key={data.id}>
        <TodoList data={data}/>

        </div>
    )
   })}
    </div>
  )
}

export default Todo