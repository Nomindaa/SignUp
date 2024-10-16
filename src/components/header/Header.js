import { Switch } from "@mui/material";
import React from "react";
import "./Header.css";
import { useThemeContext } from "../../context";

export const Header = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <div
      id="header-container"
      style={{
        backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
        color: theme === "light" ? "#333" : "#f5f5f5",
      }}
    >
      <div>Header component</div>

      <div>
        <Switch
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
      </div>
    </div>
  );
};
