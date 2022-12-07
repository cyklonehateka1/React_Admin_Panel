import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Coupons from "./pages/Coupons";
import Messages from "./pages/Messages";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
