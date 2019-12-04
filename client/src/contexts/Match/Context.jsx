import React, { createContext, useReducer } from 'react';
import matchReducer from './Reducer';

const initialState = {
  isViewRegistModal: false,
};

const MatchContext = createContext(initialState);

const MatchProvider = ({ children }) => {
  const [matchState, dispatch] = useReducer(matchReducer, initialState);
  return (
    <MatchContext.Provider value={{ matchState, dispatch }}>
      {children}
    </MatchContext.Provider>
  );
};

export { MatchContext, MatchProvider };
