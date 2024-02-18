import CustomerTestimony from "./CustomerTestimonial";
import { customers } from "../utils";
import Carousel from "./Carousel";
import chevron from "../assets/chevron-left.svg";
function Customers() {
  return (
    <div className="flex flex-col py-[100px] gap-10 md:px-[5%] bg-[#F2F7FF] ">
      <div className="flex flex-col gap-5 px-[5%] md:px-[15%] ">
        <p className="text-center font-[600] text-[25px] md:text-[30px] text-[#031432] ">
          What our great customers say about
          <br /> Dr. Matthew Anderson
        </p>

        <p className="text-[16px] text-[#6C87AE] text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
      <div className="relative hidden  md:flex justify-center flex-wrap gap-5">
        {customers.map((item, index) => (
          <CustomerTestimony key={index} customer={item} />
        ))}
      </div>
      <Carousel
        data={customers.map((item, index) => (
          <CustomerTestimony key={index} customer={item} />
        ))}
        lastIndex={3}
      />
    </div>
  );
}

export default Customers;
