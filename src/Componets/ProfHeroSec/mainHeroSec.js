import React from "react";
import HeroB from "./herobg";
import ProfileCardMap from "./profile card/profcardmap";
import ProfAboutCard from "./profabout";
import"./herosec.css"

function MainHeroSec() {
  return (
    <>
      <section className="hero-section">
        <HeroB />
      </section>

      <section className="card-section container">
        <div className="row justify-content-center align-items-start ">
          <div className="col-12 col-lg-5 mb-4">
            <ProfileCardMap />
          </div>
          <div className="col-12 col-lg-7 main-about">
            <ProfAboutCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default MainHeroSec;
