import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import { BoardReducer } from '../reducers/BoardReducer';

export const BoardContext = createContext();

const BoardContextProvider = (props) => {
  const [board, dispatch] = useReducer(BoardReducer, [], () => {
    const localData = localStorage.getItem('board');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('board', JSON.stringify(board));
  }, [board]);

  const value = useMemo(() => ({
    board, dispatch
  }), [board]);

  return (
    <BoardContext.Provider value={value}>
      {props.children}
    </BoardContext.Provider>
  );
}
 
export default BoardContextProvider;