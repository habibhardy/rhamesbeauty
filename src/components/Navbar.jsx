import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiRestaurant } from "react-icons/bi";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className=" fixed w-full">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-3 px-5  bg-yellow-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
            <h1 className=" text-4xl font-semibold font-fontStyled">Rhamés beauty</h1>
          </div>

          <nav className="max-md:hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={300}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Accueil
            </Link>

            <div className="relative group">
              <div className=" flex items-center gap-1">
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={300}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Services
                </Link>
              </div> 
            </div>

            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={300}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Prestation
            </Link>

            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={300}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Contacter nous
            </Link>

            
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={300}
            className="  text-sm hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Accueil
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={300}
            className="  text-sm hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={300}
            className="  text-sm hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Prestations
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={300}
            className=" pb-5  text-sm hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Contactez nous
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
