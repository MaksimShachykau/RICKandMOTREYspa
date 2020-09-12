import React from "react";
import style from "./footer.module.css";
const Footer = (props) => {
  return (
    <footer className = {style}>
      <h3>BY MAKSIM SHACHIKOV</h3>
      <div>
        <a href="https://frontendmax.site/">frontendmax.site</a>
      </div>
    </footer>
  );
};

export default Footer;
