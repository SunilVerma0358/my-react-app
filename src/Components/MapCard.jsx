import React from "react";

const MapCard = (props) => {
  return (
    <div data-aos="fade-down" className="sm:w-6/12 w-full lg:w-4/12 px-3 pt-4">
      <div className=" group rounded-[16px] border before:transition-all before:ease-linear  duration-300 before:duration-300 before:absolute before:left-[-100%] before:hover:left-[0] before:hover:w-full before:top-0 before:w-full before:h-full  hover:border-[#fff] border-[#51514F] before:-z-10 before:hover:bg-[#FDDA60] bg-[#222222] backdrop-blur-[15.5px] pt-[25px] pb-[22px] ps-[20px] pe-[19px] relative  overflow-hidden hover:shadow-cardShadow">
        <span className="bg-[#fff] blur-[76px] w-[91px] h-[91px] rounded-[91px]  absolute top-[-10%] right-[-5%] -z-10 "></span>
        <span className="bg-[#fff] blur-[76px] w-[91px] h-[91px] rounded-[91px]  absolute bottom-[-10%] left-[-5%] -z-10"></span>
        <span className="flex justify-center">{props.svg}</span>
        <h2 className="text-[#fff] text-center group-hover:text-black transition-all ease-linear duration-300 py-4 font-Montserrat font-semibold text-[24px] leading-[160%]">
          {props.Heading}
        </h2>
        <p className="text-[#fff] text-center group-hover:text-black transition-all ease-linear duration-300 font-Montserrat font-normal text-base leading-[160%] ">
          {" "}
          {props.Phara}
        </p>
      </div>
    </div>
  );
};

export default MapCard;
