import whatsapp_blue from "../assets/whatsapp_blue.svg";
import doctor_contact from "../assets/doctor_contact.jpeg";
import play from "../assets/play.svg";
import List from "./List";
function Contact() {
  return (
    <div id="contact" className="flex flex-col justify-center bg-[#F9FBFC] ">
      <div className=" md:h-screen flex flex-col items-center justify-center">
        <p className="text-[#00BFA5] py-10 text-center text-[22px] mb-1 font-[500] ">
          Book an appoinment
        </p>
        <div className=" mx-[10%] flex flex-col justify-center px-[5%] md:px-[83px] py-10 md:py-[62px]  button-gradient rounded-[32px] ">
          <p className=" text-[24px] md:text-[27px] font-[600] text-white text-center">
            {" "}
            Schedule a virtual or presential appointment today
          </p>
          <p className="text-[16px] text-white text-center text-opacity-[0.8] px-[10%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            egestas viverra turpis habitant eu sociis fermentum felis.
          </p>
          <div className="flex justify-center">
            <button className="flex gap-[6px] w-auto mt-10 py-3 px-[28px] bg-white rounded-full text-[18px] font-medium text-white ">
              <img src={whatsapp_blue} alt="" className="w-[24px] h-[24px] " />{" "}
              <span className="text-[#3A8EF6] ">Book an Appoinment</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[18px] pt-12 md:pt-0 justify-center items-center mx-[10%] ">
        <p className="text-[#00BFA5] text-center text-[22px]  mb-1 font-[500] ">
          Why Dr. Matthew Anderson?
        </p>
        <div className=" relative w-full">
          <img
            src={doctor_contact}
            alt=""
            className="h-[250px] md:h-[500px] w-full  object-cover rounded-[32px] "
          />
          <div className="absolute flex items-center justify-center bg-[#1678F2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-[18px] pl-[20px] pr-[16px]  rounded-full cursor-pointer ">
            <img
              src={play}
              alt=""
              className=" size-[30px] md:size-[50px] object-cover "
            />
          </div>
        </div>
        <p className="text-[30px] font-[700] text-[#031432] ">
          A dedicated doctor with the core mission to help
        </p>
        <p className="text-[16px] text-[#6C87AE] text-center px-4">
          orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
          nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis nunc
          elementum. Tellus quam mauris aenean turpis vulputate sodales nullam
          lobortis. Vulputate tortor tincidun.
        </p>
      </div>
      <div className="pt-[60px] pb-[100px] px-[10%] ">
        <List />
      </div>
    </div>
  );
}

export default Contact;
