import React from "react";
import "./Footer.css";
import { useThemeContext } from "../../context";

export const Footer = () => {
  const { theme } = useThemeContext();

  return (
    <div
      id="footer-container"
      style={{
        backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
        color: theme === "light" ? "#333" : "#f5f5f5",
      }}
    >
      Footer component
    </div>
  );
};
