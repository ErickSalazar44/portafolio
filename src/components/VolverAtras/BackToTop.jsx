import './back.css'
const BackToTop = ({mostrarBackToTop}) => {
    
    const handleBack = () => {
        window.scroll(0,0)
    }

    return (
        <div className={`btt ${mostrarBackToTop ? '' : 'mostrar__bbt'}`}>
            <a href='#' onClick={handleBack}>
                <span>
                    Back To Top
                </span>
                <i className='bx bx-up-arrow-alt'></i>
            </a>
        </div>
    )
};

export default BackToTop;
