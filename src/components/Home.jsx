import "./style/home.css";

const Home = ({ homeRef }) => {
    return (
        <div id='home' ref={homeRef} className='home__contenedor'>
            <h1 className='home__tittle'>
                Soy
                <span className='nombre'> Erick Salazar</span>
                <span className='punto'>.</span> <br />
                <span>Desarrollador Full Stack</span>
            </h1>
            <nav className='home__nav'>
                <a className='home__btn btn_proyectos' href='#projects'>
                    Ver proyectos <i className='bx bxs-folder-open'></i>
                </a>
                <a className='home__btn btn_cv' href='./ERICK_SALAZAR_CV2.pdf' download>
                    {" "}
                    <i className='bx bx-chevrons-down'></i> Curriculum
                </a>
            </nav>
            <div className='home__portada-img'>
                <img src='/portada-image.svg' alt='img-portada' />
            </div>
        </div>
    );
};

export default Home;
