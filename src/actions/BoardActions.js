export const addColumnAction = (dispatch, payload) => {
  dispatch({ type: 'ADD_COL', ...payload })
}

export const deleteColumnAction = (dispatch, payload) => {
  dispatch({ type: 'DELETE_COL', ...payload })
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

export const deleteCardAction = (dispatch, payload) => {
  dispatch({ type: 'DELETE_CARD', ...payload })
}

export const sortColByDateAsc = (dispatch, payload) => {
  dispatch({ type: 'SORT_BY_DATE_ASC', ...payload })
}

export const sortColByDateDesc = (dispatch, payload) => {
  dispatch({ type: 'SORT_BY_DATE_DESC', ...payload })
}

export const sortColByName = (dispatch, payload) => {
  dispatch({ type: 'SORT_BY_NAME', ...payload })
}