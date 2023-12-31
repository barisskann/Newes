import React from "react";
import img from "../image/siyah_logo-removebg-preview.png";
import {
  kategoriler,
  kurumsal,
  merkezAdres,
  kvkk,
  merkezTel,
  fabrikaAdres,
  fabrikaTel,
  info,
  email,
} from "../../Data/Data";
export default function Footer() {
  return (
    <div className="bg-gray-800   text-white ">
      <div className="w-8/12 m-auto  border-b-2  pb-5  ">
        <div className="flex max-md:block max-md:text-center">
          <div className="flex-1  ">
            <p className="font-semibold text-lg mt-10 mb-3 max-md:pt-5 ">Site Haritası</p>
            <p>
              {kategoriler.map((i) => (
                <div className="mt-2">{i.kategori}</div>
              ))}
            </p>
          </div>  
          <div className="flex-1">
            <p className="font-semibold text-lg mt-10 mb-3 max-md:mt-5">Kurumsal</p>
            <div>
              {kurumsal.map((i) => (
                <div className="mt-2">{i.tur}</div>
              ))}
            </div>
          </div>
          <div className="flex-1 ">
            <p className="font-semibold text-lg mt-10 mb-3 max-md:mt-5  ">Merkez</p>
            <p className="w-3/4 max-md:w-full">{merkezAdres}</p>
            <p className="font-bold text-yellow-500 mt-2 ">{merkezTel}</p>
            <p className="font-semibold text-lg mt-5 mb-3  ">Fabrika</p>
            <p>{fabrikaAdres}</p>
            <p className=" font-bold text-yellow-500 mt-2">{fabrikaTel}</p>
            <p className="mt-5 text-yellow-500 font-bold">{info}</p>
            <p className="mt-2  text-yellow-500 font-bold">{kvkk}</p>
          </div>
        </div>
        <div className="flex items-center max-md:w-full border-t-2 mt-24 max-md:mt-10 max-md:block">
          <div>
            <img className="max-md:w-full" src={img}></img>
          </div>
          <div className="text-center ml-12 max-md:ml-0">
            <p className="text-3xl mb-7">newes@gmail.com</p>
            <p>© Newes Tekstil, 2021 Can Tekstil bir Can Group kuruluşudur.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
