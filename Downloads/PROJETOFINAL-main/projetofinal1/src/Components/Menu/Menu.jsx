import './Menu.css';
import { ImHome, ImCalendar, ImCreditCard, ImCart } from 'react-icons/im';

import React from 'react';

function Menu() {
  return (
    <ul className="menu">
      <li>
        <a link to="Home">
          <ImHome size={30} /> .Home
        </a>
      </li>
      <br></br>
      <li>
        <a link to="Calendario">
          <ImCalendar size={30} /> .Calendário
        </a>
      </li>

      <br></br>
      <li>
        <a link to="Promocoes">
          <ImCreditCard size={30} /> .Promoções
        </a>
      </li>

      <br></br>
      <li>
        <a link to="Historico">
          <ImCart size={30} /> .Histórico de compras
        </a>
      </li>
    </ul>
  );
}

export default Menu;
