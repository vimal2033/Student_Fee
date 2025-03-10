import React from 'react'

const FeeEntryCardDeshboard = () => {

  async function submit_Payment(){
    const url = "https://script.google.com/macros/s/AKfycbyQYPanEzA02zR0x5-T6BefsmQcN-EIZNCXvYG1nCWt6Iu4wi82yLnyqJJWYrOqyFb9/exec";
  
    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "raju", number: "99999999" })
      });
      console.log("Data sent successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
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
                    <input type="text"
                      className="!rounded-button w-2/3 border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
                      placeholder="Enter student ID" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                    <input type="text"
                      className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
                      placeholder="Student name"
                      readOnly />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Payment Date</label>
                    <input type="date"  className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"/>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" >Amount</label >
                    <input type="text"
                      className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
                      placeholder="Enter amount"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" >Current Balance</label>
                    <label className="!rounded-button w-full border-gray-300 bg-gray-50 text-red-700 font-semibold text-xl p-2" htmlFor="current-balance">
                        Rs 0
                    </label>
                    
                    
                  </div>
                  <div className="mt-6  flex space-x-4">
                    
                  <button type="submit" className="!rounded-button w-full bg-custom text-white py-2 px-4 font-medium text-sm"
                   onClick={() => submit_Payment()}>
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
