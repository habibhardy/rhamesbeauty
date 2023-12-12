import React from "react";

const ReviewCard = (props) => {
  return (
    <div className=" w-full md:w-2/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
     

      <div className=" flex flex-row justify-start items-center mt-4 gap-4">
        <img className=" rounded-full w-2/4" src={props.img} alt="img" />
        <h3 className=" font-semibold text-yellow-500 ">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
