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
            const { left, top, width, height } =
                listItem.getBoundingClientRect(); // posicion de las anclas
            // almacen en variables con la propiedad setProperty
            menuBackDrop.style.setProperty(
                "--left",
                `${left + window.scrollX}px`
            );
            menuBackDrop.style.setProperty(
                "--top",
                `${top + window.scrollY}px`
            );
            menuBackDrop.style.setProperty("--width", `${width}px`);
            menuBackDrop.style.setProperty("--height", `${height}px`);
            menuBackDrop.style.opacity = "1";
            menuBackDrop.style.visibility = "visible";
        };

        const handleMouseLeave = () => {
            // al quitar el mouse quitamos la visibilidad del sombreado
            menuBackDrop.style.opacity = "0";
            menuBackDrop.style.visibility = "hidden";
        };

        const handleCloseMenu = () => {
            setMenuOpen(false);
        };

        anclas.forEach((ancla) => {
            ancla.addEventListener("mouseenter", handleMouseEnter);
            ancla.addEventListener("mouseleave", handleMouseLeave);
            ancla.addEventListener("click", handleMouseLeave);
            ancla.addEventListener("click", handleCloseMenu);
            window.addEventListener("scroll", handleMouseLeave);
        });

        return () => {
            anclas.forEach((ancla) => {
                ancla.removeEventListener("mouseenter", handleMouseEnter);
                ancla.removeEventListener("mouseleave", handleMouseLeave);
                ancla.removeEventListener("click", handleMouseLeave);
                ancla.removeEventListener("click", handleCloseMenu);
                window.removeEventListener("scroll", handleMouseLeave);
            });
        };
    }, []);

    const handleBack = () => {
        window.scroll(0,0)
    }


    return (
        <header id='landing-header' className='header__contenedor'>
            <nav className='header__navbar'>
                <div className='header__logo' onClick={handleBack}>

                    <div className='logo'>
                        <svg
                            width='100%'
                            height='100%'
                            viewBox='0 0 360 160'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M151 0H49C46.6171 0.0131292 44.3355 0.965556 42.6505 2.65055C40.9656 4.33554 40.0131 6.6171 40 9V31C39.9869 33.3829 39.0344 35.6645 37.3495 37.3495C35.6645 39.0344 33.3829 39.9869 31 40H9C6.6171 40.0131 4.33554 40.9656 2.65055 42.6505C0.965556 44.3355 0.0131292 46.6171 0 49L0 151C0.0131292 153.383 0.965556 155.664 2.65055 157.349C4.33554 159.034 6.6171 159.987 9 160H111C113.383 159.987 115.664 159.034 117.349 157.349C119.034 155.664 119.987 153.383 120 151V129C120.013 126.617 120.966 124.336 122.651 122.651C124.336 120.966 126.617 120.013 129 120H151C153.383 119.987 155.664 119.034 157.349 117.349C159.034 115.664 159.987 113.383 160 111V9C159.987 6.6171 159.034 4.33554 157.349 2.65055C155.664 0.965556 153.383 0.0131292 151 0ZM120 111C119.987 113.383 119.034 115.664 117.349 117.349C115.664 119.034 113.383 119.987 111 120H49C46.6171 119.987 44.3355 119.034 42.6505 117.349C40.9656 115.664 40.0131 113.383 40 111V49C40.0131 46.6171 40.9656 44.3355 42.6505 42.6505C44.3355 40.9656 46.6171 40.0131 49 40H111C113.383 40.0131 115.664 40.9656 117.349 42.6505C119.034 44.3355 119.987 46.6171 120 49V111Z'
                                fill='currentColor'
                            ></path>
                            <path
                                d='M351 0H249C246.617 0.0131292 244.336 0.965556 242.651 2.65055C240.966 4.33554 240.013 6.6171 240 9V31C239.987 33.3829 239.034 35.6645 237.349 37.3495C235.664 39.0344 233.383 39.9869 231 40H209C206.617 40.0131 204.336 40.9656 202.651 42.6505C200.966 44.3355 200.013 46.6171 200 49V151C200.013 153.383 200.966 155.664 202.651 157.349C204.336 159.034 206.617 159.987 209 160H311C313.383 159.987 315.664 159.034 317.349 157.349C319.034 155.664 319.987 153.383 320 151V129C320.013 126.617 320.966 124.336 322.651 122.651C324.336 120.966 326.617 120.013 329 120H351C353.383 119.987 355.664 119.034 357.349 117.349C359.034 115.664 359.987 113.383 360 111V9C359.987 6.6171 359.034 4.33554 357.349 2.65055C355.664 0.965556 353.383 0.0131292 351 0V0ZM320 111C319.987 113.383 319.034 115.664 317.349 117.349C315.664 119.034 313.383 119.987 311 120H249C246.617 119.987 244.336 119.034 242.651 117.349C240.966 115.664 240.013 113.383 240 111V49C240.013 46.6171 240.966 44.3355 242.651 42.6505C244.336 40.9656 246.617 40.0131 249 40H311C313.383 40.0131 315.664 40.9656 317.349 42.6505C319.034 44.3355 319.987 46.6171 320 49V111Z'
                                fill='currentColor'
                            ></path>
                        </svg>
                    </div>
                </div>
                <ul
                    className={`header__info ${
                        menuOpen && "header__info-show"
                    }`}
                >
                    <li className='header__info-anclas'>
                        <a href='#aboutme'>
                            <span className='header__info-ancla--span'>
                                Acerca de mí
                            </span>
                        </a>
                    </li>
                    <li className='header__info-anclas'>
                        <a href='#habilidades'>
                            <span className='header__info-ancla--span'>
                                Habilidades
                            </span>
                        </a>
                    </li>
                    <li className='header__info-anclas'>
                        <a href='#projects'>
                            <span className='header__info-ancla--span'>
                                Proyectos
                            </span>
                        </a>
                    </li>
                    <li className='header__info-anclas'>
                        <a href='#formacion'>
                            <span className='header__info-ancla--span'>
                                Formación
                            </span>
                        </a>
                    </li>
                    <li className='header__info-anclas'>
                        <a href='#contacto'>
                            <span className='header__info-ancla--span'>
                                Contacto
                            </span>
                        </a>
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
