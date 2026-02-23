import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [search,setSearch]=useState("")
const items = ["React", "JavaScript", "Tailwind"]
const filtered = items.filter(item => {
  return item.toLowerCase().includes(search.toLowerCase())
})
  return (
    <div>
      <input type="text" placeholder='Search...' onChange={(e)=> setSearch(e.target.value)}/>
      <ul>
        {search != "" && filtered.map((val,index) => (
          <li key={index}>{val}</li>)
        )}
      </ul>
    </div>
  )
}

export default App
