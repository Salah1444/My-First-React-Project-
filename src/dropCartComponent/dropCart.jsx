import { Link } from "react-router-dom";
import "./dropCart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMinus, FaX } from "react-icons/fa6";
import { deletCartEl, HideData } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Panier from "../panier/panier";

const DropCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart) || []; // fallback []

  return (
    <div className="dropCart">
      <div className="row ">
        <div className="col-md-4 d-flex  align-items-center ">
          <FaX
            className="dropCart-colse"
            size={24}
            onClick={() => {
              dispatch(HideData());
            }}
          />
        </div>
        <div className="col-md-4  d-flex justify-content-center align-items-center">
          
          <h3 className="p-4"> Votre Panier</h3>
        </div>
        <div className="col-md-4 d-flex  justify-content-end align-items-center ">
          {cart.length ? (
            <div div className="commande-btn">
              <Link to={"/ValideOrder"} onClick={()=>dispatch(HideData())} className="btnCommande">
                Commande
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
       <Panier/> 
    </div>
  );
};
export default DropCart;
