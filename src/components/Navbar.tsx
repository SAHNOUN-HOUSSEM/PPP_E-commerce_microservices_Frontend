import { Fragment, useContext } from "react";
import { Button, Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext, CartContext } from "../context";
import { Shop } from "../pages/shop";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Categorie", href: "categorie", current: false },
  { name: "About Us", href: "about-us", current: false },
  { name: "Contact Us", href: "contact-us", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const { cart, setOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setAuth({ role: "", token: "", username: "" });
    navigate("/");
  };

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800 w-full fixed z-10">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="	https://media.canva.com/v2/image-resize/format:PNG/height:150/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2Fem7nU%2FMAGHE9em7nU%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAOgby5JXTk1kc022K4kvT7pl4BSeRbx_FMCADSGgE91A&exp=1717461882&osig=AAAAAAAAAAAAAAAAAAAAAMP0wULd4WffkEzUDPVf9xCC2Xknss07OgzoWTv-c5M6&signer=media-rpc&x-canva-quality=thumbnail"
                      alt="logo"
                      className="h-14 w-14"
                    />
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            to={item.href}
                            key={item.name}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                        {auth?.role === "ADMIN" && (
                          <Link
                            to={"/admin"}
                            key={"Admin"}
                            className={classNames(
                              "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                          >
                            Dashboard
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative ml-3 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mr-2"
                        onClick={() => setOpen(true)}
                      >
                        <span className="absolute top-0 right-4 inline-block px-2 py-1 text-xs font-semibold leading-none bg-red-500 text-white rounded-full ml-16">
                          {cart?.length}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                      </button>
                      {/* Here the button to login  */}

                      {/* <Link
                        to="/login"
                        className="relative rounded bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mr-2 "
                      >
                        <span>Login</span>
                      </Link> */}

                      {/* here the notification and the badge of the admin if exist */}

                      {/* notification button  */}
                      {/* <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button> */}

                      {/* Profile dropdown */}
                      {auth?.username ? (
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src={user.imageUrl}
                                alt=""
                              />
                              {auth?.role === "ADMIN" && (
                                <span className="inline-flex items-center rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 ml-2">
                                  Admin
                                </span>
                              )}
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item key={"Your Profile"}>
                                <NavLink
                                  to={"/profile"}
                                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                >
                                  {"Your Profile"}
                                </NavLink>
                              </Menu.Item>
                              <Menu.Item key={"Settings"}>
                                <NavLink
                                  to={"/profile/settings"}
                                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                >
                                  {"Settings"}
                                </NavLink>
                              </Menu.Item>
                              <Menu.Item key={"Sign out"}>
                                <Button
                                  style={{ width: "100%", textAlign: "left" }}
                                  onClick={handleSignOut}
                                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                >
                                  {"Sign out"}
                                </Button>
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      ) : (
                        <Link
                          to="/login"
                          className="relative rounded bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 mr-2 "
                        >
                          <span>Login</span>
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  <Button>
                    <Link to={"/admin"} key={"Admin"}>
                      Dashboard
                    </Link>
                  </Button>
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      onClick={() => setOpen(true)}
                    >
                      <span className="absolute top-0 right-4 inline-block px-2 py-1 text-xs font-semibold leading-none bg-red-500 text-white rounded-full ml-16">
                        {cart?.length}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    <Button
                      key={"Your Profile"}
                      as="a"
                      href={"/profile"}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {"Your Profile"}
                    </Button>
                    <Button
                      key={"Settings"}
                      as="a"
                      href={"/profile"}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {"Settings"}
                    </Button>
                    <Button
                      key={"Sign out"}
                      onClick={handleSignOut}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {"Sign out"}
                    </Button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Shop />
      </div>
    </>
  );
}
