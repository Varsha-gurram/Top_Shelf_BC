import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const AccountPage = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  if (loading) return <p>Loading user data...</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto", textAlign: "center" }}>
      {user ? (
        <>
          <h2>Welcome, {user.displayName || "User"}!</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <br />
          <button
            onClick={handleLogout}
            style={{
              padding: "10px 20px",
              backgroundColor: "#e53935",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <p>
            <Link to="/login" style={{ marginRight: "10px", color: "#4a6932" }}>Login</Link>
            |
            <Link to="/signup" style={{ marginLeft: "10px", color: "#4a6932" }}>Signup</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default AccountPage;
