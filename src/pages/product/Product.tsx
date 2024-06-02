import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export function Product() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState("price");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleCLick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    const productElement = target.closest(".product");
    if (productElement) {
      const productId = productElement.getAttribute("data-id");
      navigate("/categorie/" + id + "/products/" + productId);
    }
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:8083/category/${id}/products?page=${page}&size=10&sortBy=${sort}&search=${name}`
      )
      .then((res) => {
        setProducts(res.data);
      });
  }, [sort, name, page]);

  return (
    <div className="bg-white">
      <Outlet />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Products
        </h2>

        <div className="mb-4 mt-4">
          <div className="flex flex-row gap-2">
            <div>
              <select
                value={sort}
                className=" w-40 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>

            <div>
              <input
                value={name}
                type="text"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                placeholder="Enter product name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <button className="px-4 py-2 mt-2 text-white bg-gray-800 rounded-md">
              Search
            </button>
          </div>
        </div>

        <div
          className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          onClick={handleCLick}
        >
          {products?.content?.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group product"
              data-id={product.id}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.image}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between mt-8 sm:flex-row">
          <span className="text-sm ">
            Page <span className="font-semibold ">{page + 1}</span> of{" "}
            <span className="font-semibold">{products?.totalPages}</span>
          </span>
          <div className="inline-flex">
            <button
              onClick={() => {
                if (page > 0) {
                  setPage(page - 1);
                }
              }}
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Prev
            </button>
            <button
              onClick={() => {
                if (page < products?.totalPages - 1) {
                  setPage(page + 1);
                }
              }}
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
