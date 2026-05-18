import React from "react";
import Bubble from "./Bubble";
import { logoDev, logoTest } from "../Constant";

const Logo = ({ type }) => {
  const data = type === "dev" ? logoDev : logoTest;

  return (
    <div className="relative w-full h-full">
      {data.map((logo, index) => (
        <Bubble key={logo.id} logo={logo} index={index} />
      ))}
    </div>
  );
};


export default Logo;
