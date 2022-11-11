import '../style/detailWeather.css'

export default function DetailWeather({props}: any) {

	let translateLang = ''
	const dynamicMonth = Number(props.time.slice(5, 7))

	if(dynamicMonth === 1) {
		translateLang = 'Января'
	} else if(dynamicMonth === 2) {
		translateLang = 'Февраля'
	} else if(dynamicMonth === 3) {
		translateLang = 'Марта'
	} else if(dynamicMonth === 4) {
		translateLang = 'Апреля'
	} else if(dynamicMonth === 5) {
		translateLang = 'Мая'
	} else if(dynamicMonth === 6) {
		translateLang = 'Июня'
	} else if(dynamicMonth === 7) {
		translateLang = 'Июля'
	} else if(dynamicMonth === 8) {
		translateLang = 'Августа'
	} else if(dynamicMonth === 9) {
		translateLang = 'Сентября'
	} else if(dynamicMonth === 10) {
		translateLang = 'Октября'
	} else if(dynamicMonth === 11) {
		translateLang = 'Ноября'
	} else if(dynamicMonth === 12) {
		translateLang = 'Декабря'
	}

  return (
		<div className="detail">
			<h3 className='titleDate'>{Number(props.time.slice(8, 11))} {translateLang} {Number(props.time.slice(0, 4))} года</h3>
			<p className='field'>Время: {props.time.slice(11, 16)}</p>
			<p className='field'>Температура: {props.temp}</p>
			<p className='field'>Отн. влажность: {props.dwpt}%</p>
			<p className='field'>Осадки: {props.prcp}мм</p>
			<p className='field'>Ветер: {props.wspd} км/ч</p>
		</div>
	)
} 
