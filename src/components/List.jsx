import check from "../assets/check-circle.svg";
import clock from "../assets/clock.svg";
import medicalsymbol_white from "../assets/Medical Symbol_white.svg";
function List() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-[24px] ">
      <div className="flex items-center gap-2   bg-[#1678F2] rounded-[12px] px-[28px] mx-auto py-[16px] text-[16px] font-[600] text-white ">
        <img src={clock} alt="" className="w-[32px] h-[32px] object-cover " />
        <span>+15 years of experience</span>
      </div>
      <div className="flex items-center gap-2 bg-[#1678F2] rounded-[12px] px-[28px] py-[16px] mx-auto text-[16px] font-[600] text-white ">
        <img src={check} alt="" className="w-[32px] h-[32px] object-cover " />
        <span>Urgent 24 hour service</span>
      </div>
      <div className="flex items-center gap-2 bg-[#1678F2] rounded-[12px] px-[28px] py-[16px] mx-auto text-[16px] font-[600] text-white ">
        <img
          src={medicalsymbol_white}
          alt=""
          className="w-[32px] h-[32px] object-cover "
        />
        <span></span>High quality care
      </div>
    </div>
  );
}

export default List;
