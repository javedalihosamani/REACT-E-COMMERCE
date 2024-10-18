import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Home,
  About,
  Contact,
  Products,
  Product,
  PageNotFound,
  Register,
  Login,
  Cart,
  Checkout,
} from "./pages";
import { ToastContainer } from "react-toastify";
import SecureRoute from "./privateRoute/SecureRoute";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} position={"top-right"} />
      <Routes>
        <Route element={<SecureRoute/>}>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
