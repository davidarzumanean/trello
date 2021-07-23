import { v4 as uuid } from 'uuid';

export const BoardReducer = (state, action) => {
  const { colId, cardId, title } = action.column
  const colIndex = state.findIndex(item => item.id === colId)
  const cardIndex = state[colIndex].items.findIndex(item => item.id === cardId)

  switch (action.type) {
    case 'ADD_COL':
      return [
        ...state,
        {
          title: action.column.title,
          items: [],
          createdAt: Date.now(),
          id: uuid(),
        }
      ]
    case 'EDIT_COL_TITLE':
      if (colIndex !== -1) {
        state[colIndex].title = title;

        return [
          ...state
        ]
      }
      return state
    case 'REMOVE_COL':
      return state.filter(column => column.id !== action.id);
    case 'ADD_CARD':
      if (colIndex !== -1) {
        state[colIndex] = {
          ...state[colIndex],
          items: [
            ...state[colIndex].items,
            {
              title,
              createdAt: Date.now(),
              id: uuid(),
            }
          ]
        }
        return [
          ...state
        ]
      }
      return state
    case 'EDIT_CARD_TITLE':
      if (cardIndex !== -1) {
        state[colIndex].items[cardIndex].title = title;

        return [
          ...state
        ]
      }
      return state
    case 'REMOVE_CARD':
      return state.filter(board => board.id !== action.id);
    default:
      return state;
  }
}