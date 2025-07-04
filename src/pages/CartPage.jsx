import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../Redux/filters/CartSlice";

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  if (!cartItems.length) return <div>Your cart is empty.</div>;

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} style={{ marginBottom: 12 }}>
          <img src={item.image} alt={item.title} width={50} />
          <span style={{ margin: '0 12px' }}>{item.title}</span>
          <span>Qty: {item.quantity}</span>
          <button
            style={{ marginLeft: 12, color: 'white', background: 'red', border: 'none', borderRadius: 4, padding: '4px 10px', cursor: 'pointer' }}
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        style={{ marginTop: 20, padding: '8px 20px', background: 'gray', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, cursor: 'pointer' }}
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartPage;
