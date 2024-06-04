import axios from "axios";
import { useEffect, useState } from "react";

export const UserAdmin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8083/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-800 dark:bg-gray-800">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  UserName{" "}
                </th>

                <th scope="col" className="px-6 py-3">
                  Email
                </th>

                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>

                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
              </tr>
            </thead>

            {users?.length === 0 && (
              <div className="flex items-center justify-center h-32">
                <h1 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">
                  No categories found
                </h1>
              </div>
            )}
            {users?.length > 0 && (
              <tbody>
                {users.map((user) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={user.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.username}
                    </th>
                    <td className="px-6 py-4">{user.email}</td>

                    <td className="px-6 py-4">{user.role}</td>

                    <td className="px-6 py-4">{user.firstName}</td>
                    <td className="px-6 py-4">{user.lastName}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};
