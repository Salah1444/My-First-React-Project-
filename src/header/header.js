import "./header.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart} from "react-icons/fa";
import { Link } from "react-router-dom";
function Header({ nom, countCart, countFavor ,ShowData,ShowDataFavor}){
  return (
    <div className="header">
      <span>{nom}</span>
      <nav className="Navbar">
        <Link  className="Navbar-link"  to='/'>Home</Link>
        <Link  className="Navbar-link" to='About'>About</Link>
        <Link className="Navbar-link"  to='Produits'>Products</Link>
        <Link className="Navbar-link"  to='Contact'>Contact</Link>
      </nav>
      
      
      <div className="favor-panier">
        <div className="favorite" onClick={ShowDataFavor}>
          <div className="circle">{countFavor}</div>
          <FaHeart className="icon-favorite"  />
        </div>
        <span className="panier" onClick={ShowData}>
          <div className="circle">{countCart}</div>
          <FaShoppingCart className="icon-cart" />
        </span>
      </div>
    </div>
  );
}
export default Header;
