import React from "react";
import k1 from "../../image/koleksiyon1.jpg";
import k2 from "../../image/koleksiyon2.jpg";
import k3 from "../../image/koleksiyon3.jpg";
import k4 from "../../image/ck4.jpg";
export default function Koleksionlar() {
  const array = [k1, k2, k3, k4];
  return (
    <div className="w-9/12 m-auto mb-10">
      <p className="font-extrabold text-center text-4xl mt-10 mb-5">Koleksiyonlarımız</p>
      <div className="flex">
        {array.map((i) => (
          <div className="w-1/4">
            <img src={i} alt="#" />
          </div>
        ))}
      </div>
    </div>
  );
}
