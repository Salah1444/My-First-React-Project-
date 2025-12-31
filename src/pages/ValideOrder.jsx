import { useState } from "react";
import { FaCheckCircle, FaGoodreads } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ValideOrder({ setOrders, orders }) {
  const cart = useSelector((state) => state.products.cart);
  const favor = useSelector(state => state.products.favor);

  const [clients, setClients] = useState({
    fullname: "",
    email: "",
    phone: "",
    adresse: "",
    paiement: "carte",
  });
  const [valide, setValide] = useState(false);
  const Onchange = (e) => {
    const { name, value } = e.target;
    setClients({ ...clients, [name]: value });
  };

  const ValidFormulaire = ()=>{
    if(clients.fullname && clients.email && clients.phone && clients.adresse){
      return true
    }else{
      return false
    }
  }

  const SubmitHandler = (e) => {
    
    e.preventDefault();
    if(!ValidFormulaire()){
      alert("Veuillez remplir tous les champs du formulaire.");
      return;
    }
    const newOrder = {
      client: clients,
      produits: cart,
      favorite : favor,
      date: new Date().toLocaleString(),
    };
    setOrders([...orders, newOrder]);
    setClients({
      fullname: "",
      email: "",  
      phone: "",
      adresse: "",
      paiement: "carte",
    });
    setValide(true);
  };
  console.log(orders);
  return (
    <div className="valide-Order">
      
      <form className="order-form" onSubmit={(e) => SubmitHandler(e)}>
        <h2>Valider la commande</h2>

        <div className="form-group">
          <label>Nom complet</label>
          <input
            type="text"
            name="fullname"
            placeholder="Entrez votre nom"
            value={clients.fullname}
            onChange={Onchange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Entrez votre email"
            value={clients.email}
            onChange={Onchange}
          />
        </div>

        <div className="form-group">
          <label>Téléphone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Ex: 06 12 34 56 78"
            value={clients.phone}
            onChange={Onchange}
          />
        </div>

        <div className="form-group">
          <label>Adresse</label>
          <input
            type="text"
            name="adresse"
            placeholder="Votre adresse"
            value={clients.adresse}
            onChange={Onchange}
          />
        </div>

        <div className="form-group">
          <label>Moyen de paiement</label>
          <select name="paiement" value={clients.paiement} onChange={Onchange}>
            <option value="carte">Carte bancaire</option>
            <option value="livraison">Paiement à la livraison</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Confirmer la commande
        </button>
      </form>
      {valide ? <div className="confirmation-message">
        <span><FaCheckCircle color="green" /></span>
        <p>Votre commande a été enregistrée avec succès.</p>
        <Link  to={'/facture'}>afficher la facture</Link>
        </div> : ""}
    </div>
  );
}

export default ValideOrder;
