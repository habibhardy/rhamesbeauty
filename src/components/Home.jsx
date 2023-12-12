import React from "react";
import Button from "../layouts/Button";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/pictures/ggc.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full flex flex-col justify-start lg:w-2/3 space-y-5">
        <h1 className=" text-yellow-500 font-semibold text-6xl max-sm:text-2xl pt-10">
          Réjouissez de votre beauté avec nous.
        </h1>
        <p className=" text-white text-xl  max-sm:text-sm">
          Offrez vous une satifaisante prestation de services dans notre structure de beauté Rhamés beauty SPA tout
          en bénéficiant de nos beaux conforts. Nous serons très ravis de vous recevoir avec un immense plaisir 
          pour répondre à vos demandes.
        </p>
        <Link
            to="review"
            spy={true}
            smooth={true}
            duration={300}
            className="text-yellow-500 w-52 px-6 py-4 rounded-2xl items-center 
                              justify-center flex border-2 duration-300 cursor-pointer border-yellow-500
                               active:scale-50">
            Contacter nous
          </Link>
         
      </div>
    </div>
  );
};

export default Home;
