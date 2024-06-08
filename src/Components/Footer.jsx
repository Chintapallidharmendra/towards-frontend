import React from "react";

import Classes from "../Styles/Footer.module.css";
import footerLogo from "../assets/footerlogo.jpg";

import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.footer}>
        <div className={Classes.socialLink}>
          <p>+91-9666279499</p>
          <p>2wards@gmail.com</p>
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/">
            <img src={github} alt="" />
          </a>
        </div>

        <div className={Classes.footerLogo}>
          <a href="#hero">
            <div className={Classes.footerLogoText}>
              2<span>WARDS</span>
            </div>
          </a>
        </div>

        <div className={Classes.footerInfo}>
          <h3>Explore the world from your inbox</h3>
          <p>
            let us inspire your next gateway with new destinations and special
            deals
          </p>

          <div>
            <input type="email" placeholder="email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
