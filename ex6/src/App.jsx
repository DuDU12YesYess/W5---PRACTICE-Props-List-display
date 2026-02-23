import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [posts,setPosts]=useState([])
const [newContent, setNewContent]= useState("")
const handleAdd=()=>{
  const item = {id:posts.length,text:newContent}
  setPosts(lastItem=>[...lastItem,item])
  setNewContent("")
}
  return (
<div>
      <input type="text" placeholder='Enter your content...' value={newContent} onChange={e=>setNewContent(e.target.value)} />
    <button onClick={handleAdd}>Add item</button>
      {
        posts.map(({id,text},index)=> 
          <li key={index}>{id} : {text}</li>
        )
      }
    
</div>
  )
}

export default App
