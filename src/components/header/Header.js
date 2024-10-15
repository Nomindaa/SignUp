import React, { useState } from "react";
import "./Header.css";
import { Button } from "../button";
import { Switch } from "@mui/material";

export const Header = () => {
  const theme = localStorage.getItem("theme");

  const [checked, setChecked] = useState(theme === "dark" ? true : false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    localStorage.setItem("theme", e.target.checked ? "dark" : "light");
  };

  return (
    <div
      id="header-container"
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
        color: theme === "dark" ? "#f5f5f5" : "#333",
      }}
    >
      <div>{theme === "dark" ? "dark theme" : "light theme"}</div>

      <div>
        <Switch onChange={handleChange} checked={checked} />
      </div>
    </div>
  );
};
