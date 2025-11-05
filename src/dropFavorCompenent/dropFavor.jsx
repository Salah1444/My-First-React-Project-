import { FaTrashAlt } from "react-icons/fa";
import "./dropFavor.css";
import {  FaX } from "react-icons/fa6";

const DropFavor = ({ favor, hideData,DeletFavor }) => {

  return (
    <div className="DropFavor">
      <FaX className="DropFavor-colse" size={20} onClick={hideData} />
      <h3>liste des favorable</h3>
      <div className="favor-items">
        {favor.length !== 0 ? (
          favor.map((it,i) => (
             <>
              <div className="card" key={it.id}>
                <img src={it.imageUrl} alt={it.name} />
                <span>{it.name}</span>
                <button onClick={(()=>DeletFavor(i))} ><FaTrashAlt  className ="delet_icon" size={24}/></button>
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
