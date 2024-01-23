import Navbar from "./Navbar";
import Hero from "./Hero";
function Home() {
  return (
    <div className=" flex flex-col w-full pb-[100px] bg-[#F9FBFC] rounded-[32px] ">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
