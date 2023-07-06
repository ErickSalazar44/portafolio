import './scrollHome.css'

const ScrollHome = () => {
    return (
        <div className='scrollContenedor'>
            <a href='#aboutme' className='scrolldown'>
                <div className='chevrons'>
                    <div className='chevrondown'></div>
                    <div className='chevrondown'></div>
                </div>
            </a>
        </div>
    );
};

export default ScrollHome;
