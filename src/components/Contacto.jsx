import "./style/contacto.css";

const Contacto = () => {
    return (
        <footer className='contact'>
            <div className="svgContenedor">
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                    <path
                        fill='#111'
                        fill-opacity='1'
                        d='M0,128L80,112C160,96,320,64,480,64C640,64,800,96,960,112C1120,128,1280,128,1360,128L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
                    ></path>
                </svg>
            </div>
            <div className='contact__contenedor'>
                <a href='#' className='contact__carrusel'>
                    <div className='carrusel__1'>
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
                    <div className='carrusel__2'>
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
                <div className="contact__text pdContact">
                    <span className="contact__span1">No dudes en contactarme</span> <br />
                    <span className="contact__span1">para comenzar a trabajar juntos</span> <br />
                    <span className="contact__span1">en proyectos emocionantes.</span>
                </div>
                <div className="contact__email pdContact">
                    <h4>EMAIL</h4>
                    <a href="#">erickearl22@gmail.com</a>
                </div>
                <div className="pdContact">
                    <h4>SOCIAL</h4>
                    <ul>
                        <li>LINKEDIN</li>
                        <li>GITHUB</li>
                    </ul>
                </div>
                <div>
                    <p>hecho con ❤️</p>
                </div>
            </div>
        </footer>
    );
};

export default Contacto;
