
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import MainLayout from '../layout/MainLayout'
import TodoForm from '../pages/TodoForm'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<MainLayout/>}/>
            <Route path='/header/' element={<Header/>}>
              <Route path='todoForm' element={<TodoForm/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default MainRoutes