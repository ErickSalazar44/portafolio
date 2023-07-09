const Project = ({nameProject,img,SobreProject,pagina,gitHub}) => {
    return (
        <div className='projects__Card'>
            <a href={pagina} target="_blank" className='projects__ImgContent'>
                <img className='projects__img' src={img} alt='' />
            </a>
            <div className='projects__body'>
                <nav className='projects__body-header'>
                    <h4 className='projects__body-titulo'>{nameProject}</h4>
                    <div className='projects_content-anclas'>
                        <a className='projects__anclas' href={pagina} target="_blank">
                            <i className='projects__icon bx bx-link-external'></i>
                        </a>
                        <a className='projects__anclas' href={gitHub} target="_blank">
                            <i className='projects__icon bx bxl-github'></i>
                        </a>
                    </div>
                </nav>
                <p className='projects__parrafo'>
                    {SobreProject}
                </p>
            </div>
        </div>
    );
};

export default Project;
