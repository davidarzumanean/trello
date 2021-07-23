import { useState } from 'react'
import dots from '../../assets/images/threeDots.js'
import style from './ToggleMenu.module.scss'

const ToggleMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(open => !open)
  }

  const handleItemClick = (doAction) => () => {
    if (doAction) doAction()
    toggleMenu()
  }

  return (
    <div className={style.editContainer}>
      <div className={style.editButton} onClick={toggleMenu}>
        {dots}
      </div>
      {isOpen && 
        <ul className={style.actionsContainer}>
          {items?.map(item => (
            <li className={style.actionItem} key={item.id} onClick={handleItemClick(item.doAction)}>
              {item.data}
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default ToggleMenu