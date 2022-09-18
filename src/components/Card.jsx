import React from "react";
import Advice from "./Advice";
import Random from "./Random";
import dividerDesktop from "../images/pattern-divider-desktop.svg";
import dividerMobile from "../images/pattern-divider-mobile.svg";

function Card({ adviceObj, handleFetch }) {
  return (
    <div className="container max-w-xs md:max-w-md p-5 flex flex-col justify-between items-center space-y-8">
      <div>
        <span className="text-NeonGreen tracking-[0.25rem]">
          Advice #{adviceObj.id}
        </span>
      </div>
      <Advice advice={adviceObj.advice} />
      <div className="hidden md:block">
        <img src={dividerDesktop} alt="divider" />
      </div>
      <div className="md:hidden">
        <img src={dividerMobile} alt="divider" />
      </div>
      <Random handleFetch={handleFetch} />
    </div>
  );
}

export default Card;
