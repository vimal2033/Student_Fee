import React, { useState } from 'react';

const FeeEntryCardDeshboard = (props) => {
  function setToday() {
    // set default date to today
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    // Ensure two digits for month and day
    if (month < 10) { month = '0' + month; }
    if (day < 10) { day = '0' + day; }
    const formattedDate = `${year}-${month}-${day}`; // Use YYYY-MM-DD format which is default for input type date
    return formattedDate;
  }

  const StudentData = props.getdata;
  const [InputId, setInputId] = useState("1234");
  const [InputName, setInputName] = useState("RAJU");
  const [InputDate, setInputDate] = useState(setToday());
  const [InputCourse, setInputCourse] = useState("DCA");
  const [inputAmount, setInputAmount] = useState("500");

  

  const filteredData = StudentData.filter(item =>
    item.NAME.toLowerCase().includes(InputName.toLowerCase())
  );

  return (
    <>
      <h2>Fee Entry</h2>
      {/* <!-- form for fee entry --> */}
      <form>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
            <input type="text"
              className="!rounded-button w-2/3 border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
              placeholder="Enter student ID" onChange={(e) => { setInputId(e.target.value) }} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
            <input type="text"
              className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
              placeholder="Student name"
              value=""
              onChange={(e)=>{ setInputName(e.target.value)}} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Date</label>
            <input type="text"
              className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
              placeholder="Payment date"
              value={InputDate}
              onChange={(e) => { setInputDate(e.target.value) }} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
            <input type="text"
              className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
              placeholder="Course"
              value={InputCourse}
              onChange={(e) => { setInputCourse(e.target.value) }} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
            <input type="text"
              className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
              placeholder="Amount"
              value={inputAmount}
              onChange={(e) => { setInputAmount(e.target.value) }} />
          </div>
        </div>
      </form>
      {/* Display filtered data */}
      {filteredData.length > 0 ? (
        <ul>
          {filteredData.map((item, index) => (
            <li key={index}>{item.NAME} - {item["STUDENT ID"]}</li>
          ))}
        </ul>
      ) : (
        <p>No data found for the name: {InputName}</p>
      )}
    </>
  );
};

export default FeeEntryCardDeshboard;