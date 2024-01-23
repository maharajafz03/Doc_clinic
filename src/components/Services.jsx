import whatsapp from "../assets/whatsapp.svg";
import doctor_photo from "../assets/doctor_photo.jpeg";
import ServiceCard from "./ServiceCard";
import { SERVICES_DATA } from "../utils";
function Services() {
  return (
    <div className="flex flex-col items-center justify-center gap-[124px] w-full bg-[#F2F7FF] pb-[100px] ">
      <div className="flex items-center justify-center gap-[124px] w-full h-screen px-[10%]">
        <div className="flex flex-col gap-[14px] w-1/2  ">
          <p className="text-[22px] text-[#00BFA5] ">services </p>
          <p className="text-[32px] font-medium text-[#031432] ">
            Experienced in multiple medical pactices
          </p>
          <p className="text-[16px] text-[#6C87AE] ">
            rem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
            nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis
            nunc elementum.
          </p>
          <div>
            <button className="flex gap-[10px] w-auto py-3 px-[28px] button-gradient rounded-full text-[18px] font-medium text-white ">
              <img src={whatsapp} alt="" className="w-[24px] h-[24px] " />{" "}
              <span>Book an Appoinment</span>
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={doctor_photo}
            alt=""
            className="w-[486px] h-[405px] object-cover rounded-[32px] "
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
