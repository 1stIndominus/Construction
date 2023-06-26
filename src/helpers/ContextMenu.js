import React, { createContext, useState } from 'react';

export const MyProvider = createContext();

export const ShowMenuProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <MyProvider.Provider value={{ show, toggle, setShow }}>
      {children}
    </MyProvider.Provider>
  );
};