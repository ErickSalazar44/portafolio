import { useState } from 'react'
import './style/header.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <header className='header__contenedor'>
            <nav className="header__navbar">
                <div className='header__logo'>
                    <h2>Ea<span className='header__logo-tittle-span'>rl</span> </h2>
                </div>
                <ul className={`header__info ${menuOpen &&'header__info-show'}`}>
                    <li className='header__info-anclas'>
                        <a href="">Acerca de mí</a>
                    </li>
                    <li className='header__info-anclas'>
                        <a href="">Habilidades</a>
                    </li>
                    <li className='header__info-anclas'>
                        <a href="">Formación</a>
                    </li>
                    <li className='header__info-anclas'>
                        <a href="">Proyectos</a>
                    </li>
                    <li className='header__info-anclas'>
                        <a href="">Contacto</a>
                    </li>
                </ul>
                <button onClick={toggleMenu} className='header__icon-menu'>
                    <i className={`bx bx-menu${menuOpen ? 'close' : ''}`}></i>
                    <i className={`bx bx-x ${menuOpen ? '' : 'close'}`}></i>
                </button>
            </nav>
        </header>
    )
}

export default Header