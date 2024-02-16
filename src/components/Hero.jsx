import List from "./List";
import hero_image from "../assets/Object.png";
import messageCircle from "../assets/message-circle.svg";
import plus from "../assets/plus.png";

function Hero() {
  return (
    <div className="relative flex flex-col justify-center items-center md:pt-[80px] pb-[150px] px-[5%] md:px-[10%] bg-[#F2F7FF] rounded-b-[32px]">
      <div className="flex flex-col-reverse lg:flex-row  items-center gap-5 md:gap-20">
        <div className="flex flex-col text-center md:text-start  flex-1 gap-[24px] ">
          <p className="text-[#00BFA5] text-[22px] font-[500] ">
            Dr. Matthew Anderson
          </p>
          <p className="font-bold text-[32px] md:text-[48px] leading-[120%]  ">
            A dedicated doctor you can trust
          </p>
          <p className="text-[16px] text-[#6C87AE] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            eget vel, nunc nulla feugiat. Metus ut.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="flex gap-[10px] py-3 px-[28px] button-gradient rounded-full text-[18px] font-medium text-white ">
              <img src={messageCircle} alt="" className="w-[24px] h-[24px] " />{" "}
              <span>Book an Appoinment</span>
            </button>
          </div>
        </div>
        <div className="relative flex flex-1  ">
          <img src={hero_image} alt="" className="w-full  h-full object-cover" />
        </div>
      </div>
      <div className="md:absolute md:w-full md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2">
        <List />
      </div>
    </div>
  );
}

export default Hero;
