import './style/HabilidadesTecnicas.css'
const HabilidadesTecnicas = () => {
    return (
        <section id="habilidades" className="hab">
            <div className="hab__card">
                <header className="hab__card-info">
                    <div>
                        <h2 className="hab__card-title">Habilidades técnicas</h2>
                        <span className="hab__card-script">“</span>
                    </div>
                    <p class="hab__card-parrafo">
                        Llevo alrededor de <span class="span-años"> 2 años</span> y medio de estudio sobre diseño, maquetación y <span class="span-developer"> desarrollo web</span> en general de manera autodidacta y en plataformas online. 
                        Actualmente me certifique como desarrollador <span class="span-stack">PERN stack</span> y tengo conocimiento básico e intermedio de las siguientes 
                        tecnologías y herramientas.
                    </p>
                    <img className="skill" src="./skills.svg" alt="imghabiliadedes" />
                </header>
                <div className="hab__body">
                    <ul className="hab__flexContent">
                        <li className="hab__js">
                            <i class='hab__bx bx bxl-javascript'></i>
                            <h4>JavaScript</h4>
                        </li>
                        <span className="hab__arrowTamaño hab__arrow1">
                            <i class='bx bxs-chevron-right' ></i>
                        </span>

                        <li className="hab__html">
                            <i class='hab__bx bx bxl-html5' ></i>
                            <h4>HTML</h4>
                        </li>

                        <li className="hab__arrow2 ">
                            <i class='bx bx-right-arrow-alt' ></i>
                        </li>

                        <li className="hab__git">
                            <i class='hab__bx bx bxl-git' ></i>
                            <h4>Git</h4>
                        </li>

                        <li className="hab__css">
                            <i class='hab__bx bx bxl-css3' ></i>
                            <h4>CSS</h4>
                        </li>

                        <span className="hab__arrowTamaño hab__arrow3">
                            <i class='bx bxs-chevron-right' ></i>
                        </span>

                        <li className="hab__react">
                            <i class='hab__bx bx bxl-react' ></i>
                            <h4>React</h4>
                        </li>

                        <span className="hab__cooffe hab__arrowTamaño">
                            <i class='bx bxs-coffee' ></i>
                        </span>

                        <li className="hab__nodejs" >
                            <i class='hab__bx bx bxl-nodejs' ></i>
                            <h4>Node Js</h4>
                        </li>

                        <li className="hab__tailwind">
                            <i class='hab__bx bx bxl-tailwind-css' ></i>
                            <h4>Tailwind</h4>
                        </li>
                        <span className="hab__arrowTamaño hab__arrow4">
                            <i class='bx bx-chevrons-down' ></i>
                        </span>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default HabilidadesTecnicas