import { memo, useContext, useState } from 'react'
import { editCardTitleAction } from '../../actions/BoardActions'
import { BoardContext } from '../../contexts/BoardContext'
import EditButton from '../toggleMenu/ToggleMenu'
import InlineInput from '../InlineInput/InlineInput'
import style from './Card.module.scss'

const Card = ({ card, colId }) => {
  const { dispatch } = useContext(BoardContext)
  const [isEditingTitle, setIsEditingTitle] = useState(false)

  const toggleTitleEdit = () => {
    setIsEditingTitle(isEditing => !isEditing)
  }

  const handleTitleSave = (newTitle) => {
    editCardTitleAction(dispatch, { column: { title: newTitle, colId, cardId: card.id } })
    setIsEditingTitle(false)
  }

  return (
    <div className={style.card}>
      {isEditingTitle
          ?
          <InlineInput
            value={card.title}
            onSave={handleTitleSave}
            onCancel={toggleTitleEdit} />
          :
          <div onClick={toggleTitleEdit} className={style.columnName}>{card.title}</div>
        }
      <EditButton />
    </div>
  )
}

export default memo(Card)