import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
      <nav className='bg-indigo-900 bg-opacity-50 backdrop-blur-xl flex justify-between px-3 md:px-8'>
        <Link to='/'>
          <div className='m-3'>
            <h1 className='bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text text-3xl font-semibold'>iGEN</h1>
          </div>
        </Link>

        <Link to='/generate'>
          <button className='bg-gradient-to-r from-blue-600 to-indigo-400 m-3 p-2 rounded-md hover:scale-110 hover:bg-clip-border transition'>
            generate
          </button>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar