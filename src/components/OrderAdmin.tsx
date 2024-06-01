import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const OrderAdmin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/orders").then((response) => {
      console.log("response from order admin", response.data);
      setOrders(response.data);
    });
  }, []);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) =>
              Object.entries(order.products).map(
                ([productName, quantity], index) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={`${order.id}-${index}`}
                  >
                    {index === 0 && (
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        rowSpan={Object.keys(order.products).length}
                      >
                        {order.orderID}
                      </th>
                    )}
                    <td className="px-6 py-4">{productName}</td>
                    <td className="px-6 py-4">{quantity}</td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};
