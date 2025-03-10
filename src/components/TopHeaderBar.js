import React from 'react'

const TopHeaderBar = () => {
  return (
    <>
    {/* <!-- header of the web page --> */}
    <header className="bg-white border-b border-gray-200 drop-shadow-md ">
          <div className="px-6 py-4 flex items-center justify-between">
            {/* <!-- page title  --> */}
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            {/* <!-- user profile --> */}
            <div className="flex items-center">
              <button className="flex items-center text-sm font-medium text-gray-700 drop-shadow-md">
                <img src="/images/corporate-user-icon.png"
                  alt="" className="w-8 h-8 rounded-full mr-2 "/>
                <span>Admin User</span>
                <i className="fas fa-chevron-down ml-2 text-gray-400"></i>
              </button>
            </div> 
            {/* <!-- user profile div close --> */}
          </div>
            {/* <!-- header div close --> */}
        </header>
    </>
  )
}

export default TopHeaderBar
