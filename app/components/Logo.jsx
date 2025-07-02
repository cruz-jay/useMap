import { useState } from "react";
import { NavLink } from "react-router";
import useCitiesStore from "../store/useCitiesStore";

const Logo = () => {
  const [showImages, setShowImages] = useState(false);
  const setCurrentCity = useCitiesStore((s) => s.setCurrentCity);

  const handleRefresh = () => {
    setShowImages(false);
    setCurrentCity(null);
  };

  return (
    <div className="transition-transform duration-300 hover:scale-105">
      <NavLink to="/past-adventures" className="block">
        <div onClick={() => handleRefresh()} className="relative ">
          <img
            src="/preview.png"
            alt="logo"
            className="w-auto h-20 drop-shadow-lg"
          />
          <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </div>
      </NavLink>
    </div>
  );
};

export default Logo;
