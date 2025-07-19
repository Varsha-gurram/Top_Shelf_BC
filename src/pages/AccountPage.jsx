import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import "./AccountPage.css";

const getInitial = (name) =>
  name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U";

const AccountPage = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    displayName: "",
    photoURL: "",
    phoneNumber: "",
    gender: "",
    dob: "",
    address: "",
    country: "",
    bio: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid, "profile", "info");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormData({
            displayName: data.displayName || "",
            photoURL: data.photoURL || "",
            phoneNumber: data.phoneNumber || "",
            gender: data.gender || "",
            dob: data.dob || "",
            address: data.address || "",
            country: data.country || "",
            bio: data.bio || "",
          });
        } else {
          setFormData({
            displayName: user.displayName || "",
            photoURL: user.photoURL || "",
            phoneNumber: "",
            gender: "",
            dob: "",
            address: "",
            country: "",
            bio: "",
          });
        }
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
      const profileRef = doc(db, "users", user.uid, "profile", "info");

      await setDoc(
        profileRef,
        {
          displayName: formData.displayName,
          photoURL: formData.photoURL,
          phoneNumber: formData.phoneNumber,
          gender: formData.gender,
          dob: formData.dob,
          address: formData.address,
          country: formData.country,
          bio: formData.bio,
        },
        { merge: true }
      );

      await updateProfile(auth.currentUser, {
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });

      setEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) return <div className="account-loading">Loading user data...</div>;

  return (
    <div className="account-page-root">
      <div className="account-card">
        {user ? (
          <>
            <div className="account-avatar-row">
              {formData.photoURL ? (
                <img
                  src={formData.photoURL}
                  alt="Profile"
                  className="account-avatar"
                />
              ) : (
                <div className="account-avatar-fallback">
                  {getInitial(formData.displayName)}
                </div>
              )}
              <div className="account-card-title">
                <h2>
                  {formData.displayName?.trim()
                    ? formData.displayName
                    : "User"}
                </h2>
                <span className="account-card-email">{user.email}</span>
              </div>
            </div>

            {!editing ? (
              <div className="account-info-group">
                <div>
                  <strong>Phone:</strong> {formData.phoneNumber || "—"}
                </div>
                <div>
                  <strong>Gender:</strong> {formData.gender || "—"}
                </div>
                <div>
                  <strong>DOB:</strong> {formData.dob || "—"}
                </div>
                <div>
                  <strong>Address:</strong> {formData.address || "—"}
                </div>
                <div>
                  <strong>Country:</strong> {formData.country || "—"}
                </div>
                <div>
                  <strong>Bio:</strong> {formData.bio || "—"}
                </div>
                <div className="account-actions-row">
                  <button
                    className="account-btn edit"
                    onClick={handleEditClick}
                  >
                    Edit Profile
                  </button>
                  <button className="account-btn logout" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <form className="account-edit-form" onSubmit={handleSubmit}>
                <div className="account-form-columns">
                  <div>
                    <label>Name</label>
                    <input
                      type="text"
                      name="displayName"
                      value={formData.displayName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label>Photo URL</label>
                    <input
                      type="text"
                      name="photoURL"
                      value={formData.photoURL}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="account-form-columns">
                  <div>
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Gender</label>
                    <input
                      type="text"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="account-form-columns">
                  <div>
                    <label>DOB</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                  />
                </div>
                <div className="account-actions-row">
                  <button type="submit" className="account-btn save">
                    Save
                  </button>
                  <button
                    type="button"
                    className="account-btn cancel"
                    onClick={() => setEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </>
        ) : (
          <div className="account-empty">
            <h2>You are not logged in</h2>
            <p>
              <Link to="/login" className="account-link">Login</Link>
              {" | "}
              <Link to="/signup" className="account-link">Signup</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountPage;
