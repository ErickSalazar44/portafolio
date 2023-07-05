import './style/home.css'

const Home = () => {
  return (
    <div className='home__contenedor'>
      <h1 className='home__tittle'>Soy
        <span className='nombre'> Erick Salazar</span>
        <span className='punto'>.</span> <br />
        <span>Desarrollador Frontend</span> 
      </h1>
      <nav className='home__nav'>
        <a className='home__btn btn_proyectos' href="#projects">Ver proyectos <i className='bx bxs-folder-open' ></i></a>
        <a className='home__btn btn_cv' href=""> <i className='bx bx-chevrons-down' ></i> Curriculum</a>
      </nav>
      <div className='home__portada-img'>
        <img src="/portada-image.svg" alt="img-portada" />
        
      </div>

    </div>
  )
}

export default Home