import "./big_card.css";
import Card from "./card/card";
import "../header/header.css";

function BIG_CARD({ id, title, routeName, items, AddToCart, AddToFavor }) {
  return (
    <div className="big-card">
      <h2>{title}</h2>
      

      <div className="big-card-items">
        {items.map((item) => (
          <Card
            id_c={id}
            item={item}
            AddToCart={AddToCart}
            AddToFavor={AddToFavor}
          />
        ))}
      </div>
    </div>
  );
}

export default BIG_CARD;
