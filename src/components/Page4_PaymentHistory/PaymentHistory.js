import React from "react";

const PaymentHistory = () => {
  return (
    <>
     
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Payment History
            </h2>
            <div className="flex space-x-2">
              <button className="!rounded-button px-3 py-1 text-sm border border-gray-300 bg-white text-gray-700">
                <i className="fas fa-filter mr-2"></i>
                Filter
              </button>
              <button className="!rounded-button px-3 py-1 text-sm border border-gray-300 bg-white text-gray-700">
                <i className="fas fa-sort mr-2"></i>
                Sort
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-4 text-sm text-gray-900">
                    2024-02-15
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-900">
                    John Smith
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-900">$500</td>
                </tr>
                <tr>
                  <td className="px-3 py-4 text-sm text-gray-900">
                    2024-02-14
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-900">
                    Emma Johnson
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-900">$750</td>
                </tr>
                <tr>
                  <td className="px-3 py-4 text-sm text-gray-900">
                    2024-02-13
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-900">
                    Michael Brown
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-900">$1,000</td>
                </tr>
                <tr>
                  <td className="px-3 py-4 text-sm text-gray-900">
                    2024-02-12
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-900">
                    Sarah Wilson
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-900">$600</td>
                </tr>
                <tr>
                  <td className="px-3 py-4 text-sm text-gray-900">
                    2024-02-11
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-900">David Lee</td>
                  <td className="px-3 py-4 text-sm text-gray-900">$850</td>
                </tr>
              </tbody>
            </table>
          </div>
        
      
    </>
  );
};

export default PaymentHistory;
