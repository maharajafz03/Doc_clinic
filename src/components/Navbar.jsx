import { NAV_LINKS } from "../utils";
import messageCircle from "../assets/message-circle.svg";
import group3 from "../assets/Group 3.svg";
import menu_burger from "../assets/mingcute_menu-fill.png";
import { useRef } from "react";
function Navbar() {
  const about = useRef(null);
  const services = useRef(null);
  const contact = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <nav className="flex items-center justify-around px-auto md:pt-[25px] bg-[#F2F7FF] rounded-t-[32px]">
      <div className="relative text-[32px] pr-[40px] pt-[9px] doctor-gradient text-transparent font-bold leading-normal">
        Doctor{" "}
        <div className="absolute  right-0 top-0">
          <img
            src={group3}
            alt=""
            className="h-[50px] w-[50px]  object-cover"
          />
        </div>
      </div>
      <ul className="invisible lg:visible md:flex items-center gap-[40px] ">
        {NAV_LINKS.map((item, index) => (
          <li
            key={index}
            className="text-[16px] text-[#6C87AE] first-of-type:text-[#3A8EF6] hover:text-[#3A8EF6] "
          >
            <button onClick={() => scrollToRef(item.url)}>{item.link}</button>
          </li>
        ))}
      </ul>

      <button className="hidden lg:flex gap-[10px] py-3 px-[28px] button-gradient rounded-full text-[18px] font-medium text-white ">
        <img src={messageCircle} alt="" className="w-[24px] h-[24px] " />{" "}
        <span>Book Now</span>
      </button>
      <img src={menu_burger} alt="" className="cursor-pointer hidden" />
    </nav>
  );
}

export default Navbar;
