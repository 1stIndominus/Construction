import React, { createContext, useState, ReactNode, useContext } from "react";

type ContextType = {
  show: boolean;
  toggle: () => void;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MyProvider = createContext<ContextType | undefined>(undefined);

type ShowMenuProviderProps = {
  children: ReactNode;
};

export const ShowMenuProvider: React.FC<ShowMenuProviderProps> = ({
  children,
}) => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((prev) => !prev);

  return (
    <MyProvider.Provider value={{ show, toggle, setShow }}>
      {children}
    </MyProvider.Provider>
  );
};

export const useMenuContext = () => {
  const context = useContext(MyProvider);
  if (!context) {
    throw new Error("useMenuContext must be used within a ShowMenuProvider");
  }
  return context;
};
