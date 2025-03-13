import React from 'react'
import FeeEntryCardDeshboard from './FeeEntryCardDeshboard'
import StudentDetailsDeshboard from './StudentDetailsDeshboard'

const DashboardFeeEntry = (props) => {

 //submit payment details (removed async await)
 function submit_Payment(id,name,course,fee,date){
  const url = "https://script.google.com/macros/s/AKfycbxpzloOf5uY3hrlCiCqFo-OdqwlEDuRzUGYjHQcsJEYhSoa-JPct9voSW8Igjte07a7Kw/exec";

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({STUDENT_ID:id, STUDENT_NAME: name, COURSE: course,FEE_RECIVED:fee,DATE:date })
  })
  .then(() => {
    console.log("Data sent successfully!");
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

  return (
   <>
   

             {/* <!-- creating grid for fee entry and payment history -->  */}
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
              {/* <!-- fee entry card --> */}
              <div className=" md:col-span-2">
                {/* Fee Entry Card Component */}
                <FeeEntryCardDeshboard  click={(id,name,course,fee,date)=>{submit_Payment(id,name,course,fee,date)}}/>
              </div>
              {/* <!-- student details card --> */}
              <div className="  md:col-span-1  ">
                {/* Student Details Card Component */}
                <StudentDetailsDeshboard/>
              </div>
            </div>
             {/* <!-- grid for fee entry and payment history closed -->  */}

            
   </>
  )
}

export default DashboardFeeEntry
