import React from "react";
import "./Footer.css";

export const Footer = () => {
  const theme = localStorage.getItem("theme");

  return (
    <div
      id="footer-container"
      // style={{
      //   backgroundColor: theme === "dark" ? "#333" : "#f5f5f5",
      //   color: theme === "dark" ? "#f5f5f5" : "#333",
      // }}
    >
      Footer component
    </div>
  );
};
