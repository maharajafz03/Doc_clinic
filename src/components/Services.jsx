import whatsapp from "../assets/whatsapp.svg";
import doctor_photo from "../assets/doctor_photo.jpeg";
import ServiceCard from "./ServiceCard";
import services_image from "../assets/Visual.png";
import { SERVICES_DATA } from "../utils";
function Services() {
  return (
    <div className="flex flex-col items-center justify-center gap-[124px] w-full bg-[#F2F7FF] pb-[100px] pt-12 md:pt-0 ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-[50px] w-full md:h-screen px-[10%]">
        <div className="flex flex-col gap-[14px] md:w-1/2  ">
          <p className="text-[22px] text-[#00BFA5] ">services </p>
          <p className="text-[32px] font-medium text-[#031432] ">
            Experienced in multiple medical pactices
          </p>
          <p className="text-[16px] text-[#6C87AE] ">
            rem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
            nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis
            nunc elementum.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="flex gap-[10px] w-auto py-3 px-[28px] button-gradient rounded-full text-[18px] font-medium text-white ">
              <img src={whatsapp} alt="" className="w-[24px] h-[24px] " />{" "}
              <span>Book an Appoinment</span>
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={services_image}
            alt=""
            className=" object-cover rounded-[32px] "
          />
        </div>
      </div>
      <div className="w-full flex gap-[36px] flex-wrap items-center justify-center px-[5%] ">
        {SERVICES_DATA.map((item, index) => (
          <ServiceCard key={index} service={item} />
        ))}
      </div>
    </div>
  );
}

export default Services;
