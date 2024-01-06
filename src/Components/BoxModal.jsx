import React, { useState } from "react";

const BoxModal = () => {
  const [modal, setmodal] = useState(false);
  function Mymodal() {
    setmodal(!modal);
  }
  return (
    <div className="bg-red-500">
      <div
        className={` ${
          modal ? "block" : "hidden"
        } w-full h-full fixed bg-[#000000a3]  z-40 `}
      ></div>
      <div className="flex justify-center">
        <div
          className={` ${
            modal ? "top-0 m-10" : "top-[-100%] m-0"
          } fixed top-0 w-[250px] h-[200px] rounded-[20px] duration-300 bg-[#FDDA60] z-[60] mx-auto flex-col flex justify-center items-center`}
        >
          {" "}
          <p className="text-base text-black hover:text-white font-AzoSans font-normal duration-300">
            It is a Modal
          </p>
          <button
            onClick={Mymodal}
            className="text-base text-white hover:text-[#000] font-AzoSans font-normal duration-300 mt-4 hover:bg-white bg-[#000] border border-black px-3 py-2 rounded-[8px] "
          >
            Back
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-[48px] text-center text-white  py-4 font-black ">
          Box Modal
        </h3>
        <div className="flex justify-center flex-col max-w-[200px] mx-auto">
          <button
            onClick={Mymodal}
            className=" bg-[#FDDA60] px-3 sm:px-6  py-2 sm:py-4 rounded-[4px] text-black leading-[108.744%] text-[14px] sm:text-base font-AzoSans font-normal   hover:text-white before:transition-all before:ease-linear  before:duration-500 duration-500 before:absolute before:left-[-100%] before:hover:left-[0] before:hover:w-full before:top-0 before:w-full before:h-full    before:-z-10 before:hover:bg-[#0A0A0a] z-20 overflow-hidden relative shadow-buttonShadow"
          >
            CONNECT WALLET
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoxModal;
