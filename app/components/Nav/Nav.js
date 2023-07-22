import React from 'react';
import nav from './Nav.css';

const Nav = () => {
  const itemsNavbar = [
    'Inicio',
    'Historia',
    'Clientes',
    'Servicios',
    ' Contacto',
  ];
  let menu = itemsNavbar.map((l) => (
    <li key={l}>
      <a href='#inicio'>{l}</a>
    </li>
  ));
  return (
    <nav>
      <ul>{menu}</ul>
    </nav>
  );
};

export default Nav;
