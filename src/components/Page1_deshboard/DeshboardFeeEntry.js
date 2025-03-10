import React from 'react'
import FeeEntryCardDeshboard from './FeeEntryCardDeshboard'
import StudentDetailsDeshboard from './StudentDetailsDeshboard'

const DeshboardFeeEntry = () => {
  return (
   <>

             {/* <!-- creating grid for fee entry and payment history -->  */}
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
              {/* <!-- fee entry card --> */}
              <div className=" md:col-span-2">
                {/* Fee Entry Card Component */}
                <FeeEntryCardDeshboard/>
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

export default DeshboardFeeEntry
