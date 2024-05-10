import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Achievment from './components/Achievment'
import {Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar'
function App() {
  return (
  <>
    <Navbar/>
  <Routes>
 
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Gallery' element={<Gallery/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Achievement' element={<Achievment/>}/>
  </Routes>
  </>
  )
}
export default App
