import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const DeleteBtn=({id, onConfirm}) => {
  return <button onClick={() => onConfirm(id)}>Delete</button>
}
function App() {
  const Deleting = (id) => {
    alert (`You are deleting this : ${id}`)
  }

  return (
    <div>
      <DeleteBtn id={1} onConfirm={Deleting}/>
      <DeleteBtn id={2} onConfirm={Deleting}/>
      <DeleteBtn id={3} onConfirm={Deleting}/>
    </div>
  )
}

export default App
