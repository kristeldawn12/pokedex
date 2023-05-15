import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className=" w-full bg-teal-950 h-20 px-2 fixed flex justify-between">
        <div className="h-full">
          <Link to="/pokedex" onClick={handleLogoClick}>
            <div className="h-full flex items-center">
              <img
                src="https://i.pinimg.com/736x/bf/d8/d7/bfd8d7704cf357fdc06f003e8bfdc272.jpg"
                alt="brand-logo"
                className="h-16 rounded-full"
              ></img>
            </div>
          </Link>
        </div>
      </div>
      <div className="pt-20 min-h-[calc(100vh)]">
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
