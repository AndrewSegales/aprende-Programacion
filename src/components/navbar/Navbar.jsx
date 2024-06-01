import React from 'react';
import './Navbar.css';
function NavBar() {
  return (
    <nav >
      <ul>
        <div className='universalLeft'>
          <div className='search'>
            <div className='textbox'>
              <a>Buscar tutoriales</a>
            </div>
          </div>
        </div>
        <div className='universalRight'>
          <div></div>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
