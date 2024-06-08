import React, { useState } from "react";

import Classes from "../Styles/Hero.module.css";
import Banner from "../assets/hero.png";
import LocationSearch from "./Home/LocationSearch";

function Hero() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className={!modal && Classes.open}>
        <div className={Classes.modalContainer}>
          <h5>We Receive your information</h5>

          <button onClick={() => setModal(false)}>Ok</button>
        </div>
      </div>

      <section id="hero" className={Classes.heroContainer}>
        <div className={Classes.heroimage}>
          <img src={Banner} alt="" />
        </div>

        <div className={Classes.content}>
          <div className={Classes.title}>
            <h1>
              Explore your dream destinations With{" "}
              <span className={Classes.nickName}>2Wards</span>
            </h1>
          </div>

          <div className={Classes.bookingContainer}>
            <LocationSearch />

            <div className={Classes.search}>
              <label>Check in</label>
              <input type="date" />
            </div>

            <div className={Classes.search}>
              <label>Check out</label>
              <input type="date" />
            </div>

            <button
              onClick={() => setModal(true)}
              className={Classes.bookingButton}
            >
              Explore
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
