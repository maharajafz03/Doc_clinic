import { NAV_LINKS } from "../utils";
import messageCircle from "../assets/message-circle.svg";
import group3 from "../assets/Group 3.svg";
import menu_burger from "../assets/mingcute_menu-fill.png";
import { useState } from "react";
import classNames from "classnames";

function Navbar() {
  const [showMobileNav, setShowMobilenav] = useState(false);

  const toogleMobileNav = () => {
    setShowMobilenav(!showMobileNav);
  };
  const scrollToAnchor = (anchorId) => {
    const anchor = document.getElementById(anchorId);
    if (anchor) {
      const offsetTop = anchor.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="relative flex items-center justify-around px-auto md:pt-[25px] bg-[#F2F7FF] overflow-hidden ">
      <div className="relative font-sora text-[32px] pr-[40px] pt-[9px] doctor-gradient text-transparent font-[600] leading-normal">
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
            <button onClick={() => scrollToAnchor(item.url)}>
              {item.link}
            </button>
          </li>
        ))}
      </ul>

      <button className="hidden lg:flex gap-[10px] py-3 px-[28px] button-gradient rounded-full text-[18px] font-medium text-white ">
        <img src={messageCircle} alt="" className="w-[24px] h-[24px] " />{" "}
        <span>Book Now</span>
      </button>
      <span
        onClick={toogleMobileNav}
        className="material-icons cursor-pointer md:hidden hover:bg-blue-100 rounded-full text-[30px] text-[#3A8EF6]  p-1"
      >
        menu
      </span>
      {/* Moobile nav */}
      <ul
        className={classNames(
          showMobileNav ? "right-0" : "-right-[100vw]",
          "md:hidden fixed duration-500 ease-in-out top-0 z-[200] flex flex-col items-center justify-center gap-[50px] h-full w-screen bg-[#3A8EF6] text-white ",
        )}
      >
        {NAV_LINKS.map((item, index) => (
          <li key={index} className="text-[22px]   hover:text-gray-300 ">
            <button
              onClick={() => {
                scrollToAnchor(item.url);
                toogleMobileNav();
              }}
            >
              {item.link}
            </button>
          </li>
        ))}
        <span
          onClick={toogleMobileNav}
          className="absolute top-8 right-9 material-icons flex justify-center items-center p-2 bg-white text-[#3A8EF6] rounded-full cursor-pointer"
        >
          close
        </span>
      </ul>
    </nav>
  );
}

export default Navbar;
