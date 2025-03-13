// MyContext.js
import React, { createContext, useContext, useState } from "react";
import {setToday} from './GlobalFunctions'; //accessing global functions


// Create Context
const MyContext = createContext();


// Create Provider Component
export const MyProvider = ({ children }) => {

 
  
  const [StudentData,setStudentData]=useState([]);  //state for data of all the students
  const [Input,setInput]= useState({Id:"100",Name:"shyam",Date:setToday(),Course:"PGDCA",Amount:"5000"});
  return (
    <MyContext.Provider value={{ StudentData,setStudentData,Input,setInput}}>
      {children}
    </MyContext.Provider>
  );
};

// Export custom hook for easy access
export const useMyContext = () => useContext(MyContext);
