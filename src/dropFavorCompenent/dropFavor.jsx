import { FaTrashAlt } from "react-icons/fa";
import "./dropFavor.css";
import {  FaX } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { DeletFavor, HideData } from "../redux/productSlice";

const DropFavor = ({}) => {
  const favor = useSelector(state => state.products.favor);
  const dispatch = useDispatch();
  return (
    <div className="DropFavor">
      <FaX className="DropFavor-colse" size={20} onClick={()=>dispatch(HideData())} />
      <h3>liste des favorable</h3>
      <div className="favor-items">
        {favor.length !== 0 ? (
          favor.map((it,i) => (
             <>
              <div className="card" key={it.id}>
                <img src={it.imageUrl} alt={it.name} />
                <span>{it.name}</span>
                <button onClick={()=>dispatch(DeletFavor(i))} ><FaTrashAlt  className ="delet_icon" size={24}/></button>
              </div>
             </>
          ))
        ) : (
          <p className="empty-cart">Votre liste des favorable est vide</p>
        )}
      </div>
      <hr />
    </div>
  );
};
export default DropFavor;
