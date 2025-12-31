import BIG_CARD from "../big_card/big_card";
import NavProduct from "../navProduct/navProduct";
import SHOP_DATA from "../Pays";
import { useState } from "react";

const Produits = () => {
  const [Nom, SetNom] = useState("");
  const FiltreCat = (cate) => {
    SetNom(cate.innerText);
  };
  return (
    <>
      <NavProduct FiltreCat={FiltreCat} />
      {SHOP_DATA.map((cat, index) =>
        cat.title === Nom ? (
          <BIG_CARD
            key={index}
            id={cat.id}
            title={cat.title}
            routeName={cat.routeName}
            items={cat.items}
          />
        ) : (Nom === "All" || Nom ==='') ? (
          <BIG_CARD
            key={index}
            id={cat.id}
            title={cat.title}
            routeName={cat.routeName}
            items={cat.items}
          />
          
        ) : null
        
      )}
    </>
  );
};
export default Produits;
