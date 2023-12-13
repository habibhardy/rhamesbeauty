import React from "react";
import { Link } from "react-scroll";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold font-fontStyled text-2xl pb-4">Rhamés beauty</h1>
          <p className=" text-sm">
          Offrez vous une satifaisante prestation de services dans notre structure de beauté Rhamés beauty SPA tout
          en bénéficiant de nos beaux conforts. Nous serons très ravis de vous recevoir avec un immense plaisir 
          pour répondre à vos demandes.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Liens</h1>
          <nav className=" flex flex-col gap-2">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Accueil
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Prestations
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Contactez nous
          </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contactez nous</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" underline hover:text-brightColor transition-all cursor-pointer"
              href="https://vm.tiktok.com/ZM6YafnJ2/"
            >
              Tiktok
            </a>
            <span
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              +212 609 943 680
            </span>
            <span
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              +212 600 110 595
            </span>
            <span
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
             +212 520 195 562
            </span>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor"> habibhardy</span> |
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
