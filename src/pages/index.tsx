import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Missing } from "./Missing";
import { Layout } from "../layouts";
import { Home } from "./home";
import { Login } from "./login";
import { Resgister } from "./register";
import { Shop } from "./shop";
// import { Product } from "./product";
import { AboutUs } from "./about-us";
import { ContactUs } from "./contact-us";
import { Profile } from "./profile";
import { OrderHistory } from "./order-history";
import { Cart } from "./cart";
import { Wishlist } from "./wishlist";
import { Categories } from "./categories";
import { Product, ProductItem } from "./product";
import { NotFound } from "./error";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Resgister />} />

          <Route path="/shop" element={<Shop />} />
          <Route path="/categorie" element={<Categories />} />
          <Route path="/categorie/:id/products" element={<Product />}>
            <Route path=":productid" element={<ProductItem />} />
          </Route>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* private routes */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/order-history" element={<OrderHistory />} />

          {/* not found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
