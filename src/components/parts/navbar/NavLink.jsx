import React from 'react'
import { Link } from 'react-router-dom'


function NavLink({param}) {
  return (
    <li>
        <Link className='flex flex-col items-center justify-center' to={param.to}>
            <img className='w-10 h-10 ' src={param.icon} alt={`${param.text} icon`} />
            <span className='nav-text'>{param.text}</span>
        </Link>
    </li>
    
  )
}

export default NavLink