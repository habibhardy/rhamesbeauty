import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";
import contacter from "../assets/pictures/contacter.jpg";

import { IoCallOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";



const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" mt-5 text-3xl text-black font-fontStyled text-center lg:pt-20 pb-10">
           Contacter nous
      </h1>
      <div className=" flex flex-col justify-center items-center md:flex-row gap-5 ">
        <img className=" w-3/4   md:w-2/4   " src={contacter} alt="img" />
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contacts:</h1>
          <nav className=" flex flex-col justify-center gap-2">
            <span
              className=" text-xl flex flex-row gap-2 hover:text-yellow-500 transition-all cursor-pointer"
            >
             <IoCallOutline/> +212 609 943 680
            </span>
            <span
              className=" text-xl flex flex-row gap-2 hover:text-yellow-500 transition-all cursor-pointer"
            >
            <IoCallOutline/>  +212 600 110 595
            </span>
            <span
              className=" text-xl flex flex-row gap-2 hover:text-yellow-500 transition-all cursor-pointer"
            >
            <IoCall /> +212 520 195 562
            </span>
            <h1 className=" font-medium text-xl pb-4 pt-2 md:pt-0">Adresse:</h1>
            {/*  <iframe src=" https://maps.app.goo.gl/Fv4B5LjLSyDDMrpM8 
            https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d270.70820815257525!2d-7.6446506238564!3d33.60168938733139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sma!4v1702341496727!5m2!1sfr!2sma" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <a
              className=" flex flex-row gap-2 underline hover:text-yellow-500 transition-all cursor-pointer"
              href="https://maps.app.goo.gl/8nxgn2b6aw9pU4RR6"
            >
            <FaLocationDot size={40}/>  12 RUE IBNO JAHIR RESIDENCE AL AOSA QUARTIER BOURGOGNE
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Review;
