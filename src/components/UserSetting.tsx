import { useState } from "react";

export const UserSetting = () => {
  const [change, setChange] = useState(false);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800">User Setting</h1>
      <div className="mt-4">
        <h1 className="text-sx font-semibold text-gray-800">
          General Information
        </h1>
        <form className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="enter email address"
            />
          </div>

          <div>
            <label className="text-gray-700" htmlFor="password">
              first name
            </label>
            <input
              type="text"
              id="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="enter first name"
            />
          </div>
          <div>
            <label className="text-gray-700" htmlFor="password">
              last name
            </label>
            <input
              type="text"
              id="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="enter last name"
            />
          </div>
          <div>
            {!change && (
              <button
                className="block px-4 py-2 mt-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-400"
                onClick={(e) => {
                  e.preventDefault();
                  setChange(true);
                }}
              >
                Change
              </button>
            )}
            {change && (
              <button className="block px-4 py-2 mt-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-400">
                Save
              </button>
            )}
          </div>
        </form>

        <hr className="my-8" />

        <h1 className="text-sx font-semibold text-gray-800 mt-4">
          Change Password
        </h1>
        <form className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
          <div>
            <label className="text-gray-700" htmlFor="current-password">
              Current Password
            </label>
            <input
              type="password"
              id="current-password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="enter current password"
            />
          </div>
          <div>
            <label className="text-gray-700" htmlFor="new-password">
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="enter new password"
            />
          </div>
          <div>
            <label className="text-gray-700" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="confirm new password"
            />
          </div>
          <div>
            <button className="block px-4 py-2  text-lg text-white bg-blue-500 rounded-md hover:bg-blue-400">
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
