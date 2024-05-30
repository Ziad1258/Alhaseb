import Link from "next/link";
import React from "react";
import "./footer.css";
import SocialMediaIcons from "../socialMediaIcons/SocialMediaIcons";


function Footer() {
 

  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-text">
          Made with Love by{" "}
          <Link href="/" className="creator">
            Ferdjani Ziad
          </Link>{" "}
           © 2024
        </p>
      <SocialMediaIcons />
      </div>

    </footer>
  );
}

export default Footer;
