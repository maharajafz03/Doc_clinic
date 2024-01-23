import CustomerTestimony from "./CustomerTestimonial";
import { customers } from "../utils";
import chevron from "../assets/chevron-left.svg";
function Customers() {
  return (
    <div className="flex flex-col py-[100px] gap-10 px-[10%] bg-[#F2F7FF] ">
      <div className="flex flex-col gap-5 px-[15%] ">
        <p className="text-center font-[600] text-[30px] text-[#031432] ">
          What our great customers say about Dr. Matthew Anderson
        </p>

        <p className="text-[16px] text-[#6C87AE] text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
      <div className="relative flex justify-center flex-wrap gap-5">
        {customers.map((item, index) => (
          <CustomerTestimony key={index} customer={item} />
        ))}
        <img
          src={chevron}
          alt=""
          className="absolute top-1/2 -translate-y-1/2 left-0"
        />
        <img
          src={chevron}
          alt=""
          className="absolute top-1/2 -translate-y-1/2 right-0 rotate-[180deg] "
        />
      </div>
    </div>
  );
}

export default Customers;
