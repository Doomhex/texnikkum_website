import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container flex justify-between">
        <div className=" border font-[700] text-[35px] text-[#ffffff] ml-[30px] block bg-red-500">
          <h1 className="">trxvl.</h1>
        </div>
        <div className=" ">
          <a href="">Home</a>
          <a href="">Stays</a>
          <a href="">Flights</a>
          <a href="">Packages</a>
          <a href="">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
