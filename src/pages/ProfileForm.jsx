import React from "react";
import "./AccountPage.css";

const ProfileForm = ({ formData, handleChange, handleSubmit, onCancel }) => {
  return (
    <form onSubmit={handleSubmit} className="account-form-modern">
      <h3>Edit Profile</h3>
      <div className="form-grid">
        <div className="account-form-group">
          <label>Name</label>
          <input
            type="text"
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            required
            className="account-input"
            autoComplete="off"
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
            autoComplete="off"
          />
        </div>
        <div className="account-form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="account-input"
            autoComplete="off"
          />
        </div>
        <div className="account-form-group">
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="account-input"
            autoComplete="off"
          />
        </div>
        <div className="account-form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="account-input"
            autoComplete="off"
          />
        </div>
        <div className="account-form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="account-input"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="account-form-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="account-input"
          autoComplete="off"
        />
      </div>
      <div className="account-form-group">
        <label>Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="account-input"
          rows={3}
        />
      </div>
      <div className="account-buttons-row">
        <button type="submit" className="account-save-btn">Save</button>
        <button type="button" className="account-cancel-btn" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default ProfileForm;
