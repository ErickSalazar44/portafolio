import Project from "./Project";
import "./style/projects.css";
const Projects = () => {
    return (
        <section id='projects' className='projects__content'>
            <h3 className='projects__titulo'>Proyectos</h3>
            <div className='projects__content-body'>
                <Project
                    nameProject='Online Store'
                    img='./onlineStore.webp'
                    SobreProject='Desarrollada con ReactJS y utiliza React Router, Redux y una API para mostrar y gestionar los productos de manera segura y actualizada'
                    pagina='https://onlinestore-ericksalazar.netlify.app/'
                    gitHub='https://github.com/ErickSalazar44/final-boss'
                />

                <Project
                    nameProject='Pokedex'
                    img='./pokedex.webp'
                    SobreProject='Este proyecto me ha brindado la oportunidad de profundizar mi conocimiento de React y Redux, así como de mejorar mis habilidades en el desarrollo web Responsive.'
                    pagina='https://pokedex-erick-salazar.netlify.app/'
                    gitHub='https://github.com/ErickSalazar44/pokedex'
                />
                <Project
                    nameProject='Plataforma de Películas'
                    img='./aluraflix.png'
                    SobreProject='Desde el uso de React.js, Vite, React Router DOM y Redux para crear una experiencia interactiva y eficiente, hasta la implementación de Tailwind CSS siguiendo el enfoque "mobile-first".'
                    pagina='https://aluraflix-ericksalazar.netlify.app/'
                    gitHub='https://github.com/ErickSalazar44/aluraFlix'
                />
                {/* <Project
                    nameProject='E-commerce'
                    img='./ecommers.png'
                    SobreProject='Consumiento una API, Está construido con JavaScript, e incluye un carrito de compras funcional. Además, se aprovecha del almacenamiento local mediante el uso de localStorage.'
                    pagina='https://e-commerce-ericksalazar.netlify.app/'
                    gitHub='https://github.com/ErickSalazar44/e-commerce'
                />

                <Project
                    nameProject='Encriptador'
                    img='./aluraLatam.png'
                    SobreProject='Challenge de Alura One Texto encriptado, esta app puedes encriptar y desencriptar texto, realizado con JavaScript firts movile.'
                    pagina='https://ericksalazar44.github.io/Proyecto-aluraLatam/'
                    gitHub='https://github.com/ErickSalazar44/Proyecto-aluraLatam'
                />

                <Project
                    nameProject='Weather App'
                    img='./webClima.png'
                    SobreProject='Geolocation brinda informacion precisa sobre sobre el clima en tu ciudad o localidad actual, también te permite explorar y descubrir el clima de otras ciudades.'
                    pagina='#'
                    gitHub='#'
                /> */}
            </div>
        </section>
    );
};

export default Projects;
