import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";

export default function Video() {
  const [isMobile, setIsMobile] = useState(false);

  const checkWindowSize = () => {
    setIsMobile(window.innerWidth <= 768); // veya tercih ettiğiniz bir genişlik değeri
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);
  return (
    <div className="w-9/12 m-auto ">
      <p className="text-center font-bold text-2xl mt-5 mb-3 text-red-700 ">
        Tanıtım videomuz
      </p>
      <div className="w-full max-md:h-auto ">
        <ReactPlayer
          controls
          className="w-full h-full"
          width={""}
          height={isMobile ? "" : "600px"}
          playsinline
          url="https://youtu.be/aLRletzlJ-4?list=RDNHKultWTFLg&t=127"
        />
      </div>
    </div>
  );
}
