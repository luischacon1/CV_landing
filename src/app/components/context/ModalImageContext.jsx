'use client';
import React, { createContext, useState, useContext } from "react";

const ModalImageContext = createContext();

export const useModalImage = () => useContext(ModalImageContext);

export const ModalImageProvider = ({ children }) => {
  const [modalImg, setModalImg] = useState(null);
  return (
    <ModalImageContext.Provider value={{ modalImg, setModalImg }}>
      {children}
    </ModalImageContext.Provider>
  );
}; 