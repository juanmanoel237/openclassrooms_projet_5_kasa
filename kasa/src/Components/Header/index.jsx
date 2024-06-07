import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Image/logo/logo_header.png';
import "./header.scss"

const Header = () => {
  return (
    <header className="header">
        <img src={logo} className='logo' alt="Logo Kasa" />
        <nav className="nav-header">
            <NavLink to="/" className={({isActive}) => isActive ? "active" : undefined}>Accueil</NavLink>
            <NavLink to="/About" className={({isActive}) => isActive ? "active" : undefined}>A propos</NavLink>
        </nav>
    </header>
  )
}

export default Header