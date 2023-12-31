import React, { createContext, useState } from 'react';
export const RtlContext = createContext();

export const RtlProvider = ({ children }) => {
  const [rtl, setRtl] = useState(false);

  const toggleTrue = () => {
    console.log("Hi Ali ---true---");    
    setRtl(true);
  };
  const toggleFalse = () => {
    setRtl(false);
    console.log("Hi Ali ---false---");

  };

  return (
    <RtlContext.Provider value={{ rtl, toggleTrue,toggleFalse }}>
      {children}
    </RtlContext.Provider>
  );
};