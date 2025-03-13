// MyContext.js
import React, { createContext, useContext, useState } from "react";

// Create Context
const MyContext = createContext();

// Create Provider Component
export const MyProvider = ({ children }) => {
  
  const [studata,setstudata]=useState([]);  //state for data of all the students

  return (
    <MyContext.Provider value={{ studata,setstudata}}>
      {children}
    </MyContext.Provider>
  );
};

// Export custom hook for easy access
export const useMyContext = () => useContext(MyContext);
