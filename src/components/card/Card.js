import { memo, useContext, useState } from 'react'
import { deleteCardAction, editCardTitleAction } from '../../actions/BoardActions'
import { BoardContext } from '../../contexts/BoardContext'
import EditButton from '../toggleMenu/ToggleMenu'
import InlineInput from '../InlineInput/InlineInput'
import style from './Card.module.scss'

const Card = ({ card, colId, index, total, onDragStart }) => {
  const { dispatch } = useContext(BoardContext)
  const [isEditingTitle, setIsEditingTitle] = useState(false)

  const toggleTitleEdit = () => {
    setIsEditingTitle(isEditing => !isEditing)
  }

  const handleTitleSave = (newTitle) => {
    editCardTitleAction(dispatch, { title: newTitle, colId, cardId: card.id })
    setIsEditingTitle(false)
  }

  const handleCardDelete = () => {
    deleteCardAction(dispatch, { colId, cardId: card.id })
    setIsEditingTitle(false)
  }

  const menuItems = [
    {
      id: 'editCard',
      data: 'Edit title',
      doAction: toggleTitleEdit,
    },
    {
      id: 'deleteCard',
      data: 'Delete Card',
      doAction: handleCardDelete,
    },
  ]

  return (
    <div className={style.card} draggable onDragStart={(e) => onDragStart(e, card.id, colId)}>
      {isEditingTitle
          ?
          <InlineInput
            value={card.title}
            onSave={handleTitleSave}
            onCancel={toggleTitleEdit} />
          :
          <div onClick={toggleTitleEdit} className={style.columnName}>{card.title}</div>
        }
      <EditButton items={menuItems} dropUp={total > 2 && total - index < 2} />
    </div>
  )
}

export default memo(Card)