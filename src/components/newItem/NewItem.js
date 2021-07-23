import { memo, useState } from 'react';
import style from './NewItem.module.scss'

const NewItem = ({ label, placeholder, onSave }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState('')

  const toggleEdit = () => {
    setTitle('')
    setIsEditing(isEditing => !isEditing)
  }

  const handleSave = () => {
    onSave(title)
    setIsEditing(false)
  }

  const handleChagne = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div className={style.newItem}>
      {isEditing
        ?
        <>
          <input value={title} onChange={handleChagne} autoFocus placeholder={placeholder} />
          <div className={style.actions}>
            <button type='button' onClick={handleSave}>Add</button>
            <button type='button' onClick={toggleEdit}>Cancel</button>
          </div>
        </>
        :
        <div className={style.toggleNew} onClick={toggleEdit}>+ {label}</div>
      }
    </div>
  )
}

export default memo(NewItem)