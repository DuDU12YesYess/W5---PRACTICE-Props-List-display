import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const PostActions = ({onLike, onShare}) => {
  return(
    <div>
      <button onClick={onLike}>Like</button>
      <button onClick={onShare}>Share</button>
    </div>
    
  )
}
function App() {
const Like = () => {
  alert ("Liked")
}
const Share = () => {
  alert ("Shared")
}

  return (
    <PostActions 
    onLike={Like}
    onShare={Share}
    />
  )
}

export default App
