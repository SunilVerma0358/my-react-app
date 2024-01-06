import React from "react";
import MapCard from "./MapCard";

const Utilities = () => {
  const Array = [
    {
      id: 1,
      svg: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="group-hover:stroke-black transition-all duration-300 ease-linear"
            d="M32.6654 4.6665L13.9987 4.6665C12.761 4.6665 11.574 5.15817 10.6989 6.03334C9.8237 6.90851 9.33203 8.09549 9.33203 9.33317L9.33203 46.6665C9.33203 47.9042 9.8237 49.0912 10.6989 49.9663C11.574 50.8415 12.761 51.3332 13.9987 51.3332L41.9987 51.3332C43.2364 51.3332 44.4234 50.8415 45.2985 49.9663C46.1737 49.0912 46.6654 47.9042 46.6654 46.6665L46.6654 18.6665L32.6654 4.6665Z"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="group-hover:stroke-black transition-all duration-300 ease-linear"
            d="M32.668 4.6665V18.6665H46.668"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="group-hover:stroke-black transition-all duration-300 ease-linear"
            d="M37.3346 30.3335L18.668 30.3335"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="group-hover:stroke-black transition-all duration-300 ease-linear"
            d="M37.3346 39.6665H18.668"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="group-hover:stroke-black transition-all duration-300 ease-linear"
            d="M23.3346 21H21.0013H18.668"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      Heading: " Document",
      Phara:
        "   Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus.",
    },
    {
      id: 2,
      svg: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="group-hover:stroke-black"
            d="M46.668 16.3335H9.33464C6.75731 16.3335 4.66797 18.4228 4.66797 21.0002V44.3335C4.66797 46.9108 6.75731 49.0002 9.33464 49.0002H46.668C49.2453 49.0002 51.3346 46.9108 51.3346 44.3335V21.0002C51.3346 18.4228 49.2453 16.3335 46.668 16.3335Z"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="group-hover:stroke-black"
            d="M37.3346 49V11.6667C37.3346 10.429 36.843 9.242 35.9678 8.36683C35.0926 7.49167 33.9056 7 32.668 7H23.3346C22.097 7 20.91 7.49167 20.0348 8.36683C19.1596 9.242 18.668 10.429 18.668 11.6667V49"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      Heading: " Deal",
      Phara:
        "   Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus.",
    },
    {
      id: 3,
      svg: (
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="group-hover:fill-black"
            d="M12.4441 12.7554H37.333V15.2443H12.4441V12.7554ZM12.4441 25.1998H25.0223V27.6887H12.4441V25.1998ZM36.3654 18.9776H12.4441V21.4665H33.8781L36.3654 18.9776ZM19.8999 45.2229C20.3183 45.7027 20.8493 46.071 21.4453 46.2948C22.0413 46.5185 22.6836 46.5906 23.3143 46.5047H35.4523C35.7411 46.5047 36.0181 46.39 36.2223 46.1858C36.4265 45.9816 36.5412 45.7046 36.5412 45.4158C36.5412 45.127 36.4265 44.8501 36.2223 44.6459C36.0181 44.4416 35.7411 44.3269 35.4523 44.3269H23.3143C21.8972 44.302 22.1492 43.0716 22.3483 42.6905C22.6079 42.2432 22.8102 41.765 22.9503 41.2671C23.0433 40.8666 22.9995 40.4464 22.8258 40.0737C22.6521 39.701 22.3586 39.3971 21.9921 39.2107C21.4032 38.9454 20.7437 38.8804 20.1144 39.0257C19.485 39.1709 18.9207 39.5184 18.5077 40.0149C17.9725 40.5672 17.229 41.4118 16.5165 42.2331C16.9568 40.508 17.5277 38.2945 18.0877 36.1354C18.2481 35.6434 18.2162 35.1089 17.9983 34.6396C17.7803 34.1702 17.3926 33.8009 16.9132 33.606C16.3823 33.4239 15.8021 33.4499 15.2896 33.6789C14.7772 33.9078 14.3707 34.3226 14.1521 34.8396C13.4801 36.1323 8.1601 45.0471 8.10722 45.1374C8.03388 45.2601 7.98544 45.3962 7.96467 45.5376C7.9439 45.6791 7.9512 45.8233 7.98616 45.962C8.02112 46.1007 8.08304 46.2311 8.1684 46.3458C8.25376 46.4606 8.36089 46.5574 8.48366 46.6307C8.73161 46.7788 9.02824 46.8224 9.30829 46.7518C9.58835 46.6812 9.82889 46.5022 9.97699 46.2543C10.1761 45.9198 14.4228 38.8063 15.7621 36.4309C14.7541 40.3198 13.6434 44.6474 13.5781 45.0363C13.5046 45.3222 13.5266 45.6243 13.641 45.8965C13.7553 46.1687 13.9556 46.3959 14.2112 46.5436C14.496 46.6848 14.8196 46.7272 15.1311 46.6641C15.4427 46.601 15.7243 46.436 15.9317 46.1951C16.1277 46.0178 16.4948 45.5963 17.4203 44.5214C18.2827 43.5071 19.1659 42.5109 20.0694 41.5331C20.4085 41.1754 20.6139 41.334 20.4148 41.6856C20.0253 42.1778 19.7727 42.7641 19.6826 43.3852C19.5924 44.0064 19.6679 44.6403 19.9014 45.2229H19.8999Z"
            fill="white"
          />
          <path
            className="group-hover:fill-black"
            d="M43.5556 33.7478V49.7778H6.22223V6.2222H43.5556V13.9891L45.6244 11.9202C45.9429 11.6061 46.2921 11.3247 46.6667 11.0802V4.66664C46.6667 4.25408 46.5028 3.85842 46.2111 3.5667C45.9193 3.27497 45.5237 3.11108 45.1111 3.11108H4.66667C4.25411 3.11108 3.85845 3.27497 3.56673 3.5667C3.275 3.85842 3.11111 4.25408 3.11111 4.66664V51.3333C3.11111 51.7459 3.275 52.1415 3.56673 52.4333C3.85845 52.725 4.25411 52.8889 4.66667 52.8889H45.1111C45.5237 52.8889 45.9193 52.725 46.2111 52.4333C46.5028 52.1415 46.6667 51.7459 46.6667 51.3333V33.3309C45.7125 33.8364 44.6091 33.9843 43.5556 33.7478Z"
            fill="white"
          />
          <path
            className="group-hover:fill-black"
            d="M53.0888 18.4506L52.2752 17.6371C52.691 17.0876 52.9015 16.41 52.8703 15.7216C52.839 15.0333 52.568 14.3775 52.1041 13.868C51.502 13.3373 50.7145 13.066 49.9133 13.1132C49.1121 13.1604 48.362 13.5222 47.8263 14.12L28.343 33.6002L27.041 38.4878C27.0204 38.5517 27.0179 38.6201 27.0337 38.6854C27.0496 38.7507 27.0833 38.8103 27.1309 38.8576C27.1786 38.905 27.2384 38.9382 27.3038 38.9537C27.3692 38.9691 27.4376 38.9661 27.5014 38.9451L32.3719 37.6275L50.5594 19.44L51.3279 20.21C51.3815 20.2636 51.4241 20.3272 51.4532 20.3973C51.4822 20.4674 51.4972 20.5425 51.4972 20.6183C51.4972 20.6942 51.4822 20.7693 51.4532 20.8393C51.4241 20.9094 51.3815 20.973 51.3279 21.0266L43.6792 28.6753C43.4459 28.9088 43.3149 29.2254 43.3151 29.5555C43.3152 29.8856 43.4465 30.2021 43.68 30.4354C43.9135 30.6687 44.2301 30.7997 44.5602 30.7996C44.8903 30.7994 45.2068 30.6681 45.4401 30.4346L53.0888 22.786C53.6636 22.2107 53.9866 21.4308 53.9866 20.6175C53.9866 19.8043 53.6636 19.0243 53.0888 18.4491V18.4506Z"
            fill="white"
          />
        </svg>
      ),
      Heading: " Contract",
      Phara:
        "   Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus.",
    },
  ];

  return (
    <div className="bg-black">
      <div className="max-w-[1140px] mx-auto px-3 ">
        <h1 className=" text-[44px] sm:text-[56px] md:text-[64px] font-normal leading-[108%] font-AzoSans text-[#fff] text-center">
          MapCard
        </h1>
        <div className="flex flex-row flex-wrap -mx-3 justify-center pt-[54px] pb-[54px]">
          {Array.map((e) => (
            <MapCard
              key={e.id}
              svg={e.svg}
              Heading={e.Heading}
              Phara={e.Phara}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Utilities;
