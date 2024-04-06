import React from "react";

function NewsLetter() {
  return (
    <div className="bg-[#2699fb]">
      <div className="max-width-[1240px] text-center mx-auto p-2 py-[40px]">
        <h1 className="md:text-[40px] text-[30px]">Subscribe to our Newsletters</h1>
        <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        <div>
            <input className="w-[400px] p-2 rounded mt-5 mr-5" type="text" placeholder="your email address" />
            <button className="text-white px-5 mt-4 bg-black p-2 rounded">SIGN UP</button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
