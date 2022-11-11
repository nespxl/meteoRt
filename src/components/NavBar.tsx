import { useDispatch } from 'react-redux'
import { sliceCity } from '../store/sliceCity'
import '../style/navBar.css'

export default function NavBar() {
	const dispatch = useDispatch()

	function showWeatherCity(e: any) {
		dispatch(sliceCity.actions.fetchCityWeather(e.target.innerHTML))
	}

  return (
		<nav className='navbar'>
			<ul className='list'>
				<li className='item'>
					<button className='btn' onClick={(e) => showWeatherCity(e)}>Moscow</button>
				</li>
				<li className='item'>
					<button className='btn' onClick={(e) => showWeatherCity(e)}>Berlin</button>
				</li>
				<li className='item'>
					<button className='btn' onClick={(e) => showWeatherCity(e)}>London</button>
				</li>
				<li className='item'>
					<button className='btn' onClick={(e) => showWeatherCity(e)}>Madrid</button>
				</li>
				<li className='item'>
					<button className='btn' onClick={(e) => showWeatherCity(e)}>Kiev</button>
				</li>
			</ul>
		</nav>
	)
}
