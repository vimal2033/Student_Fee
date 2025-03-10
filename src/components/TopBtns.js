import React from 'react'
import { Link } from 'react-router-dom'
const TopBtns = () => {
  return (
    <>
    {/* <!-- creating buttons for add new student, record payment, generate receipt and search student --> */}
    <div className="grid grid-cols-4 gap-4 mb-6">
      
            <Link to="/"  className="!rounded-button flex items-center justify-center px-4 py-3 bg-custom text-white font-medium text-sm drop-shadow-xl" >
              <i className="fas fa-money-bill-wave mr-2"></i>
              Payment
            </Link>
            <Link to="/add-student"  className="!rounded-button flex items-center justify-center px-4 py-3 bg-custom text-white font-medium text-sm drop-shadow-xl" >
              <i className="fas fa-user-plus mr-2"></i>
             <div className="collapse sm:visible">New Student</div><div className="sm:collapse">New</div>
            </Link>
            <button className="!rounded-button flex items-center justify-center px-4 py-3 bg-custom text-white font-medium text-sm drop-shadow-xl">
              <i className="fas fa-search mr-2"></i>
              Search
            </button>
            <button className="!rounded-button flex items-center justify-center px-4 py-3 bg-custom text-white font-medium text-sm drop-shadow-xl" >
              <i className="fas fa-receipt mr-2"></i>
              History
            </button>

          </div>
            {/* <!-- 4 buttons created and div closed --> */}
    
    </>
  )
}

export default TopBtns
