import React, { useState } from "react";
import { createContext } from "react";

export const SideBarContext = createContext();

const Sidebarcontext = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("isOpen: ", isOpen);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SideBarContext.Provider value={{ isOpen, handleClose, setIsOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default Sidebarcontext;
