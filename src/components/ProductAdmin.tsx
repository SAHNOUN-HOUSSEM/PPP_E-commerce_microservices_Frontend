import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const ProductAdmin = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8083/product?page=${page}&size=10`)
      .then((response) => {
        setProducts(response.data);
      });
  }, [page]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-800 dark:bg-gray-800">
      <div className="relative overflow-x-auto sm:rounded-lg bg-white flex justify-end dark:bg-gray-800">
        <Link
          to="add"
          className="bg-gray-800 text-white px-4 py-2 rounded-md mt-4 mb-4 hover:bg-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white border-gray-500 border-2 mr-4"
        >
          Add New Product
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>

              <th scope="col" className="px-6 py-3">
                Category
              </th>

              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          {products?.content?.length === 0 && (
            <div className="flex items-center justify-center h-32">
              <h1 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">
                No products found
              </h1>
            </div>
          )}

          {products?.content?.length > 0 && (
            <tbody>
              {products?.content?.map((product) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={product.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </th>
                  <td className="px-6 py-4">{product.category.name}</td>
                  <td className="px-6 py-4">{product.quantity}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4">{product.brand.name}</td>
                  <td className="flex items-center px-6 py-4">
                    <Link
                      to={`edit/${product.id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`delete/${product.id}`}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >
                      Remove
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      {products?.content?.length > 0 && (
        <div className="flex flex-row items-center justify-between mt-4">
          <span className="text-sm text-gray-400 ml-2">
            Page{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {page + 1}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {products?.totalPages}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {products?.totalElements}
            </span>{" "}
            Products
          </span>
          <div className="inline-flex mt-2 xs:mt-0 mb-2 border-gray-500 border-2 rounded-md mr-4">
            <button
              className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              onClick={() => {
                if (page > 0) setPage((prev) => prev - 1);
              }}
              disabled={page === 0}
            >
              Prev
            </button>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white `}
              disabled={page === products?.totalPages - 1}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <Outlet />
    </div>
  );
};
