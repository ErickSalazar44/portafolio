
import './App.css'
import Aboutme from './components/Aboutme'
import HabilidadesTecnicas from './components/HabilidadesTecnicas'
import Home from './components/Home'
import NavbarHeader from './components/NavbarHeader'
import Projects from './components/Projects'


function App() {


	return (
		<>
			<NavbarHeader/>
			<Home/>
		<main>
			<Aboutme/>
			<HabilidadesTecnicas/>
			<Projects/>
		</main>
		</>
	)
}

export default App
