import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layouts";
import { Home } from "./home";
import { Login } from "./login";
import { Resgister } from "./register";
import { Shop } from "./shop";
import { AboutUs } from "./about-us";
import { ContactUs } from "./contact-us";
import { Profile } from "./profile";
import { OrderHistory } from "./order-history";
import { Cart } from "./cart";
import { Wishlist } from "./wishlist";
import { Categories } from "./categories";
import { Product, ProductItem } from "./product";
import { NotFound } from "./error";
import { Dashboard } from "./dashboard";
import { Order } from "../components/Order";
import { ProductAdmin } from "../components/ProductAdmin";
import { UserAdmin } from "../components/UserAdmin";
import { CategorieAdmin } from "../components/CategorieAdmin";
import { BrandAdmin } from "../components/BrandAdmin";
import { AddCategorie } from "../components/AddCategorie";
import { AddBrand } from "../components/AddBrand";
import { AddProduct } from "../components/AddProduct";
import { Unauthorized } from "./unauthorized";
import { RequireAuth } from "../components";
import { EditProduct } from "../components/EditProduct";
import { DeleteProduct } from "../components/DeleteProduct";
import { UserSetting } from "../components/UserSetting";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Resgister />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route path="/shop" element={<Shop />} />
          <Route path="/categorie" element={<Categories />} />
          <Route path="/categorie/:id/products" element={<Product />}>
            <Route path=":productid" element={<ProductItem />} />
          </Route>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* private routes */}
          <Route path="/profile" element={<Profile />}>
            <Route path="order-history" element={<Order />} />
            <Route path="settings" element={<UserSetting />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route path="order" element={<Order />} />
            <Route path="product" element={<ProductAdmin />}>
              <Route path="add" element={<AddProduct />} />
              <Route path="edit/:id" element={<EditProduct />} />
              <Route path="delete/:id" element={<DeleteProduct />} />
            </Route>
            <Route path="user" element={<UserAdmin />} />
            <Route path="categorie" element={<CategorieAdmin />}>
              <Route path="add" element={<AddCategorie />} />
            </Route>
            <Route path="brand" element={<BrandAdmin />}>
              <Route path="add" element={<AddBrand />} />
            </Route>
          </Route>

          {/* not found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
