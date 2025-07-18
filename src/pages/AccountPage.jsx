import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import "./AccountPage.css";
import ProfileForm from "./ProfileForm"; 

const AccountPage = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    displayName: "",
    photoURL: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        const data = docSnap.exists() ? docSnap.data() : {};
        setFormData({
          displayName: user.displayName || "",
          photoURL: user.photoURL || "",
          phoneNumber: data.phoneNumber || "",
        });
      }
    };
    fetchProfileData();
  }, [user]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const handleEditClick = () => setEditing(true);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, {
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });
      const docRef = doc(db, "users", user.uid);
      await setDoc(docRef, { phoneNumber: formData.phoneNumber }, { merge: true });
      setEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) return <p>Loading user data...</p>;

  return (
    <div className="account-container">
      {user ? (
        <>
          <h2>Welcome, {formData.displayName || "User"}!</h2>
          {formData.photoURL && (
            <img src={formData.photoURL} alt="Profile" className="account-avatar" />
          )}
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {formData.phoneNumber || "Not set"}</p>

          {!editing ? (
            <>
              <button className="account-edit-btn" onClick={handleEditClick}>Edit Profile</button>
              <button className="account-logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <ProfileForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              onCancel={() => setEditing(false)}
            />
          )}
        </>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <p>
            <Link to="/login" className="account-link">Login</Link> |
            <Link to="/signup" className="account-link">Signup</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default AccountPage;
