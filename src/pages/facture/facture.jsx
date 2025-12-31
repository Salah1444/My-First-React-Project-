import React from "react";
import logo from "../../logo.svg";
import "./facture.css";
import Panier from "../../panier/panier";
import { FaPrint } from "react-icons/fa";
function Facture() {
  const newOrder = JSON.parse(localStorage.getItem("Myorders")).slice(-1)[0];
  
  return (
    <div className="facture-container">
      <div className="facture">
        <div className="facture-header">
          <h1>Facture</h1>
          <div className="header-logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <hr />
        <div className="facture-body">
          {newOrder && (
            <div className="client-company-info">
              <p>
                <strong>Nom du client:</strong> {newOrder.client.fullname}
                <br />
                <strong> Email:</strong> {newOrder.client.email}
                <br />
                <strong> Téléphone:</strong> {newOrder.client.phone}
                <br />
                <strong> Adresse:</strong> {newOrder.client.adresse}
                <br />
                <p>
                  <strong>Date de la commande:</strong> {newOrder.date}
                </p>
              </p>
              <p>
                <strong>Nom du societe:</strong> E-commerce SARL
                <br />
                <strong>Adresse:</strong> 123 Rue du Commerce, 75000 Paris
                <br />
                <strong>Contact:</strong> sarl@exemple.com | +33 1 23 45 67 89
              </p>
            </div>
          )}
          <hr />
          <Panier />
          
        </div>
        <hr />
        <div className="facture-footer text-center p-1">
            <p>Merci pour votre achat !</p>
            <p>Contactez-nous pour toute question concernant cette facture.</p>
          </div>
      </div>
      <button onClick={() => window.print()} className="button-print btn btn-primary">
  <FaPrint /> Print
</button>
    </div>
  );
}
export default Facture;
