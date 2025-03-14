// MyContext.js
import React, { createContext, useContext, useState } from "react";
import {setToday} from './GlobalFunctions'; //accessing global functions


// Create Context
const MyContext = createContext();


// Create Provider Component
export const MyProvider = ({ children }) => {

 
  
  const [StudentData,setStudentData]=useState([]);  //state for data of all the students
  const [Input,setInput]= useState({Id:"",Name:"",Date:setToday(),Amount:"",Course:"",Phone:"",University:"",TotalFee:0,FeePaid:0,Balance:0});
  const [dropdownVisible, setDropdownVisible] = useState(false);//name dropdown visibility
  
 // Filter data based on name
 const filteredData = StudentData.filter((item) =>
  item.NAME.toLowerCase().includes(Input.Name.toLowerCase())
);
  
//get student data
async function get_student_data() {
  const url = "https://script.google.com/macros/s/AKfycbxpzloOf5uY3hrlCiCqFo-OdqwlEDuRzUGYjHQcsJEYhSoa-JPct9voSW8Igjte07a7Kw/exec";

  try {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
    console.log("GET Response:", data);
    setStudentData(data[0].data);
  
    // document.getElementById("app").textContent = JSON.stringify(data[0].data[0].name);
  } catch (error) {
    console.error("Error:", error);
  }
}


  return (
    <MyContext.Provider value={{ StudentData,setStudentData,Input,setInput,dropdownVisible,setDropdownVisible,filteredData,
                                get_student_data
                              }}>
      {children}
    </MyContext.Provider>
  );
};

// Export custom hook for easy access
export const useMyContext = () => useContext(MyContext);
