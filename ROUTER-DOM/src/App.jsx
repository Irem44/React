import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import Employee from "./pages/Employee";
import Company from "./pages/Company";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products-details/:id" element={<ProductDetails />} />

        <Route path="/about" element={<About />}>
          <Route path="employee" element={<Employee />} />
          <Route path="company" element={<Company />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
