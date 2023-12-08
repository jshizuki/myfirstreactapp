import React, { useState } from "react";
import "./EditProfile.css";
import TextField from "@mui/material/TextField";

export default function EditProfile() {
  const [profile, setProfile] = useState({});

  const handleChange = (e) => {
    // Object destructuring to make code more precise
    const { name, value } = e.target;
    // Update(replace?) object with new keys and values using the spread operator
    setProfile((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    // 2nd and 3rd argument control how the object is displayed for readability
    alert(JSON.stringify(profile, "", 2));
  };

  return (
    <div className="profile-container">
      <p>
        Third challenge - updating an <b>object</b> in a state
      </p>
      <form onSubmit={handleSubmit}>
        <TextField
          className="input"
          id="filled-basic"
          label="First Name"
          variant="filled"
          onChange={handleChange}
          type="text"
          name="firstName"
          value={profile.firstName || ""}
        />
        <TextField
          className="input"
          id="filled-basic"
          label="Last Name"
          variant="filled"
          onChange={handleChange}
          type="text"
          name="lastName"
          value={profile.lastName || ""}
        />
        <TextField
          className="input"
          id="filled-basic"
          label="Birthday"
          variant="filled"
          onChange={handleChange}
          type="date"
          name="birthday"
          value={profile.birthday}
        />
        <TextField
          className="input"
          id="filled-password-input"
          label="Password"
          variant="filled"
          onChange={handleChange}
          type="password"
          name="password"
          value={profile.password}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
