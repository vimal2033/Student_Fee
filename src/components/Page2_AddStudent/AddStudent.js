import React from 'react'
import {Link} from 'react-router-dom'
const AddStudent = () => {
  return (
   <>
   <div className="bg-white rounded-lg border border-gray-200 p-6 drop-shadow-md">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Student Information
              </h2>
              <form>
                <div className="grid grid-cols-1  sm:grid-cols-2 gap-4">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" > Name</label>
                    <input type="text"className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm" placeholder="Enter the full name"/>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" >Course Name</label >
                    <select className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm" >
                      <option value="">Select Course</option>
                      <option value="DCA">DCA</option>
                      <option value="PGDCA">PGDCA</option>
                      <option value="TALLY">TALLY</option>
                      <option value="BASIC">BASIC</option>
                    </select>
                    </div>

                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" >Date of Birth</label >
                    <input type="date" className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom" />
                  </div> */}

                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" >Gender</label>
                    <select className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom" >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div> */}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" >University</label >
                    <select className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm" >
                      <option value="">Select University</option>
                      <option value="C.V.RAMAN">C.V. RAMAN</option>
                      <option value="ISBM">ISBM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" >Phone Number</label >
                    <input type="tel" className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
                      placeholder="Enter phone number"/>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <textarea className="!rounded-button w-full border-gray-300 focus:border-custom focus:ring-custom drop-shadow-sm"
                     rows="1" placeholder="Enter address" ></textarea>
                  </div>

                <div className="mt-6 flex justify-end space-x-4">
                  <Link to="/" type="button" className="!rounded-button px-4 py-2 bg-gray-500 text-white text-sm font-medium drop-shadow-sm hover:bg-indigo-50 hover:text-gray-700" >
                    <i className="fas fa-home mr-2"></i>
                    Home</Link >
                    <button type="button" className="!rounded-button px-4 py-2 border border-gray-300 bg-white text-gray-700 text-sm font-medium drop-shadow-sm" >
                    Clear</button >
                    <button type="submit" className="!rounded-button px-4 py-2 bg-custom text-white text-sm font-medium drop-shadow-sm" >
                    Add Student
                  </button>
                </div>

                </div>
              </form>
            </div>
   </>
  )
}

export default AddStudent
