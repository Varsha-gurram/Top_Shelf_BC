import React from "react";
import {useNavigate} from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const AccountPage=()=>{
    const[user]=useAuthState(auth);
    const navigate=useNavigate();
    const handleLogout=async()=>{
        try{
            await auth.signOut();
            navigate("/login");
        }catch(err){
            console.error("Logout failed",err);
        }
    };
    if(!user) return<p>Loading user Data...</p>
    return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Welcome, {user.displayName || "User"}!</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <br />
      <button onClick={handleLogout} style={{
        padding: "10px 20px",
        backgroundColor: "#e53935",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}>
        Logout
      </button>
    </div>
  );
};
export default AccountPage;