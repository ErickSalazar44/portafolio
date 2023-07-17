import "./style/formacion.css";
const Formacion = () => {
    return (
        <section id='formacion' className='formation'>
            <img
                className='formation__img-graduate'
                src='./graduate.svg'
                alt='img formacion de fondo'
            />
            <div className='formation__title'>
                <span className='title_bg for'>
                    <h2 className='bg_letter'>FOR</h2>
                </span>
                <span className='title_bg for'>
                    <h2 className='bg_letter'>MA</h2>
                </span>
                <span className='title_bg for'>
                    <h2 className='bg_letter'>CION</h2>
                </span>
            </div>
            <div className='formation__card'>
                <ul className='card_list'>
                    <li className='list_line'>
                        <h3 className='formation__title-card'>Academlo</h3>
                        <p className='formation__parrafo'>
                            Ful-Stack <span className='red'>2022</span> - 2023
                        </p>
                    </li>
                    <li className='list_line'>
                        <h3 className='formation__title-card'>Alura Latam</h3>
                        <p className='formation__parrafo'>
                            <span className='aluraColorblue'>Front-end</span>{" "}
                            Developer 2023 - 2023
                        </p>
                    </li>
                    <li className='list_line'>
                        <h3 className='formation__title-card'>Cibertec</h3>
                        <p className='formation__parrafo'>
                            Computación e{" "}
                            <span className='yellow'>informatica</span> 2020 -
                            2021
                        </p>
                    </li>
                </ul>
                <div className='img-group'>
                    <img src='./academlo.png' alt='logo Academlo' />
                    <img src='./alura.png' alt='logo Alura' />
                    <img
                        src='https://www.cibertec.edu.pe/wp-content/themes/cibertec/statics/img/logo-white.svg'
                        alt='logo cibertec'
                    />
                </div>
            </div>
        </section>
    );
};

export default Formacion;
