import React, { createContext, useContext, useReducer } from "react";

const contextApi = createContext();

const ContextApiProvider = ({ children }) => {
  const initState = [];
  const reducer = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <contextApi.Provider value={{ dispatch, state }}>
      {children}
    </contextApi.Provider>
  );
};

const useContextValue = () => useContext(contextApi);

export { useContextValue };

export default ContextApiProvider;
