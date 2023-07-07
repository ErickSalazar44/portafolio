import "./style/aboutme.css";

const Aboutme = () => {
    return (
        <section id='aboutme' className='aboutme__contenedor'>
            <div className="aboutme__body_contenedor">
                <div className='aboutme__porfile-photo'>
                    <a href='https://www.linkedin.com/in/erick-josep-salazar-8b8b6024b/' target="_blank">
                        <i className='linkedin bx bxl-linkedin-square'></i>
                    </a>
                    <a href='https://github.com/ErickSalazar44' target="_blank">
                        <i className='git bx bxl-github'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/erick-josep-salazar-8b8b6024b/' target="_blank" className='btn_contact' aria-label='Email'>
                        <i className=' bx bx-paper-plane'></i>
                        Contáctame
                    </a>
                    <h3 className='aboutme__hi'>Hi!</h3>
                    <div className='aboutme__inf'>
                        <h4 className='aboutme__name'>
                            Erick{" "}
                            <span className='aboutme__pais'>
                                <img src='./peru.webp' alt='bandera peruana' />
                            </span>
                        </h4>
                        <p className='aboutme__level'>Jr. Developer</p>
                        <p className='aboutme__hashtag'>#OpenToWork</p>
                    </div>
                </div>
                <div className='aboutme__body'>
                    <h2 className='aboutme__body-tittle'>
                        Acerca de <span className='yellow'>mí</span>
                    </h2>
                    <div className='aboutme__window'>
                        <div className='aboutme__window-bar'>
                            <div className='aboutme__window-btns'>
                                <span className='b-btn red'></span>
                                <span className='b-btn yellow'></span>
                                <span className='b-btn green'></span>
                            </div>
                            <div className='bar__tittle '>about.txt</div>
                        </div>
                        <div className='window__body'>
                            <div className='window__sidebar'>1</div>
                            <div className='window__text'>
                                <p className='window__parrafo'>
                                Desarrollador junior frontend con experiencia en la creación de 
                                interfaces de usuario. Poseo habilidades 
                                en HTML, CSS, JavaScript y ReactJS, 
                                Me gusta utilizar mi conocimiento para construir paginas web de 
                                alta calidad. Cuando no estoy ampliando mis conocimientos 
                                en el desarrollo web, disfruto dibujar, video juegos y 
                                hacer deporte al ire libre, 
                                Estoy entusiasmado por seguir creciendo profesionalmente en el ámbito
                                del desarrollo frontend y aplicar mis habilidades técnicas junto 
                                con mi creatividad en futuros proyectos desafiantes.
                                </p>
                                <svg
                                    className='content-cursor'
                                    width='30'
                                    height='30'
                                    viewBox='0 0 42 42'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M40.6735 23.9252C41.4739 24.2964 41.4364 25.4467 40.6135 25.765L33.1863 28.6381C32.5407 28.8878 32.338 29.7022 32.7913 30.2255L38.7501 37.1041C39.1234 37.535 39.0614 38.1904 38.6138 38.5437L34.7516 41.5927C34.3314 41.9244 33.7243 41.8663 33.3747 41.4608L27.1848 34.2818C26.7631 33.7927 25.9953 33.8256 25.617 34.349L21.2652 40.3702C20.7586 41.0713 19.6611 40.8419 19.4775 39.9966L13.6512 13.1597C13.4759 12.3523 14.2997 11.6927 15.0492 12.0403L40.6735 23.9252ZM11.1917 6.79351C11.5367 7.2244 11.4674 7.85339 11.0367 8.19873L10.7805 8.40421C10.3495 8.74982 9.71989 8.68047 9.37446 8.24935L6.31331 4.42876C5.96799 3.99776 6.03743 3.36843 6.46842 3.02309L6.72573 2.81692C7.15681 2.4715 7.7863 2.54105 8.13159 2.97223L11.1917 6.79351ZM22.1636 1.52038C22.2235 0.906646 21.719 0.385523 21.1037 0.425407L20.801 0.445026C20.3119 0.476723 19.9179 0.858132 19.8704 1.34587L19.2777 7.42287C19.2179 8.0366 19.7223 8.55772 20.3377 8.51784L20.6404 8.49822C21.1294 8.46652 21.5234 8.08511 21.571 7.59738L22.1636 1.52038ZM6.14488 17.807C6.65656 17.9159 7.16566 17.6119 7.31264 17.1099L7.40366 16.799C7.56716 16.2405 7.22116 15.661 6.65199 15.5399L1.56172 14.4572C1.05004 14.3484 0.540945 14.6523 0.39396 15.1543L0.30294 15.4652C0.139442 16.0237 0.485442 16.6033 1.05461 16.7243L6.14488 17.807Z'
                                        fill='#EBEBEE'
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutme;
