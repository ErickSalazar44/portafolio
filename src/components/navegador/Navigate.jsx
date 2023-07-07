import "./interfazNavigate.css";

const Navigate = () => {
    return (
        <div className="navigate">
            <a href='https://github.com/ErickSalazar44' target="_blank" className="navigate__anclas github">
                <i className='bx bxl-github'></i>
            </a>
            <a href='https://www.linkedin.com/in/erick-josep-salazar-8b8b6024b/' target="_blank" className="navigate__anclas linke">
                <i className='bx bxl-linkedin'></i>
            </a>
            <a href='https://www.instagram.com/erickcsalazar22/' target="_blank" className="navigate__anclas instagram">
                <i className='bx bxl-instagram'></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=51934219123" target="_blank" className="navigate__anclas wsp">
                <i className='bx bxl-whatsapp'></i>
            </a>
            <span className="navigate__punto">
                <i className='bx bx-minus'></i>
            </span>
            <p className="navigate__correo">erickearl22@gmail.com</p>
        </div>
    );
};

export default Navigate;
