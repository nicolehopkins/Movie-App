import React from 'react';
import './styling/NavBar.css'

const NavBar = (props) => {

  return(
    <div className='navbar'>
      <a className='nav-links left' href='/'>Home </a>
      <a className='nav-links right' href='/movies'>All Movies</a>
      <a className='nav-links right' href='/bygenre'>By Genre</a>
    </div>
  )
}

export default NavBar;