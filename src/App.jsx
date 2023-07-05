
import './App.css'
import Aboutme from './components/Aboutme'
import Contacto from './components/Contacto'
import Formacion from './components/Formacion'
import HabilidadesTecnicas from './components/HabilidadesTecnicas'
import Home from './components/Home'
import NavbarHeader from './components/NavbarHeader'
import Projects from './components/Projects'
import CursorPersonalizado from './components/cursor/CursorPersonalizado'


function App() {


	return (
		<>
			<NavbarHeader/>
			<Home/>
		<main>
			<Aboutme/>
			<HabilidadesTecnicas/>
			<Projects/>
			<Formacion/>
			<Contacto/>
		</main>
			<CursorPersonalizado/>
		</>
	)
}

export default App
