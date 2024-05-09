import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <h1>after</h1>
    </>
  );
};

export { Layout };
