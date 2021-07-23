import { v4 as uuid } from 'uuid'

export const BoardReducer = (state, action) => {
  const { colId, cardId, title } = action
  const colIndex = state.findIndex(item => item.id === colId)
  const cardIndex = state[colIndex]?.items?.findIndex(item => item.id === cardId)

  switch (action.type) {
    case 'ADD_COL':
      return [
        ...state,
        {
          title,
          items: [],
          createdAt: Date.now(),
          id: uuid(),
        }
      ]

    case 'DELETE_COL':
      return state.filter(column => column.id !== colId)

    case 'EDIT_COL_TITLE':
      if (colIndex !== -1) {
        state[colIndex].title = title

        return [
          ...state
        ]
      }
      return state

    case 'SORT_BY_DATE_ASC':
      if (colIndex !== -1) {
        console.log(state[colIndex].items)
        state[colIndex].items = state[colIndex].items?.sort((a, b) => b.createdAt - a.createdAt)

        return [
          ...state
        ]
      }
      return state

    case 'SORT_BY_DATE_DESC':
      if (colIndex !== -1) {
        state[colIndex].items = state[colIndex].items?.sort((a, b) => a.createdAt - b.createdAt)

        return [
          ...state
        ]
      }
      return state

    case 'SORT_BY_NAME':
      if (colIndex !== -1) {
        state[colIndex].items = state[colIndex].items?.sort((a, b) => a.title === b.title ? 0 : a.title < b.title ? -1 : 1)

        return [
          ...state
        ]
      }
      return state

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

    case 'DELETE_CARD':
      if (colIndex !== -1) {
        state[colIndex].items = state[colIndex].items?.filter(card => card.id !== cardId)

        return [
          ...state
        ]
      }
      return state

    case 'EDIT_CARD_TITLE':
      if (cardIndex !== -1) {
        state[colIndex].items[cardIndex].title = title

        return [
          ...state
        ]
      }
      return state

    case 'REMOVE_CARD':
      return state.filter(board => board.id !== action.id)
    default:
      return state
  }
}