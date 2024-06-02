import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Fragment, useState } from "react";
import { Controller, set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export const AddCategorie = () => {
  const [open, setOpen] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate("/admin/categorie");
  };

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
    image: yup.mixed(), //.required("Image is required"),
  });

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    if (file) {
      formData.append("image", file);
    }
    try {
      axios.post("http://localhost:8083/category", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      handleClose();
    } catch (err) {
      console.error("Error submitting form", err);
    } finally {
      setIsLoading(false);
    }
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
                  <form
                    className="flex flex-col w-full space-y-4"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <h1 className="text-2xl font-bold text-gray-800">
                      Add Categorie
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
                        render={({ field, fieldState }) => (
                          <div>
                            <input
                              {...field}
                              id="name"
                              type="text"
                              placeholder="Name"
                              className="w-full p-2 border border-gray-300 rounded-md"
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
                        render={({ field, fieldState }) => (
                          <div>
                            <textarea
                              {...field}
                              id="description"
                              name="description"
                              placeholder="Description"
                              className="w-full p-2 border border-gray-300 rounded-md"
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
                        htmlFor="image"
                        className="text-sm font-semibold text-gray-800"
                      >
                        Image
                      </label>
                      <Controller
                        name="image"
                        control={control}
                        render={({ field, fieldState }) => (
                          <div>
                            <input
                              {...field}
                              id="image"
                              type="file"
                              placeholder="Image"
                              className="w-full p-2 border border-gray-300 rounded-md"
                              onChange={handleFileChange}
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
                      <button
                        type="submit"
                        className="w-full p-2 text-white 
                        bg-gray-800
                        rounded-md"
                        disabled={isLoading}
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
