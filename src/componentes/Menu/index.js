import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
export default function Menu() {
  return (
    <nav className='navegacao'>
      <Link className='link' to='/'>
        Home
      </Link>
      <Link className='link' to='/cadastro'>
        Cadastro
      </Link>

    </nav>
  )
}
