import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";

import deco1 from "../assets/pictures/deco1.jpg";
import deco2 from "../assets/pictures/deco2.jpg";
import deco3 from "../assets/pictures/deco3.jpg";
import deco4 from "../assets/pictures/deco4.jpg";
import deco5 from "../assets/pictures/deco5.jpg";
import deco6 from "../assets/pictures/deco6.jpg";
import deco7 from "../assets/pictures/deco7.jpg";


const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">

         <h1 className=" text-3xl font-fontStyled  text-black text-center lg:pt-18 pt-24 pb-10">
             Nos conforts et prestations
         </h1>

         <div className=" flex flex-wrap gap-8 justify-center" >
              <DishesCard img={deco1} title="" />
              <DishesCard img={deco3} title="" />
              <DishesCard img={deco2} title="" />
              <DishesCard img={deco4} title="" />
              <DishesCard img={deco5} title="" />
              <DishesCard img={deco6} title="" />
              <DishesCard img={deco7} title="" />
         </div>

    </div>
  );
};

export default Menu;
