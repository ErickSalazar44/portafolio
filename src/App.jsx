
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Aboutme from './components/Aboutme'
import Contacto from './components/Contacto'
import Formacion from './components/Formacion'
import HabilidadesTecnicas from './components/HabilidadesTecnicas'
import Home from './components/Home'
import NavbarHeader from './components/NavbarHeader'
import Projects from './components/Projects'
import BackToTop from './components/VolverAtras/BackToTop'
import CursorPersonalizado from './components/cursor/CursorPersonalizado'
import ScrollHome from './components/scroll/ScrollHome'




function App() {

	const homeRef = useRef(null)
	const [mostrarBackToTop, setMostrarBackToTop] = useState(false)

	useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3,
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
					setMostrarBackToTop(false)
                } else {
					setMostrarBackToTop(true)
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        if (homeRef.current) {
            observer.observe(homeRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

	return (
		<>	
            <ScrollHome/>
			<NavbarHeader/>
			<Home homeRef={homeRef}/>
		<main>
			<Aboutme/>
			<HabilidadesTecnicas/>
			<Projects/>
			<Formacion/>
			<Contacto/>
		</main>
			<CursorPersonalizado/>
            <BackToTop mostrarBackToTop={mostrarBackToTop}/>
		</>
	)
}

export default App
