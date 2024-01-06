import React, { useState } from "react";

const CustomTap = () => {
  const [first, setfirst] = useState("Tab1");
  function ChangeTab(Tab) {
    setfirst(Tab);
  }
  return (
    <div className="bg-black py-6">
      <div className=" container mx-auto max-w-[1320px]">
        <h3 className="py-[50px] text-center text-white font-black text-[48px]">
          Custom Tab{" "}
        </h3>
        <button
          onClick={() => ChangeTab("Tab1")}
          className={`${
            first ? "bg-red-300 tex-green font-bold py-3 px-5 bg-blue " : ""
          } text-black `}
        >
          {" "}
          open1
        </button>
        <button
          onClick={() => ChangeTab("Tab2")}
          className={`${
            first ? "bg-red-300 tex-green font-bold py-3 px-5 bg-blue " : ""
          } text-black `}
        >
          {" "}
          open2
        </button>
        <button
          onClick={() => ChangeTab("Tab3")}
          className={`${
            first ? "bg-red-300 tex-green font-bold py-3 px-5 bg-blue " : ""
          } text-black `}
        >
          {" "}
          open3
        </button>
        {first}
        {first === "Tab1" && (
          <div className="text-black font-black bg-red-300 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos earum,
            eveniet, pariatur reprehenderit rerum, quos dolor tempore expedita
            ea consectetur unde vero voluptates ratione accusantium aut ullam
            perspiciatis hic nostrum.
          </div>
        )}
        {first === "Tab2" && (
          <div className="text-black font-black bg-pink-300 ">
            contant2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officia, error dolorum exercitationem veniam repudiandae aliasharum
            deserunt. Obcaecati quibusdam iusto sunt culpa atque?
          </div>
        )}
        {first === "Tab3" && (
          <div className="text-black font-black bg-yellow-300 ">
            contant3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti mollitia perspiciatis blanditiis, tempora vel nostrum
            illum, esse expedita aut molestiae quasi, n.
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomTap;
