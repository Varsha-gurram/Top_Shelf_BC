import { useSelector } from "react-redux";

export const useCheckoutValues = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 0;
  const shipping = subtotal > 1000 ? 0 : 50;
  const total = subtotal - discount + shipping;

  return { subtotal, discount, shipping, total };
};
