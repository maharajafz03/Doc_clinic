import Navbar from "./Navbar";
import Hero from "./Hero";
import { useRef } from "react";
function Home() {
  const home = useRef(null);
  return (
    <div
      id="home"
      className=" flex flex-col w-full pb-[100px] bg-[#F9FBFC] rounded-[32px] "
    >
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
