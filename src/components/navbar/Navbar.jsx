// NavBar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import Menu from './Menu'; // Actualización de la importación

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <ul>
        <div className='universalLeft'>
          <div className='search'>
            <div className='textbox'>
              <a>Buscar tutoriales</a>
            </div>
          </div>
        </div>
        <a className='brand'>freedo camp</a>
        <div className='universalRight'>
          <div className='buttonCont'>
            <button className='menu' onClick={toggleDropdown}>Menu</button>
            <a className='sesion'>Sign in</a>
          </div>
        </div>
        {isDropdownOpen && <Menu />} {/* Actualización del nombre del componente */}
      </ul>
    </nav>
  );
}

export default NavBar;
