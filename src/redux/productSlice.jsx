import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
  orders: [],
  favor: [],
  dropCart: false,
  dropFavor: false,
  TVA : 0,
  totalFinal :0,
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const product = state.cart.find((p) => p.id === action.payload.id);
      if (!product) {
        state.cart.push({ ...action.payload, quantite: 1, totalUnitaire: action.payload.price });
      } else {
        product.quantite += 1;
        product.totalUnitaire = product.price * product.quantite;
      }
      
      state.total = state.cart.reduce((sum, item) => sum + item.price * item.quantite, 0);
      state.TVA = parseFloat(state.total * (20/100))
      state.totalFinal = parseFloat(state.total + state.TVA);
    },

    AddToFavor: (state, action) => {
      state.favor.push(action.payload);
    },

    ShowData: (state) => {
      state.dropCart = !state.dropCart;
      state.dropFavor = false;
    },

    ShowDataFavor: (state) => {
      state.dropFavor = !state.dropFavor;
      state.dropCart = false;
    },

    HideData: (state) => {
      state.dropCart = false;
      state.dropFavor = false;
    },

    DeletFavor: (state, action) => {
      state.favor = state.favor.filter((_, i) => i !== action.payload);
    },

    deletCartEl: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        if (state.cart[index].quantite > 1) {
          state.cart[index].quantite -= 1;
          state.cart[index].totalUnitaire -= state.cart[index].price; 
        } else {
          state.cart.splice(index, 1);
        }
      }
      state.total = state.cart.reduce((sum, item) => sum + item.price * item.quantite, 0);
      state.TVA = parseFloat(state.total * (20/100))
      state.totalFinal = parseFloat(state.total + state.TVA);
    },
  },
});

export default ProductSlice.reducer;
export const {
  AddToCart,
  AddToFavor,
  ShowData,
  ShowDataFavor,
  HideData,
  DeletFavor,
  deletCartEl,
} = ProductSlice.actions;
