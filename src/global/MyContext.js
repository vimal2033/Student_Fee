// MyContext.js
import React, { createContext, useContext, useState } from "react";
import {setToday} from './GlobalFunctions'; //accessing global functions


// Create Context
const MyContext = createContext();


// Create Provider Component
export const MyProvider = ({ children }) => {

 
  
  const [StudentData,setStudentData]=useState([]);  //state for data of all the students
  const [Input,setInput]= useState({Id:"",Name:"",Date:setToday(),Amount:0,Course:"",Phone:"",University:"",TotalFee:0,FeePaid:0,Balance:0});
  const [dropdownVisible, setDropdownVisible] = useState(false);//name dropdown visibility
  
 // Filter data based on name
 const filteredData = StudentData.filter((item) =>
  item.NAME.toLowerCase().includes(Input.Name.toLowerCase())
);
  
  return (
    <MyContext.Provider value={{ StudentData,setStudentData,Input,setInput,dropdownVisible,setDropdownVisible,filteredData}}>
      {children}
    </MyContext.Provider>
  );
};

// Export custom hook for easy access
export const useMyContext = () => useContext(MyContext);
