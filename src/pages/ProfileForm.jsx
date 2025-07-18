import React from "react";
import "./AccountPage.css";

const ProfileForm = ({ formData, handleChange, handleSubmit, onCancel }) => {
  return (
    <form onSubmit={handleSubmit} className="account-form">
      <div className="account-form-group">
        <label>Name</label>
        <input
          type="text"
          name="displayName"
          value={formData.displayName}
          onChange={handleChange}
          required
          className="account-input"
        />
      </div>
      <div className="account-form-group">
        <label>Photo URL</label>
        <input
          type="text"
          name="photoURL"
          value={formData.photoURL}
          onChange={handleChange}
          className="account-input"
        />
      </div>
      <div className="account-form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="account-input"
        />
      </div>
      <button type="submit" className="account-save-btn">Save</button>
      <button type="button" className="account-cancel-btn" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default ProfileForm;
