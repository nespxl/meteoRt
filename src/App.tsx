import { MyTitle } from './components/UI/MyTitle';
import './style/main.css'
import { API } from './utils/API';
import Calendar from './components/Calendar/Calendar'
import { useAppDispatch, useAppSelector } from './hooks/customHookQuery';
import { useEffect } from 'react';
import DetailWeather from './components/DetailWeather';
import Carousel from './components/Carousel/Carousel';
import NavBar from './components/NavBar';

function App() {

  const dispatch = useAppDispatch()
  const { postItem, isLoading } = useAppSelector(state => state.meteoReducer)
  const { city } = useAppSelector(state => state.cityReducer)
  const { item } = useAppSelector(state => state.dayReducer)
  const date = new Date()
  const formatArrayDay: Array<object> | any = []
  const currentHours = new Date().getHours()
  const currentDay = new Date().getDate()
  let currentField = 0
  let todayFormatTime = null

  interface IDay {
    coco: number,
    dwpt: number,
    prcp: number,
    pres: number,
    rhum: number,
    snow: object,
    temp: number,
    time: string,
    tsun: object,
    wdir: number,
    wpgt: number,
    wspd: number
  }

  function formatMethodDay(data: Array<object>) { // форматируем весь массив по дням(т.е. возвращает не один большой массив, а 30 массивов разделенные по дням)
    for (let i = data.length / 24; i > 0; i--) {
      const fullDay = data.slice(i * 24 - 24, i * 24)
      formatArrayDay.unshift(fullDay)
    }
    return formatArrayDay
  }

  if (currentDay !== item) {
    currentField = item - currentDay
    if (currentField < 0) currentField = 0
    if (currentField >= Number(JSON.stringify(new Date(date.getFullYear(), date.getMonth() + 1, 0)).slice(9, 11)) + 2) {
      currentField = Number(JSON.stringify(new Date(date.getFullYear(), date.getMonth() + 1, 0)).slice(9, 11)) + 1
    }
  } else currentField = 0

  if (currentField === 0) {
    todayFormatTime = currentHours
  } else todayFormatTime = 0

  useEffect(() => {
    dispatch(API(city))
  }, [currentField, city])

  return (
    <div className="App">
      <NavBar />
      <MyTitle>{city}</MyTitle>
      <div className='containerBody'>
        <Calendar />
        {isLoading ?
          <div className="preloader">
            <div className="preloader__row">
              <div className="preloader__item"></div>
              <div className="preloader__item"></div>
            </div>
          </div>
          :
          <Carousel>
            {formatMethodDay(postItem)[currentField]?.slice(todayFormatTime).map((day: any) => (
              <ul className='list' key={JSON.stringify(day.time)}>
                <div className='item'>
                  <DetailWeather props={day} />
                </div>
              </ul>
            ))}
          </Carousel>
        }
      </div>
    </div>
  );
}

export default App;
