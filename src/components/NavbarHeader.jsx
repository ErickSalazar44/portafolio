import { useEffect, useState } from "react";
import "./style/navbarHeader.css";

const NavbarHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const menuBackDrop = document.querySelector("#menu-backdrop"); // sombra 
        const anclas = document.querySelectorAll("#landing-header li a"); // position de las anclas a sombrear
        const handleMouseEnter = (event) => {
            const listItem = event.target.closest("a");
            const { left, top, width, height } = listItem.getBoundingClientRect(); // esto me ayuda a saber la posicion en la que se encuentra el las anclas
            // almacenamos la position en variables con la propiedad setProperty
            menuBackDrop.style.setProperty("--left", `${left}px`);
            menuBackDrop.style.setProperty("--top", `${top}px`);
            menuBackDrop.style.setProperty("--width", `${width}px`);
            menuBackDrop.style.setProperty("--height", `${height}px`);

            menuBackDrop.style.opacity = "1";
            menuBackDrop.style.visibility = "visible";
        };

        const handleMouseLeave = () => { // al quitar el mouse quitamos la visibilidad del sombreado
            menuBackDrop.style.opacity = "0";
            menuBackDrop.style.visibility = "hidden";
        };

        
        anclas.forEach((ancla) => {
            ancla.addEventListener("mouseenter", handleMouseEnter);
            ancla.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            anclas.forEach((ancla) => {
                ancla.removeEventListener("mouseenter", handleMouseEnter);
                ancla.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <header id='landing-header' className='header__contenedor'>
            <nav className='header__navbar'>
                <div className='header__logo'>
                    <h2>
                        Erick
                        <span className='header__logo-tittle-span'>
                            {" "}
                            salazar
                        </span>{" "}
                    </h2>
                </div>
                <ul
                    className={`header__info ${
                        menuOpen && "header__info-show"
                    }`}
                >
                    <li className='header__info-anclas'>
                        <a href=''>Acerca de mí</a>
                    </li>
                    <li className='header__info-anclas'>
                        <a href=''>Habilidades</a>
                    </li>
                    <li className='header__info-anclas'>
                        <a href=''>Formación</a>
                    </li>
                    <li className='header__info-anclas'>
                        <a href=''>Proyectos</a>
                    </li>
                    <li className='header__info-anclas'>
                        <a href=''>Contacto</a>
                    </li>
                </ul>
                <button onClick={toggleMenu} className='header__icon-menu'>
                    <i className={`bx bx-menu${menuOpen ? "close" : ""}`}></i>
                    <i className={`bx bx-x ${menuOpen ? "" : "close"}`}></i>
                </button>
            </nav>
            <div id='menu-backdrop' className='menu-backdrop'></div>
        </header>
    );
};

export default NavbarHeader;
