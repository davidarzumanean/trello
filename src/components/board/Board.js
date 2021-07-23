import { memo, useContext } from 'react';
import { addColumnAction } from '../../actions/BoardActions';
import { BoardContext } from '../../contexts/BoardContext';
import Column from '../column/Column';
import NewItem from '../newItem/NewItem';
import style from './Board.module.scss'

const Board = () => {
  const { board, dispatch } = useContext(BoardContext)

  const handleAddNewCol = (title) => {
    addColumnAction(dispatch, { title })
  }

  return (
    <div className={style.boardContainer}>
      {board?.map(col => (
        <Column column={col} key={col.id} />
      ))}
      <Column>
        <NewItem label='Add another column' onSave={handleAddNewCol} placeholder='Enter column title' />
      </Column>
    </div>
  )
}

export default memo(Board)