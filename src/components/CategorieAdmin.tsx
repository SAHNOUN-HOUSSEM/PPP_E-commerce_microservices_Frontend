import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const CategorieAdmin = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8083/category").then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="relative overflow-x-auto sm:rounded-lg bg-white flex justify-end">
          <Link
            to="add"
            className="bg-gray-800 text-white px-4 py-2 rounded-md mt-4 mb-4 hover:bg-gray-700"
          >
            Add New categorie
          </Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Categorie Name
                </th>

                <th scope="col" className="px-6 py-3">
                  Description
                </th>

                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((categorie) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={categorie.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {categorie.name}
                  </th>
                  <td className="px-6 py-4">{categorie.description}</td>
                  <td className="px-6 py-4">
                    {/* {product.quantity} */}
                    <img
                      src={categorie.image}
                      alt={categorie.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  {/* <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">{product.brand.name}</td> */}
                  <td className="flex items-center px-6 py-4">
                    <Link
                      to={`${categorie.id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </Link>
                    <button className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
