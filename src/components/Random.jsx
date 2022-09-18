import React from "react";
import icon from "../images/icon-dice.svg";

function Random({ handleFetch }) {
  return (
    <div>
      <button
        className="block p-4 -mb-14 rounded-full bg-NeonGreen hover:shadow-[0px_0px_30px_-7px_rgba(0,255,128,1)]"
        onClick={handleFetch}
      >
        <img src={icon} alt="dice" />
      </button>
    </div>
  );
}

export default Random;
