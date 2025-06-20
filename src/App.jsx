import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User'

function App() {

  const UserData ={
    name:"Uganesh",
    age:"22",
    phone:"9952386336",
    email:"uganeshkarpagam@hotmail.com"
  }
 
  return (
    <>

    <User 
      name = {UserData.name}
      age = {UserData.age}
      phoneno = {UserData.phone}
      mail = {UserData.email}
    />

    </>
  )
}

export default App
