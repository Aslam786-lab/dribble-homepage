import { designersData } from "../../db/designers";
import DesignerSlideItem from "./DesignerSlideItem";

function HeroSection() {
  return (
    <section className="text-center py-20">
      <div className="max-w-3xl mx-auto flex flex-col justify-between">
        <span className="animate-coloranimation m-auto flex items-center justify-center w-80 h-10 py-1 px-3 rounded-full text-base font-medium source">
          Over 3 million ready-to-work creatives!
        </span>
        <h1 className=" font-semibold source mt-10 text-7xl">
          The world's destination for design
        </h1>
        <p className="text-lg mt-10">
          Get inspired by the work of millions of top-rated designers & agencies
          around the world.
        </p>
        <button className="mt-10 px-4 py-3 bg-black text-white rounded-full hover:bg-[#565564] self-center w-32 h-14 text-center">
          Get started
        </button>
      </div>

      <div className="relative flex overflow-x-hidden">
        <ul className="py-20 inline-flex  animate-infinitescroll">
          {designersData.map((item, index) => (
            <DesignerSlideItem item={item} index={index} />
          ))}
        </ul>
        <ul className="absolute  py-20 inline-flex  animate-infinitescroll2">
          {designersData.map((item, index) => (
            <DesignerSlideItem item={item} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HeroSection;
