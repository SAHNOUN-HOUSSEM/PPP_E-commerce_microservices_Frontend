import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";

export const EditProduct = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const { id } = useParams();

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
    price: yup.number().required("Price is required"),
    quantity: yup.number().required("Quantity is required"),
    category: yup.string().required("Category is required"),
    brand: yup.string().required("Brand is required"),
  });

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onBlur",
  });

  useEffect(() => {
    axios.get("http://localhost:8083/category").then((response) => {
      setCategories(response.data);
    });
    axios.get("http://localhost:8083/brand").then((response) => {
      setBrands(response.data);
    });
    axios.get("http://localhost:8083/product/" + id).then((response) => {
      setProduct(response.data);
    });
  }, []);

  const handleClose = () => {
    setOpen(false);
    navigate("/admin/product");
  };

  const onSubmit = (data) => {
    const dataToSend = {
      ...data,
      category: {
        id: data.category,
      },
      brand: {
        id: data.brand,
      },
    };

    axios
      .put("http://localhost:8083/product/" + id, dataToSend, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        handleClose();
      });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className="relative z-10" onClose={handleClose}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded-2xl">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={handleClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  {product && (
                    <form
                      className="flex flex-col w-full space-y-4"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <h1 className="text-2xl font-bold text-gray-800">
                        Edit Product
                      </h1>
                      <div className="flex flex-col space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-semibold text-gray-800"
                        >
                          Name
                        </label>

                        <Controller
                          name="name"
                          control={control}
                          defaultValue={product?.name || ""}
                          render={({ field, fieldState }) => (
                            <div>
                              <input
                                {...field}
                                id="name"
                                type="text"
                                placeholder="Name"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required={true}
                              />
                              {fieldState.error && (
                                <p className="text-red-500 text-sm">
                                  {fieldState.error.message}
                                </p>
                              )}
                            </div>
                          )}
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label
                          htmlFor="description"
                          className="text-sm font-semibold text-gray-800"
                        >
                          Description
                        </label>

                        <Controller
                          name="description"
                          control={control}
                          defaultValue={product?.description || ""}
                          render={({ field, fieldState }) => (
                            <div>
                              <textarea
                                {...field}
                                id="description"
                                name="description"
                                placeholder="Description"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required={true}
                                // value={product?.description}
                              />
                              {fieldState.error && (
                                <p className="text-red-500 text-sm">
                                  {fieldState.error.message}
                                </p>
                              )}
                            </div>
                          )}
                        />
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label
                          htmlFor="price"
                          className="text-sm font-semibold text-gray-800"
                        >
                          Price
                        </label>

                        <Controller
                          name="price"
                          control={control}
                          defaultValue={product?.price || ""}
                          render={({ field, fieldState }) => (
                            <div>
                              <input
                                {...field}
                                id="price"
                                type="number"
                                placeholder="Price"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required={true}
                                //   value={product?.price}
                              />
                              {fieldState.error && (
                                <p className="text-red-500 text-sm">
                                  {fieldState.error.message}
                                </p>
                              )}
                            </div>
                          )}
                        />
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label
                          htmlFor="stock"
                          className="text-sm font-semibold text-gray-800"
                        >
                          Quantity
                        </label>

                        <Controller
                          name="quantity"
                          control={control}
                          defaultValue={product?.quantity || ""}
                          render={({ field, fieldState }) => (
                            <div>
                              <input
                                {...field}
                                id="quantity"
                                type="number"
                                placeholder="quantity"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required={true}
                                //   value={product?.quantity}
                              />
                              {fieldState.error && (
                                <p className="text-red-500 text-sm">
                                  {fieldState.error.message}
                                </p>
                              )}
                            </div>
                          )}
                        />
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label
                          htmlFor="category"
                          className="text-sm font-semibold text-gray-800"
                        >
                          Category
                        </label>
                        <Controller
                          name="category"
                          control={control}
                          defaultValue={product?.category?.id || ""}
                          render={({ field, fieldState }) => (
                            <div>
                              <select
                                {...field}
                                id="category"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required={true}
                                // value={product?.category?.name}
                              >
                                {categories.map((category) => (
                                  <option key={category.id} value={category.id}>
                                    {category.name}
                                  </option>
                                ))}
                              </select>
                              {fieldState.error && (
                                <p className="text-red-500 text-sm">
                                  {fieldState.error.message}
                                </p>
                              )}
                            </div>
                          )}
                        />
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label
                          htmlFor="brand"
                          className="text-sm font-semibold text-gray-800"
                        >
                          Brand
                        </label>
                        <Controller
                          name="brand"
                          control={control}
                          defaultValue={product?.brand?.id || ""}
                          render={({ field, fieldState }) => (
                            <div>
                              <select
                                {...field}
                                id="brand"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required={true}
                                // value={product?.brand?.id || ""}
                              >
                                {brands?.content?.map((brand) => (
                                  <option key={brand.id} value={brand.id}>
                                    {brand.name}
                                  </option>
                                ))}
                              </select>
                              {fieldState.error && (
                                <p className="text-red-500 text-sm">
                                  {fieldState.error.message}
                                </p>
                              )}
                            </div>
                          )}
                        />
                      </div>

                      <div className="flex flex-col space-y-2">
                        <button
                          type="submit"
                          className="w-full p-2 text-white 
                    bg-gray-800
                    rounded-md"
                        >
                          Add
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
