import React from "react";
import "./panier.css";
import { useDispatch, useSelector } from "react-redux";
import { deletCartEl } from "../redux/productSlice";
import { FaMinus } from "react-icons/fa6";
function Panier() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart) || []; // fallback []
  const total = useSelector((state) => state.products.total) || 0;
  const TVA = useSelector((state) => state.products.TVA) || 0;
  const Final = useSelector((state) => state.products.totalFinal) || 0;
  return (
    <div className="pan">
      <table className="table table-bordred table-striped text-center">
        <thead>
          <tr className="w-100">
            <th className="p-4">Image</th>
            <th className="p-4">Nom</th>
            <th className="p-4">Prix</th>
            <th className="p-4">Quantité</th>
            <th className="p-4">TotalUnitaire</th>
            <th className="p-4">Supprimer</th>
          </tr>
        </thead>

        <tbody className="table-body w-100">
          {cart.length ? (
            cart.map((it, i) => (
              <tr key={it.id}>
                <td>
                  <img width={50} height={50} src={it.imageUrl} alt={it.name} />
                </td>
                <td>{it.name}</td>
                <td>{it.price} $</td>
                <td>{it.quantite}</td>
                <td>{it.totalUnitaire}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deletCartEl(it.id))}
                  >
                    <FaMinus size={20} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <span className="alert alert-danger w-100 h2  m-2">
              Votre panier est vide
            </span>
          )}
        </tbody>
      </table>
      <hr />
      <div className="row ">
        <div className="col-6"></div>
        <div className="col-7">
          <p className="Total">
            <span className="fw-bold me-5 pe-5">sous-Total : </span>
            <span className="fw-bold mx-5 px-3">{total}$</span>
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col-6"></div>
        <div className="col-7">
          <p>
            <span className="fw-bold me-5 pe-5">TVA (20%) : </span>
            <span className="fw-bold mx-5 px-3">{TVA}$</span>
          </p>
        </div>
      </div>
      <div className="row bg-dark m-1 text-white">
        <div className="col-md-6 ">
        </div>
        <div className="col-md-6 ">
          
          <span className="fw-bold h2  me-5 pe-4">TOTAL :</span>
          <span className="fw-bold h3 mx-5 px-3">{Final}$</span>
        </div>
      </div>
    </div>
  );
}

export default Panier;
