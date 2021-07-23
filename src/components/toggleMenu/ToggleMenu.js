import { useState } from 'react'
import dots from '../../assets/images/threeDots.js'
import style from './ToggleMenu.module.scss'

const ToggleMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleMenuToggle = () => {
    setIsOpen(open => !open)
  }

  return (
    <div className={style.editContainer}>
      <div className={style.editButton} onClick={handleMenuToggle}>
        {dots}
      </div>
      {isOpen && 
        <ul className={style.actionsContainer}>
          {items.map(item => (
            <li className={style.actionItem}>
              {item}
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default ToggleMenu