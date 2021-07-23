import { memo, useState, useContext } from 'react'
import { BoardContext } from '../../contexts/BoardContext'
import {
  addCardAction,
  deleteColumnAction,
  editColumnTitleAction,
  sortColByDateAsc,
  sortColByDateDesc,
  sortColByName
} from '../../actions/BoardActions'

import InlineInput from '../InlineInput/InlineInput.js'
import NewItem from '../newItem/NewItem.js'
import Card from '../card/Card'
import EditButton from '../toggleMenu/ToggleMenu'
import style from './Column.module.scss'

const Column = ({ column, children }) => {
  const { dispatch } = useContext(BoardContext)
  const [isEditingTitle, setIsEditingTitle] = useState(false)

  const handleAddNewCard = (title) => {
    addCardAction(dispatch, { title, colId: column.id })
  }

  const toggleTitleEdit = () => {
    setIsEditingTitle(isEditing => !isEditing)
  }

  const handleTitleSave = (newTitle) => {
    editColumnTitleAction(dispatch, { title: newTitle, colId: column.id })
    setIsEditingTitle(false)
  }

  const handleColumnDelete = () => {
    deleteColumnAction(dispatch, { colId: column.id })
  }

  const sortByDateAsc = () => {
    sortColByDateAsc(dispatch, { colId: column.id })
  }

  const sortByDateDesc = () => {
    sortColByDateDesc(dispatch, { colId: column.id })
  }

  const sortByName = () => {
    sortColByName(dispatch, { colId: column.id })
  }

  const menuItems = [
    {
      id: 'editCol',
      data: 'Edit column',
      doAction: toggleTitleEdit,
    },
    {
      id: 'deleteCol',
      data: 'Delete column',
      doAction: handleColumnDelete,
    },
    {
      id: 'sortDateAsc',
      data: 'Sort by date created ASC',
      doAction: sortByDateAsc,
    },
    {
      id: 'sortDateDesc',
      data: 'Sort by date created DESC',
      doAction: sortByDateDesc,
    },
    {
      id: 'sortName',
      data: 'Sort by card name',
      doAction: sortByName,
    },
  ]

  if (children) {
    return (
      <div className={style.columnContainer}>
        {children}
      </div>
    )
  }

  return (
    <div className={style.columnContainer}>
      <div className={style.columnHeader}>
        {isEditingTitle
          ?
          <InlineInput
            className={style.columnName}
            value={column.title}
            onSave={handleTitleSave}
            onCancel={toggleTitleEdit} />
          :
          <div onClick={toggleTitleEdit} className={style.columnName}>{column.title}</div>
        }
        <EditButton items={menuItems} />
      </div>

      <div className={style.cardsContainer}>
        {column?.items?.map(item => (
          <Card card={item} key={item.id} colId={column.id} />
        ))}
      </div>

      <NewItem label='Add a card' onSave={handleAddNewCard} placeholder='Enter card title' />
    </div>
  )
}

export default memo(Column)