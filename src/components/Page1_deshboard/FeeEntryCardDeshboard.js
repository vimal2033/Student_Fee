import React from 'react';
import { useMyContext } from '../../global/MyContext';

const FeeEntryCardDeshboard = (props) => {
 
const {StudentData,Input,setInput}=useMyContext();

  // Filter data based on name
  const filteredData = StudentData.filter(item =>
    item.NAME.toLowerCase().includes(Input.Name.toLowerCase())
  );
  

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
                    <input type="text"
                      className="!rounded-button w-2/3 border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
                      placeholder="Enter student ID" onChange={(e)=>{setInput(prevState => ({...prevState,Id: e.target.value }));}}/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                    <input type="text"
                      className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
                      placeholder="Student name" onChange={(e)=>{setInput(prevState => ({...prevState,Name: e.target.value }));}} />
                  </div>
                  
                  <div>
                    <label  className="block text-sm font-medium text-gray-700 mb-1">Payment Date</label>
                    <input type="date" id="myDate" value={Input.Date} onChange={(e)=>{setInput(prevState => ({...prevState,Date: e.target.value }));}}  className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"/>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" >Amount</label >
                    <input type="text"
                      className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
                      placeholder="Enter amount" onChange={(e)=>{setInput(prevState => ({...prevState,Amount: e.target.value }));}}/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" >Current Balance</label>
                    <label className="!rounded-button w-full border-gray-300 bg-gray-50 text-red-700 font-semibold text-xl p-2" htmlFor="current-balance">
                        Rs 0
                    </label>
                    
                    
                  </div>
                  <div className="mt-6  flex space-x-4">
                    
                  <button type="button" className="!rounded-button w-full bg-custom text-white py-2 px-4 font-medium text-sm"
                   onClick={()=>{props.click(Input.Id,Input.Name,Input.Course,Input.Amount,Input.Date)}}>
                    Submit Payment
                  </button>
                  {/* <button type="button" className="!rounded-button  px-4 py-2 border border-gray-300 bg-white text-gray-700 text-sm font-medium" >
                    Clear</button > */}
                </div>

                </div>
              </form>
            </div>
      {/* Display filtered data */}
      {filteredData.length > 0 ? (
        <ul>
          {filteredData.map((item, index) => (
            <li key={index}>{item.NAME} - {item["STUDENT ID"]}</li>
          ))}
        </ul>
      ) : (
        <p>No data found for the name: {Input.Name}</p>
      )}
    </>
  );
};

export default FeeEntryCardDeshboard;