import "./App.css";
import { useEffect, useState } from "react";
import Header from "./header/header";
import DropCart from "./dropCartComponent/dropCart";
import DropFavor from "./dropFavorCompenent/dropFavor";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Produits from "./pages/Produits";
import ValideOrder from "./pages/ValideOrder";
import { useSelector } from "react-redux";
import Facture from "./pages/facture/facture";

function App() {
  const cart = useSelector((state) => state.products.cart) || [];
  const favor = useSelector((state) => state.products.favor) || [];
  const dropFavor = useSelector((state) => state.products.dropFavor);

  const dropCart = useSelector((state) => state.products.dropCart);

  // stock orders

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("Myorders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });
  useEffect(() => {
    localStorage.setItem("Myorders", JSON.stringify(orders));
  }, [orders]);
  return (
    <div className="App">
      <div className="App-content">
        <Header
          nom="E-Commérce"
          countCart={cart.length}
          countFavor={favor.length}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/facture" element={<Facture />} />
          <Route
            path="/ValideOrder"
            element={<ValideOrder orders={orders} setOrders={setOrders} />}
          />

          <Route path="/Produits" element={<Produits />} />
        </Routes>
        {dropCart ? <DropCart /> : ""}
        {dropFavor ? <DropFavor /> : ""}
      </div>
    </div>
  );
}

export default App;
