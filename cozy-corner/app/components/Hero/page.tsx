import Carousel from "../Carousel/Index";
import { Index } from "../Nav";
import BlobAnimation from "./BlogAnimation";

export function Hero() {
  return (
    <div className="relative h-[120vh] px-20">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('./header_image.jpg')",
        }}
      ></div>

      {/* Semi-transparent overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#475a57]/95"></div>
      <div className="relative z-[2] pt-10">
        <Index />
      </div>
      {/* Content goes here */}
      <div className="relative z-[2] h-full flex pt-10">
        <div className="w-[50%] absolute z-[4] text-white flex flex-col justify-center pt-10">
          <div className="absolute top-[-150px] left-[-170px]">
            <BlobAnimation />
          </div>
          <h2 className="text-9xl">The Cozy Corner</h2>
          <p className="text-lg">From check-in to chill out</p>
        </div>
        <div className="min-w-[60%] absolute right-0">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
