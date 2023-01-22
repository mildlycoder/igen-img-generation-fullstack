import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreatePost, Home } from './pages'
import Navbar from './components/layout components/Navbar'

const App = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-900 to-purple-900 min-h-screen text-white'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/generate' element={<CreatePost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App