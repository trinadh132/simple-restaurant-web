import { useState } from 'react'
import { BrowserRouter,Route,Link, Routes,useNavigate } from 'react-router-dom'
import './App.css'
import Home from './Home.jsx';
import Contact from './Contact.jsx'
import About from './About.jsx'
import Categories from './Categories.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
      <nav className='navi'>
        <div>
        <Link to='/Home' className='lin'>Home</Link>
        <Link to='/Categories' className='lin'>categories</Link>
        <Link to='/About' className='lin'>about</Link>
        </div>
      </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Contact/:name" element={<Contact />} />
          <Route path="/About" element={<About />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
