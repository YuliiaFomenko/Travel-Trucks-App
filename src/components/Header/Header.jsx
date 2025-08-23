import React from 'react'
import sprite from '../../assets/sprite.svg'
import { Link, NavLink } from 'react-router-dom'
import s from './Header.module.css'
import clsx from 'clsx'

const Header = () => {
  const activeStyle = ({ isActive}) => {
    return clsx(s.link, isActive && s.active)
  }

  return (
    <div className={s.header}>
      <Link to="/">
        <svg width="136" height="15">
          <use href={`${sprite}#icon-Logo`} />
        </svg>
      </Link>
      <nav className={s.nav}>
        <NavLink to="/" className={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={activeStyle}>
          Catalog
        </NavLink>
      </nav>
    </div>
  );
}

export default Header