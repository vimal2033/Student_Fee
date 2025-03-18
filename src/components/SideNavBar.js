import React from 'react'
import { NavLink } from 'react-router-dom'
import SideInfoCards from './SideInfoCards'


const SideNavBar = () => {
  return (
    <>
     {/* <!-- side nevigation bar --> */}
     <aside className="w-64 bg-white border-r border-gray-200 fixed h-full drop-shadow-lg">
        {/* <!-- main logo --> */}
        <div className="px-6 py-4 border-b border-gray-200">
          <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="School Logo"className="h-8"/>
        </div>
        {/* <!-- side nevigation bar options --> */}
        <nav className="mt-6 px-4 drop-shadow-md">

        <div className="bg-white rounded-lg border border-gray-200 mb-10">
          {/* <NavLink to="/" exact className={({ isActive }) => 
                `flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-indigo-50 ${isActive ? 'text-custom bg-indigo-100' : 'text-gray-600'}`
              }  >
            <i className="fas fa-chart-line w-5 h-5 mr-3"></i>
           
            Dashboard
          </NavLink> */}

          <NavLink to="/" exact className={({ isActive }) => 
                `flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-indigo-50 ${isActive ? 'text-custom bg-indigo-100' : 'text-gray-600'}`
              }>
            <i className="fas fa-money-bill w-5 h-5 mr-3"></i>
            Payment
          </NavLink>

          <NavLink to="/add-student" exact className={({ isActive }) => 
                `flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-indigo-50 ${isActive ? 'text-custom bg-indigo-100' : 'text-gray-600'}`
              }>
            <i className="fas fa-user-graduate w-5 h-5 mr-3"></i>
            New Students
          </NavLink>

          <NavLink to="/search-student" exact className={({ isActive }) => 
                `flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-indigo-50 ${isActive ? 'text-custom bg-indigo-100' : 'text-gray-600'}`
              }>
          <i className="fas fa-search mr-2"></i>
            Search Students
          </NavLink>

          <NavLink to="/payment-history"  exact className={({ isActive }) => 
                `flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-indigo-50 ${isActive ? 'text-custom bg-indigo-100' : 'text-gray-600'}`
              }>
            <i className="fas fa-file-alt w-5 h-5 mr-3"></i>
           Payment HIstory
          </NavLink>
          </div>
          
          <SideInfoCards/>
          
        </nav>
      </aside>
    </>
  )
}

export default SideNavBar
