
import { useDispatch } from 'react-redux';
import './card.css';
import { AddToCart,AddToFavor } from '../../redux/productSlice';
function Card({id_c,item}) {
  const dispatch = useDispatch()
  return (
    <div className="card">
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.price}$</p>
      <div className="card-button">
        <button onClick={()=>dispatch(AddToCart(item))}>Add to cart</button>
        <button onClick={()=>dispatch(AddToFavor(item))}>Add to favorite</button>
      </div>
    </div>
    
  );
}

export default Card;
