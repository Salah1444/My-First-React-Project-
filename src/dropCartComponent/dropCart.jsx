import "./dropCart.css";
import { FaX } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
const DropCart = ({ cart, hideData, calculTotal,deletCartEl }) => {
  return (
    <div className="dropCart">
      <FaX className="dropCart-colse" size={20} onClick={hideData} />
      <h3> Votre Panier</h3>
      <div className="cart-items">
        {cart.length !== 0 ? (
          cart.map((it,i) => (
                         <>
                          <div className="card" key={it.id}>
                            <img src={it.imageUrl} alt={it.name} />
                            <span>{it.name}</span>
                            <span>{it.price}</span>
                            <button onClick={()=>deletCartEl(i)} ><FaTrashAlt  className ="delet_favor_icon"  size={24}/></button>
                          </div>
                         </>
        ))) : (
          <p className="empty-cart">Votre panier est vide</p>
        )}
      </div>
        <hr />
        <p className="Total">
          <span>Total:</span>
          <span>{calculTotal()}$</span>
        </p>
      
    </div>
  );
};
export default DropCart;
