import Project from "./Project";
import "./style/projects.css";
const Projects = () => {
    return (
        <section id="projects" className='projects__content'>
            <h3 className='projects__titulo'>Proyectos</h3>
            <div className='projects__content-body'>
                <Project
                    nameProject='Crud'
                    img='./crud.png'
                    SobreProject='Login Realizado con JavaScript vanilla, se aprovecha del almacenamiento local mediante el uso de localStorage.'
                    pagina='https://login-registeer.netlify.app/'
                    gitHub='https://github.com/ErickSalazar44/Crud-login'
                />
                <Project
                    nameProject='Rick and morty WebSite'
                    img='./rick_and_morty.png'
                    SobreProject=' la API de Rick and Morty. Permite a los usuarios explorar información sobre los personajes, episodios y ubicaciones de la serie de televisión. Hecho con React.'
                    pagina='https://rick-and-morty-ericksalazar.netlify.app/'
                    gitHub='https://github.com/ErickSalazar44/Rick-and-Morty-'
                />
                <Project
                    nameProject='E-commerce'
                    img='./ecommers1.png'
                    SobreProject='Consumiento una API, Está construido con JavaScript, e incluye un carrito de compras funcional. Además, se aprovecha del almacenamiento local mediante el uso de localStorage.'
                    pagina='https://e-commerce-ericksalazar.netlify.app/'
                    gitHub='https://github.com/ErickSalazar44/e-commerce'
                />
                <Project
                    nameProject='Weather App'
                    img='./webClima.png'
                    SobreProject='Geolocation brinda informacion precisa sobre sobre el clima en tu ciudad o localidad actual, también te permite explorar y descubrir el clima de otras ciudades.'
                    pagina='#'
                    gitHub='#'
                />
                <Project
                    nameProject='Encriptador'
                    img='./aluraLatam.png'
                    SobreProject='Challenge de Alura One Texto encriptado, esta app puedes encriptar y desencriptar texto, realizado con JavaScript firts movile.'
                    pagina='https://ericksalazar44.github.io/Proyecto-aluraLatam/'
                    gitHub='https://github.com/ErickSalazar44/Proyecto-aluraLatam'
                />
            </div>
        </section>
    );
};

export default Projects;
