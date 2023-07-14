import React from "react";
import img from "../../image/se2.png";
export default function Sürdürebilirlik() {
  return (
    <div>
      <div className="s-img h-96">
        <div className="flex items-center justify-center h-full flex-col gap-y-3">
          <p className="text-6xl text-white font-bold shadow-2xl shadow-white">
            SÜRDÜREBİLİRLİK
          </p>
          <p className="text-6xl text-white font-bold shadow-2xl shadow-white">
            FORMÜLÜMÜZ
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-center mt-9">
          <img src={img} alt="#"></img>
        </div>{" "}
        <p className="text-center font-bold text-3xl mt-5">
          Başka bir dünya yok!
        </p>
        <div className="w-9/12 m-auto"></div>
      </div>
    </div>
  );
}
