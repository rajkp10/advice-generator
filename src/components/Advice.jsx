import React from "react";

function Advice({ advice }) {
  return (
    <div className="w-auto">
      <h2 className="text-center text-2xl text-white">
        <q>{advice}</q>
      </h2>
    </div>
  );
}

export default Advice;
