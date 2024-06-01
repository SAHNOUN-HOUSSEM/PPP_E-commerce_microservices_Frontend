import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useContext, useEffect, useState } from "react";
import { CartContext } from "../../context";
import axios from "axios";

export function Shop() {
  //   const [open, setOpen] = useState(false);
  const { open, setOpen, clearCart, removeFromCart } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCopie, setCartItemCopie] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    axios.post("http://localhost:8083/product/lists", cart).then((res) => {
      setCartItems(res.data);
      setCartItemCopie(res.data);
      let total = 0;
      res.data.forEach((item) => {
        total += item.price;
      });
      setTotalPrice(total);
      setQuantity(
        res.data.reduce((acc, item) => {
          acc[item.id] = 1;
          return acc;
        }, {})
      );
    });
  }, [open]);

  const handleChangePrice = (value, id) => {
    let total = 0;
    setCartItems(
      cartItems.map((item, index) => {
        total += item.price;
        if (item.id === id) {
          total -= item.price;
          total += value * cartItemCopie[index].price;
          return { ...item, price: value * cartItemCopie[index].price };
        }
        return item;
      })
    );
    setQuantity({ ...quantity, [id]: value });
    setTotalPrice(total);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("quatity", quantity);
    //post to order serice with quantity

    const orderItemsList = Object.entries(quantity).map(([id, qty]) => ({
      id: parseInt(id, 10),
      quantity: qty,
    }));

    const orderRequest = { orderItemsList };
    console.log("orderRequest", orderRequest);

    try {
      const response = await axios.post(
        "http://localhost:8083/orders",
        orderRequest,
        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjU1Miwic3ViIjoieHl6dCIsImlhdCI6MTcxNzI2MDU5MywiZXhwIjoxNzE3Mjc0OTkzfQ._UznCy2do-issY_GO1_CtTxIvAVGM8qb9qoYeh7DOaM",
          },
        }
      );
      console.log("response for orders", response);
    } catch (error) {
      console.log("error: ", error);
    }

    setOpen(false);
    clearCart();
    setCartItems([]);
    setTotalPrice(0);
    setQuantity({});
    setCartItemCopie([]);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className="relative z-10" onClose={() => setOpen(false)}>
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
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <form
                    className="flex flex-col w-full items-center justify-center overflow-y-auto "
                    onSubmit={handleSubmit}
                  >
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-7">
                      Cart
                    </h2>
                    {cartItems.length === 0 && (
                      <div className="flex flex-col w-full items-center justify-center">
                        <p className="text-lg font-semibold text-gray-500">
                          Your cart is empty
                        </p>
                      </div>
                    )}
                    {cartItems &&
                      cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-row w-full items-center justify-center border-gray-300 border rounded-lg pr-2 pl-2 h-24 mb-4"
                        >
                          <img
                            src={item.image}
                            alt="Product"
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div className="flex flex-col w-full items-center justify-center">
                            <p className="text-lg font-semibold text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-lg font-semibold text-gray-500">
                              {item.price} DT
                            </p>
                          </div>
                          <input
                            type="number"
                            className="w-24 h-12 border-gray-300 border rounded-lg "
                            min={1}
                            max={item.quantity}
                            // defaultValue={1}
                            value={quantity[item.id] || 1}
                            onChange={(e) =>
                              handleChangePrice(e.target.value, item.id)
                            }
                          />

                          <button
                            className="text-white h-6 w-6 rounded-full bg-red-500 ml-2"
                            onClick={() => {
                              setCartItems(
                                cartItems.filter((i) => i.id !== item.id)
                              );
                              setTotalPrice(totalPrice - item.price);
                              setQuantity((prev) => {
                                delete prev[item.id];
                                return prev;
                              });
                              removeFromCart(item.id.toString());
                            }}
                          >
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      ))}

                    {cartItems.length > 0 && (
                      <>
                        <p className="text-lg font-semibold text-gray-500 mb-4">
                          Total Price: {totalPrice} DT
                        </p>
                        <button
                          type="submit"
                          className="w-full h-12 bg-gray-800 text-white rounded-lg"
                        >
                          Purchase
                        </button>
                      </>
                    )}
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
