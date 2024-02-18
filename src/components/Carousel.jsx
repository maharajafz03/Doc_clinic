import { useState } from "react";
import chevron_left from "../assets/chevron-left.svg";

function Carousel({ data, lastIndex }) {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    if (index !== lastIndex) {
      setIndex((prev) => prev + 1);
      console.log(lastIndex);
    }
  };
  const handlePrev = () => {
    if (index !== 0) {
      setIndex((prev) => prev - 1);
    }
  };
  return (
    <div className="relative w-full overflow-hidden md:hidden">
      <div className="absolute z-10 w-full flex justify-between top-1/2 -translate-y-1/2 ">
        <img
          src={chevron_left}
          onClick={handlePrev}
          alt=""
          className="cursor-pointer  rounded-full"
        />
        <img
          src={chevron_left}
          onClick={handleNext}
          alt=""
          className="rotate-[180deg] cursor-pointer"
        />
      </div>
      <div
        style={{ transform: `translateX(-${index * 100}vw)` }}
        className="w-full flex flex-row   gap-[calc(100vw_-300px)] px-[calc((100vw_-300px)/2)] ease-in-out duration-700 "
      >
        {data?.map((item, index) => (
          <div>{item} </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
