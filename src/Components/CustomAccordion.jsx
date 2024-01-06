import React, { useState } from "react";

const CustomAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "Arcu faucibus diam feugiat magna etiam.",
      content:
        " Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh. ",
    },
    {
      title: "Fermentum tortor aenean.",
      content:
        "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.",
    },
    {
      title: "Dictum est amet sollicitudin.",
      content:
        "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.",
    },
    {
      title: "Sed vulputate mi faucibus.",
      content:
        "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.",
    },
    {
      title: "Commodo placerat ultricies.",
      content:
        "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.",
    },
    {
      title: "Nunc amet cursus morbi donec.",
      content:
        "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.",
    },
  ];
  return (
    <div className="bg-black py-[50px]">
      <h2 className="text-white text-[48px] sm:text-[56px] md:text-[64px] font-AzoSans font-normal leading-[108%] text-center pb-6 sm:pb-[35px] md:pb-[40px] lg:pb-[50px]">
        FAQs
      </h2>
      <div className="max-w-[896px] mx-auto 2xl:max-w-[1140px] transition-all ease-linear duration-300 ">
        {accordionData.map((item, index) => (
          <div
            className="border-b-[3px] border-[#FFDA60] mb-[5px] transition-all ease-linear duration-300 "
            key={index}
          >
            <div
              className={`${
                openAccordion === index ? "px-3" : "pb-[17px]"
              } pt-[25px] cursor-pointer   text-white font-Montserrat text-[18px] md:text-[22px] font-bold leading-[108%] transition-all ease-linear duration-300`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <div>{item.title}</div>
                <div className="text-[#FDDDA60]">
                  {openAccordion === index ? "-" : "+"}
                </div>
              </div>
            </div>
            <div
              className={`accordion-content text-white text-[14px] md:text-base font-Montserrat font-normal leading-[160%] transition-all ease-linear duration-300 ${
                openAccordion === index ? "open px-3 pb-5 pt-[9px]" : ""
              }`}
            >
              <p className="para"> {item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomAccordion;
