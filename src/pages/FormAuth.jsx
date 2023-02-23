import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { authActions} from '../store/auth/authSlice'

const FormAuth = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
   const [formState,setFormState] = useState({
     email:"",
     password: '',
   })
   
   const inputChangeHandler = (name) => {
     return (event) => {
       setFormState(prevState => ({...prevState, [name]: event.target.value}))
   
     }
   }
     const submitHandler = (event) => {
       event.preventDefault()
     if(formState.email === 'test@gmail.com' && formState.password === "123123"){
       dispatch(authActions.login(formState.email))
       navigate("/header/todoForm")
      
     }
     }
  return (
    <Container>
         <section>
           <form onSubmit={submitHandler}>
             <Card>
               <Label htmlFor='email'>Email</Label>
               <Input type='email' id='email' onChange={inputChangeHandler("email")} value={formState.email} placeholder=" test@gmail.com"/>
             </Card>
             <Card>
               <Label htmlFor='password'>Password</Label>
               <Input type='password' id='password'  onChange={inputChangeHandler("password")} value={formState.password} placeholder="пароль: 123123"/>
             </Card>
             <Button>Login</Button>
           </form>
         </section>
        </Container>
  )
}

export default FormAuth

const Container = styled.div`
    margin: 5rem auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 25rem;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background-color: #f4f0fa;
   `

   const Card = styled.div`
  margin-bottom: 0.5rem;
    
   `

   const Label = styled.label`
     display: block;
  color: #616161;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
   `

   const Input = styled.input`
    display: block;
  width: 20rem;
  margin: auto;
  border-radius: 4px;
  padding: 0.25rem;
  border: 1px solid #ccc;
   `
   
   const Button = styled.button`
     padding: 7px;
  background-color: blue;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: aliceblue;
  :hover {
    background-color: blueviolet;
  }
   `