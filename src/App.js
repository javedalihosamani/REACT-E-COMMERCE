import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
