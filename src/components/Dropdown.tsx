import '../style/dropdown.css'
import { useState } from 'react'

export default function Dropdown({ selected, setSelected, options, changeMonth }: any) {

	const [isActive, setIsActive] = useState(false)

	return (
		<div className='dropdown'>
			<div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>{selected}</div>
			{isActive && (
				<div className="dropdown-content" onClick={(e) => changeMonth(e)}>
					{options.map((option: any) => (
						<div
							key={JSON.stringify(option.time)}
							className="dropdown-item"
							onClick={e => { 
								setSelected(option)
								setIsActive(false)
							}}>
								{option}
						</div>
					))}
				</div>
			)}
		</div>
	)
}
