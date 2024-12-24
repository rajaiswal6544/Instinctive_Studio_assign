import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import { fetchStudents } from "../studentSlice";

const Table = () => {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents()); // Fetch students on component mount
  }, [dispatch]);

  return (
    <div className="overflow-x-auto mt-4">
      {loading && (
        <div className="flex justify-center items-center">
          <p>Loading students...</p>
        </div>
      )}
      {error && (
        <div className="text-red-500">
          <p>Error: {error}</p>
          <button
            onClick={() => dispatch(fetchStudents())}
            className="text-blue-500 underline"
          >
            Retry
          </button>
        </div>
      )}
      {!loading && !error && (
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2 text-sm whitespace-nowrap">Student Name</th>
              <th className="p-2 text-sm whitespace-nowrap">Cohort</th>
              <th className="p-2 text-sm whitespace-nowrap">Courses</th>
              <th className="p-2 text-sm whitespace-nowrap">Date Joined</th>
              <th className="p-2 text-sm whitespace-nowrap">Last Login</th>
              <th className="p-2 text-sm whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="p-2 text-sm">{student.name || "N/A"}</td>
                <td className="p-2 text-sm whitespace-nowrap">{student.cohort || "N/A"}</td>
                <td className="p-1 text-sm">
                  {student.courses && Array.isArray(student.courses) ? (
                    <div className="flex space-x-2">
                      {student.courses.map((course, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 px-2 py-1 rounded-md flex items-center space-x-1"
                        >
                          {course === "CBSE 9 Math" ? (
                            <img
                              src="/boy1.png" // Replace with the actual path to your course icon
                              alt="course-icon"
                              className="w-6 h-5 rounded"
                            />
                          ) : (
                            <img
                              src="/girl.png" // Replace with the actual path to your course icon
                              alt="course-icon"
                              className="w-6 h-5 rounded"
                            />
                          )}
                          <span className="text-gray-800 text-sm font-medium">
                            {course}
                          </span>
                        </span>
                      ))}
                    </div>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="p-1 text-sm whitespace-nowrap">
                  {student.date_joined
                    ? format(new Date(student.date_joined), "dd. MMM. yyyy")
                    : "N/A"}
                </td>
                <td className="p-2 text-sm whitespace-nowrap">
                  {student.last_login
                    ? format(new Date(student.last_login), "dd. MMM. yyyy h:mm a")
                    : "N/A"}
                </td>
                <td className="p-2 text-sm">
                  <span
                    className={`block w-3 h-3 rounded-full ${
                      student.status ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;