import React, { useContext } from "react";
import imageAccent from "../src/img/umbrella-4303278_1920.jpg";
import { AppContext } from "./context";
const Hero = () => {
  const { closeSubmenu } = useContext(AppContext);
  return (
    <div className="hero" onMouseOver={closeSubmenu}>
      <div className="banner">
        <h1 className="title">Payment infrastructure for the Internet</h1>
        <p className="text">
          Millions of companies of all sizes—from startups to Fortune 500s—use
          Stripe’s software and APIs to accept payments, send payouts, and
          manage their businesses online.
        </p>
        <button className="btn">Start Now</button>
      </div>
      <div className="image">
        <img src={imageAccent} alt="umbrella" />
      </div>
    </div>
  );
};

export default Hero;
