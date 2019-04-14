import React from 'react';


const NavBar = (props) => {

  return(
    <div className='navbar'>
      <a className='nav-links' href='/'>Home </a>
      <a className='nav-links' href='/movies'>All Movies</a>
      <a className='nav-links' href='/bygenre'>By Genre</a>
    </div>
  )
}

export default NavBar;