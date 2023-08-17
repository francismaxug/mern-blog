import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='border-b-4 border-green-700 text-center bg-green-600 font-bold w-full text-lg text-white fixed top-0 '>
      <ul>
        <li className='inline-block py-4'><Link to="/" className='pl-2 pr-8'>Home</Link>

        </li>
        <li className='inline-block py-4'><Link to="/about" className='pl-2 pr-8'>About</Link>

        </li>
        <li className='inline-block py-4'><Link to="/article-list" className='pl-2 pr-8'>Articles</Link>

        </li>
      </ul>
    </nav>
  )
}

export default Navbar
