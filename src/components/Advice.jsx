import React from "react";

function Advice({ advice }) {
  return (
    <div className="w-auto">
      <h2 className="text-2xl text-white">"{advice}"</h2>
    </div>
  );
}

export default Advice;
