import React from 'react';
import SearchInput from './SearchInput';
import { useMyContext } from '../../global/MyContext';
import {formatCurrency} from  '../../global/GlobalFunctions';



const SearchStudent = () => {
  const {filteredData, highlightedIndex, setHighlightedIndex} = useMyContext();
  const {Input,StudentData} = useMyContext();

  return (
    <>
      
      <div className="grid grid-cols-2 gap-6">
            <div
              className="bg-white rounded-lg border border-gray-200 p-6 col-span-2"
            >
              {/* top section like search box and filter sort option */}
              <div className="mb-6">

                {/* search box to search student */}
                <div className="flex items-center space-x-4 mb-6">

                  <div className="flex-1">
                   {/* //********input box for student name********* */}
                  <SearchInput  placeholder="Search Student By Name" element="Name" width="w-full"/>
                    {/* <input
                      type="text"
                      placeholder="Search by student name, ID, or class"
                      className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom py-2 px-4"
                    /> */}
                  </div>

                  {/* <button
                    className="!rounded-button bg-custom text-white px-6 py-2 font-medium text-sm"
                  >
                    <i className="fas fa-search mr-2"></i>Search
                  </button> */}

                </div>
                {/* extra option like filter and sort */}
                <div className="flex space-x-4">
                  <button
                    className="!rounded-button px-4 py-2 text-sm border border-gray-300 bg-white text-gray-700"
                  >
                    <i className="fas fa-filter mr-2"></i>Filter</button
                  ><select
                    className="!rounded-button border-gray-300 text-sm text-gray-700"
                  >
                    <option>Course</option>
                    <option>Computer Science</option>
                    <option>Business</option>
                    <option>Engineering</option></select
                  ><select
                    className="!rounded-button border-gray-300 text-sm text-gray-700"
                  >
                    <option>Fee Status</option>
                    <option>Paid</option>
                    <option>Pending</option>
                    <option>Overdue</option>
                  </select>
                </div>

              </div>

              <div className="overflow-x-auto  overflow-y-auto max-h-96">
                <table className="min-w-full divide-y divide-gray-200">
                    {/* ******************************************************* */}
                  <thead>
                    <tr>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Student ID
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Name
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Course
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Total Fee
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Paid Amount
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Balance
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Status
                      </th>
                      <th
                        className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >Action
                      </th>
                    </tr>
                  </thead>
                {/* *********************************************************** */}
                  <tbody className="divide-y divide-gray-200">
                    
                      {/* Display filtered data search by name */}
      {
        (filteredData.length > 0)?(
        // show result for the search student name if search box is not black and record is present
        < >
          {filteredData.slice(0, 5).map((item, index) => (
            <tr className={`cursor-pointer p-2 ${index === highlightedIndex ? 'bg-indigo-50' : ''}`} 
            key={index}
            onClick={()=>{
          //  autofill(index);
          } }
            onMouseEnter={() => setHighlightedIndex(index)}>
              {/* -------------------------------------------------------------------------- */}
              <td className="px-4 py-4 text-sm text-gray-900">{item['STUDENT ID']}</td>
                    <td className="px-4 py-4 text-sm text-gray-900">
                    {item.NAME}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-900">{item.COURSE}</td>
                    <td className="px-4 py-4 text-sm text-gray-900">{formatCurrency(item['TOTAL FEE'])}</td>
                    <td className="px-4 py-4 text-sm text-gray-900">{formatCurrency(item['FEE PAID'])}</td>
                    <td className="px-4 py-4 text-sm text-gray-900">{formatCurrency(item.BALANCE)}</td>
                    <td className="px-4 py-4 text-sm">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${item.BALANCE===0?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`}
                                                                           // bg-yellow-100 text-yellow-800
                        >{item.BALANCE===0?"Paid":"Pending"}</span>
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <button className="text-custom hover:text-custom-dark">
                        <i className="fas fa-edit mr-2"></i>Edit
                      </button>
                    </td>
               {/* -------------------------------------------------------------------------- */}
              </tr>
          ))}
        </>):(
          // show all students data if search box is blank
          (Input.Name==="")?(
            <>
            {StudentData.map((item, index) => (
              <tr className={`cursor-pointer p-2 ${index === highlightedIndex ? 'bg-indigo-50' : ''}`} 
              key={index}
              onClick={()=>{
            //  autofill(index);
            } }
              onMouseEnter={() => setHighlightedIndex(index)}>
                {/* -------------------------------------------------------------------------- */}
                <td className="px-4 py-4 text-sm text-gray-900">{item['STUDENT ID']}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                      {item.NAME}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">{item.COURSE}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{formatCurrency(item['TOTAL FEE'])}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{formatCurrency(item['FEE PAID'])}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{formatCurrency(item.BALANCE)}</td>
                      <td className="px-4 py-4 text-sm">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${item.BALANCE===0?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`}
                                                                             // bg-yellow-100 text-yellow-800
                          >{item.BALANCE===0?"Paid":"Pending"}</span>
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <button className="text-custom hover:text-custom-dark">
                          <i className="fas fa-edit mr-2"></i>Edit
                        </button>
                      </td>
                 {/* -------------------------------------------------------------------------- */}
                </tr>
            ))}
          </>):(
             <div className="alert-container">
      <p className="p-2 alert-message">
      <i className="fas fa-exclamation-circle text-red-600 text-xl"/> No data found for the name: {Input.Name}
      </p>
    </div>)
          )
          }
                      
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>

    </>
  )
}

export default SearchStudent
