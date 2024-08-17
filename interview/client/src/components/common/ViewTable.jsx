import React from 'react'

const ViewTable = () => {

    const students = [
        { id: 1, name: "John Doe", email: "john@example.com", attempt: "1", result: "Passed" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", attempt: "1", result: "Failed" },
        { id: 3, name: "Sam Brown", email: "sam@example.com", attempt: "3", result: "Passed" },
        // Add more students here
      ];
    
      return (
        <div className="overflow-x-auto px-4 py-6">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-3 px-4 text-left font-semibold">Name</th>
                <th className="py-3 px-4 text-left font-semibold">Email</th>
                <th className="py-3 px-4 text-left font-semibold">Attempt</th>
                <th className="py-3 px-4 text-left font-semibold">Result</th>
                <th className="py-3 px-4 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-t border-gray-200">
                  <td className="py-3 px-4">{student.name}</td>
                  <td className="py-3 px-4">{student.email}</td>
                  <td className="py-3 px-4">{student.attempt}</td>
                  <td className="py-3 px-4">{student.result}</td>
                  <td className="py-3 px-4 text-center">
                    <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default ViewTable