import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { Footer } from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export { Layout };
