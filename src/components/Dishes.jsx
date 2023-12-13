import React from "react";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";

import im1 from "../assets/pictures/im1.jpg";
import im2 from "../assets/pictures/im2.jpg";
import im3 from "../assets/pictures/im3.jpg";
import im4 from "../assets/pictures/im4.jpg";
import im5 from "../assets/pictures/im5.jpg";
import im6 from "../assets/pictures/im6.jpg";

import lissage from "../assets/pictures/lissage.jpg";
import massage from "../assets/pictures/massage.jpg";
import percing from "../assets/pictures/percing.jpg";
import produits_cosm from "../assets/pictures/produits_cosm.jpg";
import rasta from "../assets/pictures/rasta.jpg";
import tracage from "../assets/pictures/tracage.jpg";
import extensions from "../assets/pictures/extensions.jpg";
import epi from "../assets/pictures/epi.jpg";
import detatouage from "../assets/pictures/detatouage.jpg";
import deffrisage from "../assets/pictures/deffrisage.jpg";
import cils_perman from "../assets/pictures/cils_perman.jpg";


import coiffure from "../assets/img/imgg/coiffure.png";


import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-3xl font-fontStyled text-black text-center pt-24 pb-10">
        Nos services
      </h1>

      <h1 className="text-9xl text-yellow-500 font-bold font-fontStyled"  >
           R
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">

        <DishesCard img={im2} title="Manicure" price="" />
        <DishesCard img={im3} title="Pedicure" price="" />
        <DishesCard img={im4} title="Coiffure femme" price="" />
        <DishesCard img={im6} title="Tatouage" price="" />
        <DishesCard img={lissage} title="Lissage & Lissage proteine" price="" />
        <DishesCard img={massage} title="Massage" price="" />
        <DishesCard img={percing} title="Percing" price="" />
        <DishesCard img={produits_cosm} title="Vente de produits cosmetiques" price="" />
        <DishesCard img={rasta} title="Rasta" price="" />
        <DishesCard img={tracage} title="Traçage sourcil" price="" />
        <DishesCard img={extensions} title="Les extensions" price="" />
        <DishesCard img={epi} title="Epillation tout style" price="" />
        <DishesCard img={detatouage} title="Détatouage" price="" />
        <DishesCard img={deffrisage} title="Défrisage" price="" />
        <DishesCard img={cils_perman} title="Cils permanents" price="" />

      </div>
    </div>
  );
};

export default Dishes;
