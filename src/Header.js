import React from 'react';


function Header(){
    return(
      <nav className='navbar'>
          <img src="images/Logo192.png" width="50px"></img>
          <ul className='listitems'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
    )
  }

export default Header