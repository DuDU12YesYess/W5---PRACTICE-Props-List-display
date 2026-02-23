import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Layout = ({children}) => {
  return (
    <div className="app-container">
      <nav>Navbard</nav>
      {children}
      <footer>Footer</footer>
    </div>
  )  
}
function App() {
  return(
    <Layout>
      <h2>heheehaha</h2>
    </Layout>
  )

}

export default App
