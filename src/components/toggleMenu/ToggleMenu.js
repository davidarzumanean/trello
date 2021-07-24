import { useState, useEffect, useRef } from 'react'
import dots from '../../assets/images/threeDots.js'
import style from './ToggleMenu.module.scss'

const ToggleMenu = ({ items, dropUp }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(open => !open)
  }

  const handleItemClick = (doAction) => () => {
    if (doAction) doAction()
    toggleMenu()
  }

  const handleClickOut = (e) => {
    if (!menuRef?.current?.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOut);
    return () => document.removeEventListener('mousedown', handleClickOut);
  }, [])

  return (
    <div className={style.editContainer}>
      <div className={style.editButton} onClick={toggleMenu}>
        {dots}
      </div>
      {isOpen &&
        <ul className={`${style.actionsContainer} ${dropUp ? style.dropUp : ''}`} ref={menuRef}>
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