import "./navProduct.css";
import SHOP_DATA from "../Pays";
function NavProduct({FiltreCat}) {
  return (
    <div className="nav-product">
      <div className="nav-items">
        <h2 className="nav-item" onClick={(e)=>FiltreCat(e.currentTarget)}>All</h2>
      
      {SHOP_DATA.map((item, index) => (
        
        
          
          <h2 className="nav-item" key={index} onClick={(e)=>FiltreCat(e.currentTarget)} >{item.title}</h2>
        
      ))}
      </div>
    </div>
  );
}
export default NavProduct;
