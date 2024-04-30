import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>before</h1>
      <Outlet />
      <h1>after</h1>
    </>
  );
};

export { Layout };
