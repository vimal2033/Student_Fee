import React,{useState, useEffect, useRef} from 'react';
import { useMyContext } from '../../global/MyContext';
import {submit_Payment,formatCurrency} from '../../global/GlobalFunctions';

const FeeEntryCardDeshboard = (props) => {
const {get_student_data}=useMyContext();
const {Input,setInput,dropdownVisible,setDropdownVisible,filteredData}=useMyContext();


const inputRef = useRef(null);
const dropdownRef = useRef(null);

//hide dropdown on cliking outside ofinput box and dropdown
const handleClickOutside = (event) => {
  if (
    inputRef.current && !inputRef.current.contains(event.target) &&
    dropdownRef.current && !dropdownRef.current.contains(event.target) 
  ) {
   setDropdownVisible(false);
  }
};
useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
  // eslint-disable-next-line
}, []);

 

//select first list item on enter
const handleKeyDown = (e) => {
  
  if (e.key === 'Enter' && filteredData.length > 0) {
    e.preventDefault();
    setDropdownVisible(false);
    if(Input.Name!==""){ autofill(0);}
  }
};
const [highlightedIndex, setHighlightedIndex] = useState(0);

//autofill input boxes
const autofill=(index)=>{
 if (filteredData.length > 0) {
  setInput(prevState => ({ ...prevState, Id: filteredData[index]['STUDENT ID'],
                                       Name: filteredData[index].NAME, 
                                        Course: filteredData[index].COURSE,
                                        Phone: filteredData[index]['MOBILE NO'],
                                        University: filteredData[index].UNIVERSITY,
                                        TotalFee: filteredData[index]['TOTAL FEE'],
                                        FeePaid: filteredData[index]['FEE PAID'],
                                       Balance:filteredData[index].BALANCE
                                       }));
                                       
}}
const fillblank=()=>{
                  setInput(prevState => ({ ...prevState, Id: "",
                    // Name: "", 
                   Course: "",
                    
                    Phone: "",
                    University: "",
                    TotalFee: "0",
                    FeePaid: "0",
                    Balance:"0"
                    }));
}



  

  return (
    <>
       {/* <!-- fee entry card --> */}
    
       <div className="bg-white rounded-lg border border-gray-200 p-6 drop-shadow-xl ">
        {/* <!-- profile photo --> */}
        <div className="absolute top-0 right-0 p-6 ">
        {/* <img src="public/images/corporate-user-icon.png" alt="" className="w-16 h-16 rounded-full " /> */}
        <button>
        <div className="w-24 h-32 rounded-lg border border-gray-200 ">
    <img src="/images/corporate-user-icon.png" alt="" className="object-cover w-full h-full rounded-20 "/>
  </div></button>
        </div>
        {/* <!-- fee entry heading --> */}
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Fee Entry
              </h2>
                {/* <!-- form for fee entry --> */}
              <form>
                <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
                    <input type="text" value= {!dropdownVisible? Input.Id : ""}
                      className="!rounded-button w-2/3 border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
                      placeholder="Enter student ID" onChange={(e)=>{setInput(prevState => ({...prevState,Id: e.target.value }));}}/>
                  </div>
                  {/* //********input box for student name********* */}
                  <div className="relative">
  <label className="block text-sm font-medium text-gray-500 mb-1">Student Name</label>
  <input type="text" value={Input.Name} 
    className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
    placeholder="Student name" 
    onChange={(e)=>{setInput(prevState => ({...prevState,Name: e.target.value }));if(e.target.value!=="")setDropdownVisible(true);else setDropdownVisible(false);fillblank(); 
    setHighlightedIndex(0);}} // Reset highlight to the first item while typing 
    onKeyDown={(e)=>{handleKeyDown(e); if(e.target.value===""){fillblank();}}}
    ref={inputRef}
    />
  {/* //dropdown for name input box */}
  {dropdownVisible &&(
  <div className="!rounded-button border border-gray-300 absolute top-full left-0 w-full bg-white z-50 text-gray-700 mb-1 drop-shadow-md"
  ref={dropdownRef}
  >
     {/* Display filtered data search by name */}
      {filteredData.length > 0 ? (
        <ul >
          {filteredData.slice(0, 5).map((item, index) => (
            <li className={`cursor-pointer p-2 ${index === highlightedIndex ? 'bg-indigo-50' : ''}`} 
            key={index}
            onClick={(e)=>{
            setDropdownVisible(false);
           autofill(index);
          } }
            onMouseEnter={() => setHighlightedIndex(index)}>{item.NAME} - {item['STUDENT ID']}</li>
          ))}
        </ul>) : ( <div className="alert-container">
      <p className="p-2 alert-message">
      <i className="fas fa-exclamation-circle text-red-600 text-xl"/> No data found for the name: {Input.Name}
      </p>
    </div>)}
  
</div>)}
</div>
      
                  <div>
                    <label  className="block text-sm font-medium text-gray-700 mb-1">Payment Date</label>
                    <input type="date" id="myDate" value={Input.Date} onChange={(e)=>{setInput(prevState => ({...prevState,Date: e.target.value }));}}  className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"/>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" >Amount</label >
                    <input type="text" value={Input.Amount}
                      className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
                      placeholder="Enter amount" onChange={(e)=>{setInput(prevState => ({...prevState,Amount: e.target.value }));}}/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" >Current Balance</label>
                    <label className="!rounded-button w-full border-gray-300 bg-gray-50 text-red-700 font-semibold text-xl p-2" htmlFor="current-balance">
                          {!dropdownVisible? formatCurrency(Input.Balance) : formatCurrency(0)}
                    </label>
                    
                    
                  </div>
                  <div className="mt-6  flex space-x-4">
                    
                  <button type="button" className="!rounded-button w-full bg-custom text-white py-2 px-4 font-medium text-sm"
                   onClick={()=>{
                    submit_Payment(Input.Id,Input.Name,Input.Course,Input.Amount,Input.Date);
                    setTimeout(() => {get_student_data();}, 5000);
                    fillblank();
                    setInput(prevState => ({ ...prevState, Name: "",Amount:"" }));
  
                   }}>
                    Submit Payment
                  </button>
                  {/* <button type="button" className="!rounded-button  px-4 py-2 border border-gray-300 bg-white text-gray-700 text-sm font-medium" >
                    Clear</button > */}
                </div>

                </div>
              </form>
            </div>
     
    </>
  );
};

export default FeeEntryCardDeshboard;