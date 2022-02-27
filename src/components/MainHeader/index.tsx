import { createElement, FC } from 'react';
import { NavLink } from 'react-router-dom';

import './styles/main-header.css';

export const MainHeader: FC = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/home" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}