import whatsapp from "../assets/whatsapp.svg";
function ServiceCard({ service }) {
  return (
    <div className="flex flex-col gap-[10px]   w-[300px] md:w-[320px] p-[25px] md:p-[32px] bg-white rounded-[24px] shadow-sm ">
      <img
        src={service.picture}
        alt=""
        className="w-[200px] h-[200px] object-cover mx-auto"
      />
      <p className=" text-[24px] font-[500] ">{service.name}</p>
      <p className="text-[14px] text-[#6C87AE] ">
        Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet
        iTristique id nibh lobortis nunc
      </p>
      <button className="flex gap-[6px] w-full py-3 px-[28px] button-gradient rounded-full text-[16px] font-medium text-white ">
        <img src={whatsapp} alt="" className="w-[24px] h-[24px] " />{" "}
        <span>Book an Appoinment</span>
      </button>
    </div>
  );
}

export default ServiceCard;
