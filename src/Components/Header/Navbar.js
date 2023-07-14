import React, { useState } from "react";
import logo from "../image/Logo.PNG";
import { kategoriler, turler } from "../../Data/Data";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [check, setCheck] = useState(false);
  const handleMouseEnter = (i) => {
    setCheck(i.id);
  };
  return (
    <div className="bg-white w-full fixed h-[128px] z-10">
      <div className="fixed  flex   items-center -translate-x-1/2 left-1/2  bg-white  ">
        <div className="w-32">
          <Link to="/">
            <img className="" src={logo}></img>
          </Link>
        </div>
        <div className="">
          <div className=" text-start  ">
            <div className={`flex rounded-sm gap-x-4   ${check ? "" : "  "} `}>
              {kategoriler.map((y, x) => (
                <div
                  className={`w-full`}
                  onMouseEnter={() => handleMouseEnter(y)}
                  onMouseLeave={() => {
                    setCheck(false);
                  }}
                >
                  {turler.filter((item) => item.kategoriId == y.id).length >
                  0 ? (
                    <div
                      className={`  font-bold px-4  ${
                        check == y.id ? "text-red-700  " : "text-black"
                      }     text-[16px] py-2`}
                    >
                      <span className="button">{y.kategori}</span>
                    </div>
                  ) : (
                    <Link
                      to={y.kategori == "Anasayfa" ? "/" : y.kategori}
                      className={`flex  font-bold px-4  ${
                        check == y.id ? "text-red-700 " : "text-black"
                      }   ${y.w}  text-[16px] py-2`}
                    >
                      <span className="button">{y.kategori}</span>
                    </Link>
                  )}
                  {check && (
                    <div className=" flex flex-col rounded-md fixed bg-white w-60 text-start ">
                      {turler
                        .filter((i) => y.id == check && i.kategoriId == check)
                        .map((i) => (
                          <Link
                            to={i.tur.split(" ").join("")}
                            className=" hover:bg-gray-100   rounded-md px-4 py-4 font-semibold text-gray-500"
                          >
                            <span className="button">{i.tur}</span>
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
