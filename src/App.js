import "./App.css";
import { useState } from "react";
import Header from "./header/header";
import DropCart from "./dropCartComponent/dropCart";
import DropFavor from "./dropFavorCompenent/dropFavor";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Routes,Route } from "react-router-dom";
import Produits from "./pages/Produits";
function App() {
  const [cart, SetCart] = useState([]);
  const [Total, setTotal] = useState(0);
  const [id_c, SetId] = useState(0);
  const AddToCart = (item, id) => {
    cart.push(item);
    console.log(id);
    SetId(id);
    SetCart([...cart]);
  };
  const [favor, SetFavor] = useState([]);
  const AddToFavor = (item) => {
    favor.push(item);
    SetFavor([...favor]);
  };
 
  

  const [dropFavor, SetDropFavor] = useState(false);
  const [dropCart, SetDropCart] = useState(false);
  // Show Panier Array
  const ShowData = () => {
    SetDropCart(!dropCart);
    SetDropFavor(false);
  };
  // Show Favorite array
  const ShowDataFavor = () => {
    SetDropFavor(!dropFavor);
    SetDropCart(false);
  };
  // hide Data panier and favorite
  const HideData = () => {
    SetDropCart(false);
    SetDropFavor(false);
  };
  // Adjust body width when dropCart is shown
  if (dropCart || dropFavor) {
    document.body.style.width = "calc(100% - 304px)";
  } else {
    document.body.style.width = "100%";
  }
  // Calule total de panier
  const calculTotal = () => {
    let sum = 0;
    cart.map((et) => (sum = sum + et.price));
    setTotal(sum);
    return Total;
  };
  // Delete favor item
  const DeletFavor = (card) => {
    let id_favor = card;
    console.log(id_favor);
    favor.splice(id_favor, 1);
    SetFavor([...favor]);
  };
  // delete cart item
  const deletCartEl = (card) => {
    cart.splice(card, 1);
    SetCart([...cart]);
  };

  
  return (
    <div className="App">
      <div className="App-content">
        <Header
          nom="E-Commérce"
          countCart={cart.length}
          countFavor={favor.length}
          ShowData={ShowData}
          ShowDataFavor={ShowDataFavor}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Produits" element={<Produits AddToCart={AddToCart} AddToFavor={AddToFavor} />}/>
        </Routes>
        {dropCart ? (
          <DropCart
            cart={cart}
            hideData={HideData}
            calculTotal={calculTotal}
            deletCartEl={deletCartEl}
          />
        ) : (
          ""
        )}
        {dropFavor ? (
          <DropFavor
            id={id_c}
            favor={favor}
            hideData={HideData}
            ShowDataFavor={ShowDataFavor}
            DeletFavor={DeletFavor}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
