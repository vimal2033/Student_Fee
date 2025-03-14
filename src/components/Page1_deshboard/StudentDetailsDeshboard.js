import React from 'react'
import {useMyContext} from '../../global/MyContext';
const StudentDetailsDeshboard = () => {

const {Input,dropdownVisible}=useMyContext();
return (
    <>
    {/* <!-- payment history card --> */}
    <div className="bg-white rounded-lg border border-gray-200 p-6 drop-shadow-xl">
        {/* <!-- Student details heading --> */}
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Student Details
        </h2>

        <table className="w-full">
            <tbody>
            <tr>
                <td  >
                    
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <label className="rounded-button w-full border-gray-300 bg-gray-50 text-gray-900 font-semibold text-xl p-2 " htmlFor="Name">
                    {!dropdownVisible? Input.Name : ""}
                    </label>
                    
                </td>
            </tr>
            <tr>
                <td className="border-b border-gray-200 p-1 " ></td>
            </tr>
            <tr>
                <td >
                    <label className="block text-sm font-medium text-gray-700 mb-1">PHONE NUMBER</label>
                    <label className="rounded-button w-full border-gray-300 bg-gray-50 text-gray-900 font-semibold text-xl p-2" htmlFor="PHONE-NUMBER">
                    {!dropdownVisible? Input.Phone : ""}
                    </label>
                </td>
            </tr>
            <tr>
                <td className="border-b border-gray-200 p-1 " ></td>
            </tr>
            <tr>
                <td >
                    <label className="block text-sm font-medium text-gray-700 mb-1">COURSE</label>
                    <label className="rounded-button w-full border-gray-300 bg-gray-50 text-gray-900 font-semibold text-xl p-2" htmlFor="COURSE">
                    {!dropdownVisible? Input.Course : ""}
                    </label>
                </td>
            </tr>
            <tr>
                <td className="border-b border-gray-200 p-1 " ></td>
            </tr>
            <tr>  
                <td >
                    <label className="block text-sm font-medium text-gray-700 mb-1">UNIVERSITY</label>
                    <label className="rounded-button w-full border-gray-300 bg-gray-50 text-gray-900 font-semibold text-xl p-2" htmlFor="UNIVERSITY">
                    {!dropdownVisible? Input.University : ""}
                    </label>
                </td>
            </tr>
            <tr>
                <td className="border-b border-gray-200 p-1 " ></td>
            </tr>
            <tr>
                <td>
                    <label className="block text-sm font-medium text-gray-700 mb-1">TOTAL FEE</label>
                    <label className="rounded-button w-full border-gray-300 bg-gray-50 text-gray-900 font-semibold text-xl p-2" htmlFor="TOTAL-FEE">
                    Rs  {!dropdownVisible? Input.TotalFee : "0"}
                    </label>
                </td>
            </tr>
            <tr>
                <td className="border-b border-gray-200 p-1 " ></td>
            </tr>
            <tr>
                <td>
                    <label className="block text-sm font-medium text-gray-700 mb-1">FEE PAID</label>
                    <label className="rounded-button w-full border-gray-300 bg-gray-50 text-green-700 font-semibold text-xl p-2" htmlFor="FEE-PAID">
                        Rs  {!dropdownVisible? Input.FeePaid : "0"}
                    </label>
                </td>
            </tr>
            <tr>
                <td className="border-b border-gray-200 p-3" ></td>
            </tr>
            <tr>
                <td>
                  <button type="submit" className="!rounded-button w-full bg-custom text-white py-2 px-4 font-medium text-sm ">
                    <i className="fas fa-history mr-2"></i>
                    Payment History
                  </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    </>
)
}

export default StudentDetailsDeshboard
