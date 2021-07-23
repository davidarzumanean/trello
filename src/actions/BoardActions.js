export const addColumnAction = (dispatch, payload) => {
  dispatch({ type: 'ADD_COL', ...payload })
}

export const addCardAction = (dispatch, payload) => {
  dispatch({ type: 'ADD_CARD', ...payload })
}

export const editColumnTitleAction = (dispatch, payload) => {
  dispatch({ type: 'EDIT_COL_TITLE', ...payload })
}

export const editCardTitleAction = (dispatch, payload) => {
  dispatch({ type: 'EDIT_CARD_TITLE', ...payload })
}