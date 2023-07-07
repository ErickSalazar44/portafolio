
import './style/habilidadesTecnicas.css'
const HabilidadesTecnicas = () => {


    return (
        <section id="habilidades" className="hab">
            <div className="hab__card">
                <header className="hab__card-info">
                    <div className='har__card-header'>
                        <h2 className="hab__card-title">Habilidades técnicas</h2>
                        <span className="hab__card-script">“</span>
                    </div>
                    <p className="hab__card-parrafo">
                    Durante aproximadamente <span className="span-años">1 año</span> y medio, me he sumergido en el estudio autodidacta del diseño, la maquetación y el <span className="span-developer">desarrollo web</span> en general. Aprovechando diversas plataformas en línea, he adquirido conocimientos sólidos en estas áreas. Además, cuento con experiencia en <span className="span-stack">Front-end</span> y poseo un nivel de conocimiento que varía entre básico e intermedio en las siguientes tecnologías y herramientas.
                    </p>
                    <img className="skill" src="./skills.svg" alt="imghabiliadedes" />
                </header>
                <div className="hab__body">
                    <ul className="hab__flexContent">
                        <li className='hab__js'>
                            <i className='hab__bx bx bxl-javascript'></i>
                            <h4>JavaScript</h4>
                        </li>
                        <span className="hab__arrowTamaño hab__arrow1">
                            <i className='bx bxs-chevron-right' ></i>
                        </span>

                        <li className="hab__html">
                            <i className='hab__bx bx bxl-html5' ></i>
                            <h4>HTML</h4>
                        </li>

                        <li className="hab__arrow2 ">
                            <i className='bx bx-right-arrow-alt' ></i>
                        </li>

                        <li className="hab__git">
                            <i className='hab__bx bx bxl-git' ></i>
                            <h4>Git</h4>
                        </li>

                        <li className="hab__css">
                            <i className='hab__bx bx bxl-css3' ></i>
                            <h4>CSS</h4>
                        </li>

                        <span className="hab__arrowTamaño hab__arrow3">
                            <i className='bx bxs-chevron-right' ></i>
                        </span>

                        <li className="hab__react">
                            <i className='hab__bx bx bxl-react' ></i>
                            <h4>React</h4>
                        </li>

                        <span className="hab__cooffe hab__arrowTamaño">
                            <i className='bx bxs-coffee' ></i>
                        </span>

                        <li className="hab__nodejs" >
                            <i className='hab__bx bx bxl-nodejs' ></i>
                            <h4>Node Js</h4>
                        </li>

                        <li className="hab__tailwind">
                            <i className='hab__bx bx bxl-tailwind-css' ></i>
                            <h4>Tailwind</h4>
                        </li>
                        <span className="hab__arrowTamaño hab__arrow4">
                            <i className='bx bx-chevrons-down' ></i>
                        </span>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default HabilidadesTecnicas