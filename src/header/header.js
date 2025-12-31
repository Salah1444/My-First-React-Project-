import "./header.css";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ShowData, ShowDataFavor } from "../redux/productSlice";
import logo from "../logo.svg"
function Header({ nom, countCart, countFavor }) {
  const dispatch = useDispatch();
  return (
    <header className="header">
      <span><img src={logo}/></span>
      <nav className="Navbar">
        <Link className="Navbar-link" to="/">Home</Link>
        <Link className="Navbar-link" to="About">About</Link>
        <Link className="Navbar-link" to="Produits">Products</Link>
        <Link className="Navbar-link" to="Contact">Contact</Link>
      </nav>

      <div className="favor-panier">
        <div className="favorite" onClick={() => dispatch(ShowDataFavor())}>
          <div className="circle">{countFavor}</div>
          <FaHeart className="icon-favorite" />
        </div>
        <span className="panier" onClick={() => dispatch(ShowData())}>
          <div className="circle">{countCart}</div>
          <FaShoppingCart className="icon-cart" />
        </span>
      </div>
    </header>
  );
}

export default Header;
