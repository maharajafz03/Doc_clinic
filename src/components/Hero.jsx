import List from "./List";
import hero_image from "../assets/hero_image.png";
import messageCircle from "../assets/message-circle.svg";
import plus from "../assets/plus.png";
function Hero() {
  return (
    <div className="relative flex flex-col justify-center items-center pt-[80px] pb-[150px] px-[10%] bg-[#F2F7FF] rounded-b-[32px]">
      <div className="flex  items-center gap-20">
        <div className="flex flex-col  flex-1 gap-[24px] ">
          <p className="text-[#00BFA5] text-[22px] font-[500] ">
            Dr. Matthew Anderson
          </p>
          <p className="font-bold text-[48px] leading-[120%]  ">
            A dedicated doctor you can trust
          </p>
          <p className="text-[16px] text-[#6C87AE] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            eget vel, nunc nulla feugiat. Metus ut.
          </p>
          <div>
            <button className="flex gap-[10px] py-3 px-[28px] button-gradient rounded-full text-[18px] font-medium text-white ">
              <img src={messageCircle} alt="" className="w-[24px] h-[24px] " />{" "}
              <span>Book an Appoinment</span>
            </button>
          </div>
        </div>
        <div className="relative flex button-gradient w-[400px] h-[400px] rounded-full">
          <img
            src={hero_image}
            alt=""
            className="absolute w-full h-full object-cover rounded-b-full"
          />
          <img
            src={plus}
            alt=""
            className="absolute object-cover w-[70px] h-[70px] -top-7 left-5 "
          />
          <img
            src={plus}
            alt=""
            className="absolute object-cover w-[60px] h-[60px] top-1/2 -left-14"
          />
          <img
            src={plus}
            alt=""
            className="absolute object-cover bottom-0 right-12"
          />
          <img
            src={plus}
            alt=""
            className="absolute object-cover w-[30px] h-[30px] -right-3 top-16"
          />
        </div>
      </div>
      <div className="absolute w-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
        <List />
      </div>
    </div>
  );
}

export default Hero;
