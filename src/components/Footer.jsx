import group3 from "../assets/Group 3.svg";
import youtube from "../assets/youtube.svg";
import facebook from "../assets/facebook.svg";
import whatsapp from "../assets/whatsapp.svg";
function Footer() {
  return (
    <div className=" px-[10%] bg-[#1678F2]  py-[20px] md:py-[50px]  ">
      <div className="flex flex-col md:flex-row gap-10 md:justify-between py-[20px] md:py-[50px] border-b border-white">
        <div className="flex flex-col gap-3 w-[300px] ">
          <div className="flex">
            <div className="relative text-[32px] pr-[40px] pt-[9px] t text-white font-sora font-bold leading-normal">
              Doctor{" "}
              <div className="absolute  right-0 top-0">
                <img
                  src={group3}
                  alt=""
                  className="h-[50px] w-[50px]  object-cover"
                />
              </div>
            </div>
          </div>
          <p className="font-[300] text-white text-[16px] italic ">
            8 W. South St.Buford, GA 30518 5Briarwood LaneVienna, VA 22180 RER
          </p>
          <div className="flex gap-5">
            <img
              src={youtube}
              alt=""
              className="h-[32px] w-[32px] object-cover "
            />
            <img
              src={facebook}
              alt=""
              className="h-[32px] w-[32px] object-cover "
            />
            <img
              src={whatsapp}
              alt=""
              className="h-[32px] w-[32px] object-cover "
            />
          </div>
        </div>
        <ul className="flex flex-col gap-3">
          <li className="font-medium text-[20px] text-white md:pb-3 ">
            Company Info
          </li>
          <li className="font-[300] text-white text-[16px] ">About</li>
          <li className="font-[300] text-white text-[16px] ">Services</li>
          <li className="font-[300] text-white text-[16px] ">Blog</li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="font-medium text-[20px] text-white md:pb-3">
            Book Now
          </li>
          <li className="font-[300] text-white text-[16px] ">Appoinment</li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="font-medium text-[20px] text-white md:pb-3">
            Contact
          </li>
          <li className="font-[300] text-[16px] text-white ">+1 123456789</li>
          <li className="font-[300] text-[16px] text-white ">
            remmcal@mail.com
          </li>
          <li className="font-[300] text-[16px] text-white ">
            Phone: +1 12345678
          </li>
        </ul>
      </div>
      <p className="text-white text-[16px] text-center pt-3 md:pt-10 ">
        © Doctor all rights {new Date().getFullYear()} - Designed by Assaf
      </p>
    </div>
  );
}

export default Footer;
