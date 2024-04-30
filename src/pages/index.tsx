import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Missing } from "./Missing";
import { Layout } from "../layouts";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}

          {/* <Route path="/" element={<Home />} /> */}

          {/* not found */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
