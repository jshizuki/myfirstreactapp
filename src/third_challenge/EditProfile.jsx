import React, { useState } from "react";
import "./EditProfile.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

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
    // prevent the default form submission behavior, which includes appending the form data as query parameters in the URL.
    e.preventDefault();
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
          InputLabelProps={{
            shrink: true,
          }}
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
        <Button className="button" size="small" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
