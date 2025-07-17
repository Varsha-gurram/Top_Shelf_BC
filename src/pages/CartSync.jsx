import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { setCart } from "../Redux/filters/CartSlice";

const CartSync = () => {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchCart = async () => {
      if (!user) return;

      try {
        const cartRef = collection(db, "users", user.uid, "cart");
        const snapshot = await getDocs(cartRef);
        const cartItems = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: data.productId, 
            title: data.name || "Untitled", 
            image: data.image || "",        
            price: data.price || 0,
            quantity: data.quantity || 1,
            selectedWeight: data.selectedWeight || "",
            selectedIntegra: data.selectedIntegra || "",
            integraPrice: data.integraPrice || 0,
          };
        });

        dispatch(setCart(cartItems));
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [user, dispatch]);

  return null;
};

export default CartSync;
