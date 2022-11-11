import * as calendar from "./calcCalendar";
import { useState } from "react";
import '../../style/calendar.css'
import { sliceItemCalendar } from "../../store/sliceItemCalendar";
import { useDispatch } from "react-redux";
import Dropdown from "../Dropdown";

export default function CalFunc() {

  const [dateRedux, setDateRedux] = useState(new Date())
  const dispatch = useDispatch()
  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ]
  const [selected, setSelected] = useState(monthNames[dateRedux.getMonth()])
  const weekDayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

  function handlePrevButton() {
    const date = new Date(dateRedux.getFullYear(), dateRedux.getMonth() - 1)
    if(dateRedux.getMonth() === 0) {
      setSelected('Декабрь')
    } else setSelected(monthNames[dateRedux.getMonth() - 1])
    setDateRedux(date)
  }

  function handleNextButton() {
    const date = new Date(dateRedux.getFullYear(), dateRedux.getMonth() + 1)
    if(dateRedux.getMonth() === 11) {
      setSelected('Январь')
    } else setSelected(monthNames[dateRedux.getMonth() + 1])
    setDateRedux(date)
  }

  function handleSelectChangeMonth(e: any) {
    let translateInJs: number = 0
    if(e.target.innerHTML === 'Январь') {
      translateInJs = 0
    } else if(e.target.innerHTML === 'Февраль') {
      translateInJs = 1
    } else if(e.target.innerHTML === 'Март') {
      translateInJs = 2
    } else if(e.target.innerHTML === 'Апрель') {
      translateInJs = 3
    } else if(e.target.innerHTML === 'Май') {
      translateInJs = 4
    } else if(e.target.innerHTML === 'Июнь') {
      translateInJs = 5
    } else if(e.target.innerHTML === 'Июль') {
      translateInJs = 6
    } else if(e.target.innerHTML === 'Август') {
      translateInJs = 7
    } else if(e.target.innerHTML === 'Сентябрь') {
      translateInJs = 8
    } else if(e.target.innerHTML === 'Октябрь') {
      translateInJs = 9
    } else if(e.target.innerHTML === 'Ноябрь') {
      translateInJs = 10
    } else if(e.target.innerHTML === 'Декабрь') {
      translateInJs = 11
    }
    const date = new Date(dateRedux.getFullYear(), translateInJs)
    setDateRedux(date)
  };

  function clickItem(e: any) {
    if(dateRedux.getMonth() === new Date().getMonth()) {
      dispatch(sliceItemCalendar.actions.dayClick(e.target.innerHTML))
    }
    if(dateRedux.getMonth() !== new Date().getMonth()) {
      const difference = Number(JSON.stringify(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)).slice(9, 11)) // с помощью конструкции new Date таким образом выводим последний день месяца
      dispatch(sliceItemCalendar.actions.dayClick(Number(e.target.innerHTML) + difference + 1))
    }
  }

  const monthData = calendar.getMonthData(dateRedux.getFullYear(), dateRedux.getMonth());

  return (
    <div className='calendar'>
      <div className='header'>
        <button onClick={handlePrevButton} className='calendar-btn'>{"<"}</button>
        <Dropdown selected={selected} setSelected={setSelected} options={monthNames} changeMonth={handleSelectChangeMonth} />
        <button onClick={handleNextButton} className='calendar-btn'>{">"}</button>
      </div>
      <table className='table'>
        <thead className='titleHead'>
          <tr className='titleRow'>
            {weekDayNames.map((name) => (
              <th className='titleItem' key={name}>
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='titleBody'>
          {monthData.map((week: any, index: number) => (
            <tr className='bodyRow' key={index}>
              {week.map((date: Date, index: number) =>
                date ? (
                  <td
                    className='bodyItem'
                    key={index}
                    onClick={(e) => clickItem(e)}
                  >
                    {date.getDate()}
                  </td>
                ) : (
                  <td key={index} />
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
