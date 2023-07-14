import React from "react";
import ReactPlayer from "react-player/youtube";

export default function Video() {
  return (
    <div className="w-9/12 m-auto">
     <p className="text-center font-bold text-2xl mt-5 mb-3 text-red-700 ">Tanıtım videomuz</p>
      <div className="w-full">
        <ReactPlayer controls className="w-full" width={""} height={600} playsinline url="https://youtu.be/aLRletzlJ-4?list=RDNHKultWTFLg&t=127"/>
      </div>
    </div>
  );
}
