import React from 'react'

const SearchStudent = () => {
  return (
    <>
      
      <div className="grid grid-cols-2 gap-6">
            <div
              className="bg-white rounded-lg border border-gray-200 p-6 col-span-2"
            >
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Search by student name, ID, or class"
                      className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom py-2 px-4"
                    />
                  </div>
                  <button
                    className="!rounded-button bg-custom text-white px-6 py-2 font-medium text-sm"
                  >
                    <i className="fas fa-search mr-2"></i>Search
                  </button>
                </div>
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
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
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
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-4 text-sm text-gray-900">STU001</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        John Smith
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        Computer Science
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">$5,000</td>
                      <td className="px-4 py-4 text-sm text-gray-900">$3,500</td>
                      <td className="px-4 py-4 text-sm text-gray-900">$1,500</td>
                      <td className="px-4 py-4 text-sm">
                        <span
                          className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800"
                          >Pending</span
                        >
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <button className="text-custom hover:text-custom-dark">
                          <i className="fas fa-edit mr-2"></i>Edit
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-sm text-gray-900">STU002</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        Emma Johnson
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">Business</td>
                      <td className="px-4 py-4 text-sm text-gray-900">$5,000</td>
                      <td className="px-4 py-4 text-sm text-gray-900">$5,000</td>
                      <td className="px-4 py-4 text-sm text-gray-900">$0</td>
                      <td className="px-4 py-4 text-sm">
                        <span
                          className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800"
                          >Paid</span
                        >
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <button className="text-custom hover:text-custom-dark">
                          <i className="fas fa-edit mr-2"></i>Edit
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-sm text-gray-900">STU003</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        Michael Brown
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        Engineering
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">$5,000</td>
                      <td className="px-4 py-4 text-sm text-gray-900">$2,000</td>
                      <td className="px-4 py-4 text-sm text-gray-900">$3,000</td>
                      <td className="px-4 py-4 text-sm">
                        <span
                          className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800"
                          >Overdue</span
                        >
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <button className="text-custom hover:text-custom-dark">
                          <i className="fas fa-edit mr-2"></i>Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

    </>
  )
}

export default SearchStudent
