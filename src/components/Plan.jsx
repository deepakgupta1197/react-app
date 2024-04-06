import React from "react";

function Plan({ name }) {
  return (
    <div className=" p-2 flex flex-col items-center justify-around h-[300px] hover:scale-110 duration-300 shadow-2xl  w-[300px] text-center">
      <h1 className="font-bold text-2xl mb-3">{name}</h1>
      <p className="text-3xl font-bold mb-4"> $149</p>
      <div>
        <span>Lorem ipsum dolor sit.</span>
        <hr />
        <span>Lorem ipsum dolor sit.</span>
        <hr />
        <span>Lorem ipsum dolor sit.</span>
        <hr />
      </div>
      <button className="bg-black text-white p-2 px-5 mt-3 rounded">
        Start Trial
      </button>
    </div>
  );
}

export default Plan;
