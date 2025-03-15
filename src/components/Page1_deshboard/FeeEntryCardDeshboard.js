import React from 'react';
import { useMyContext } from '../../global/MyContext';
import {submit_Payment,formatCurrency} from '../../global/GlobalFunctions';
import InputSuggestion from './InputSuggestion';

const FeeEntryCardDeshboard = (props) => {
const {get_student_data}=useMyContext();
const {Input,setInput,dropdownVisible}=useMyContext();


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

                  {/* //********input box for student id********* */}
                  <InputSuggestion label="Student ID" placeholder="Enter Student ID" element="Id" width="w-2/3"/>
                  {/* //********input box for student name********* */}
                  <InputSuggestion label="Student Name" placeholder="Enter Student Name" element="Name" width="w-full"/>
      
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