import React, { useEffect, useRef } from "react";
import "./style/contacto.css";
import { useState } from "react";

const Contacto = () => {
    const targetRef = useRef(null);
    const [isAnimated, setisAnimated] = useState(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3,
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setisAnimated(true);
                } else {
                    setisAnimated(false);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <footer ref={targetRef} className='contact'>
            <div className='svgContenedor'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                    <path
                        fill='#111111'
                        fillOpacity='1'
                        d='M0,128L80,112C160,96,320,64,480,64C640,64,800,96,960,112C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
                    ></path>
                </svg>
            </div>
            <div id="contacto" className='contact__contenedor'>
                <a href='#' className='contact__carrusel'>
                    <div
                        className={`carrusel__1 ${
                            isAnimated ? "animacionCarrusel" : ""
                        }`}
                    >
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                    </div>
                    <div
                        className={`carrusel__2 ${
                            isAnimated ? "animacionCarrusel2" : ""
                        }`}
                    >
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                        <div className='cta-item'>
                            <div className='cta-text'>Contact</div>
                            <div className='cta-space'>-</div>
                        </div>
                    </div>
                </a>
                <div className='pdContact'>
                    <div className='contact__text '>
                        <span className='contact__span1'>Ponte en </span> <br />
                        <span className='contact__span1'>
                            contacto para emocionantes{" "}
                        </span>{" "}
                        <br />
                        <span className='contact__span1'>
                            proyectos juntos.
                        </span>
                    </div>
                    <div className='contact__email'>
                        <h4 className='contact__email-titulo'>EMAIL</h4>
                        <a className='contact__email-correo' href='#'>
                            erickearl22@gmail.com
                        </a>
                    </div>
                    <div className=''>
                        <h4 className='contact__social'>SOCIAL</h4>
                        <ul className='contact__social-ul'>
                            <li className='contact__linkedin'>LINKEDIN</li>
                            <li className='contact__github'>GITHUB</li>
                        </ul>
                    </div>
                </div>
                    <div className='contact__creditos'>
                        <p className='contact__textfinal'>made with 💙</p>
                    </div>
            </div>
        </footer>
    );
};

export default Contacto;
