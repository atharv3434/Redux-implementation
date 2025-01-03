import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/actionTypes";

const INIT_STATE = [];

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const isInCart = state.find((cartItem) => cartItem.id === action.payload.id);

      if (isInCart) {
        return state.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    }

    case REMOVE_FROM_CART: {
      const cartItemToRemove = state.find((cartItem) => cartItem.id === action.payload.id);

      if (cartItemToRemove && cartItemToRemove.quantity === 1) {
        return state.filter((cartItem) => cartItem.id !== action.payload.id);
      } else {
        return state.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    }

    default:
      return state;
  }
};

export default cartReducer;
