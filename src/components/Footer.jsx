import React from "react";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <p> Copyrights @{date} Mehnaaz Tabasum</p>
    </footer>
  );
}

export default Footer;
