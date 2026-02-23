import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const PostImage = ({url})=> {
   
  if (url){
    return(
      <div className='img-wrapper'>
    <img src={url} alt="postImgae" width="600" />
    </div>
    )
  }else{
    return(<p>No image</p>)
  }
  
}
function App() {
  const hasUrl = {
    url: "https://i.pinimg.com/736x/e6/56/4b/e6564bb16e340c8ad4b4c66aeefb377b.jpg"
  }
  const noUrl= {
    url: null
  }
  return (
    <PostImage url={hasUrl.url}/>
    // <PostImage url={noUrl.url}/>
    
  )
}

export default App
