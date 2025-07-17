import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
export const updateCartQuantity = async (userId, productId, quantity) => {
  const ref = doc(db, "users", userId, "cart", productId.toString());
  try {
    await updateDoc(ref, { quantity });
  } catch (error) {
    console.error("Failed to update quantity in Firestore:", error);
  }
};
export const removeCartItem = async (userId, productId) => {
  const ref = doc(db, "users", userId, "cart", productId.toString());
  try {
    await deleteDoc(ref);
  } catch (error) {
    console.error("Failed to remove item from Firestore:", error);
  }
};
