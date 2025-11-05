
import './card.css';

function Card({id_c,item,AddToCart,AddToFavor}) {
  return (
    <div className="card">
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.price}$</p>
      <div className="card-button">
        <button onClick={()=>AddToCart(item,id_c)}>Add to cart</button>
        <button onClick={()=>AddToFavor(item)}>Add to favorite</button>
      </div>
    </div>
    
  );
}

export default Card;
