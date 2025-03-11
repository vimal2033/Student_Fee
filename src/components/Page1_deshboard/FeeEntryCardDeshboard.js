import React,{useEffect,useState} from 'react'

const FeeEntryCardDeshboard = (props) => {

function setToday(){
   // set default date to today
   const today = new Date();
   const year = today.getFullYear();
   let month = today.getMonth() + 1;
   let day = today.getDate();
   // Ensure two digits for month and day
   if (month < 10) { month = '0' + month; }
   if (day < 10) { day = '0' + day; }
   const formattedDate = `${year}-${month}-${day}`; // Use YYYY-MM-DD format whicch is dafault for input type date
   return formattedDate;
}

const [InputId,setInputId] = useState("1234");
const [InputName, setInputName] = useState("raju");
const [InputDate, setInputDate] = useState(setToday());
const [InputCourse,setInputCourse] = useState("DCA");
const [inputAmount, setInputAmount] = useState("500");

  useEffect(() => {
   
  }, []);

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
//********************************************************************* 
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
                      placeholder="Enter student ID" onChange={(e)=>{setInputId(e.target.value)}}/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                    <input type="text"
                      className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
                      placeholder="Student name" onChange={(e)=>{setInputName(e.target.value)}} />
                  </div>
                  
                  <div>
                    <label  className="block text-sm font-medium text-gray-700 mb-1">Payment Date</label>
                    <input type="date" id="myDate" value={InputDate} onChange={(e) => setInputDate(e.target.value)}  className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"/>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" >Amount</label >
                    <input type="text"
                      className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
                      placeholder="Enter amount" onChange={(e)=>{setInputAmount(e.target.value)}}/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" >Current Balance</label>
                    <label className="!rounded-button w-full border-gray-300 bg-gray-50 text-red-700 font-semibold text-xl p-2" htmlFor="current-balance">
                        Rs 0
                    </label>
                    
                    
                  </div>
                  <div className="mt-6  flex space-x-4">
                    
                  <button type="button" className="!rounded-button w-full bg-custom text-white py-2 px-4 font-medium text-sm"
                   onClick={() => submit_Payment(InputId,InputName,InputCourse,inputAmount,InputDate)}>
                    Submit Payment
                  </button>
                  {/* <button type="button" className="!rounded-button  px-4 py-2 border border-gray-300 bg-white text-gray-700 text-sm font-medium" >
                    Clear</button > */}
                </div>

                </div>
              </form>
            </div>
    </>
  )
}

export default FeeEntryCardDeshboard
