import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../image/Logo.PNG";
import { kategoriler, turler } from "../../Data/Data";
import { Link, NavLink, useLocation } from "react-router-dom";
export default function Navbar() {
  const [check, setCheck] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(
    currentPath == ""
      ? 1
      : turler.find((i) => i.tur.split(" ").join("") == currentPath) ==
        undefined
      ? kategoriler.find((i) => i.kategori.split(" ").join("") == currentPath)
          .id
      : turler.find((i) => i.tur.split(" ").join("") == currentPath).kategoriId
  );

  const [isMobile, setIsMobile] = useState(false);
  const handleMouseEnter = (i) => {
    if (isMobile) {
      return;
    } else {
      setCheck(i.id);
    }
  };

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
    <div className="bg-white w-full fixed  max-md:h-[100px] h-[128px] z-10">
      <div className=" fixed max-md:w-full max-md:m-auto max-md:block flex   items-center -translate-x-1/2 left-1/2  bg-white  ">
        <div className="max-md:flex max-md:w-9/12 max-md:m-auto max-md:justify-between max-md:items-center">
          <div className="max-md:w-24 w-32">
            <Link
              onClick={() => {
                setActive(1);
              }}
              to="/"
            >
              <img className="" alt="#" src={logo}></img>
            </Link>
          </div>
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="max-md:block max-md:border max-md:p-2 max-md:rounded-md max-md:hover:border-black  hidden"
          >
            <GiHamburgerMenu className="text-3xl" />
          </div>
        </div>
        <div className={`${isOpen ? "max-md:block " : "max-md:hidden"}`}>
          <div className=" text-start  ">
            <div
              className={`max-md:block flex rounded-sm gap-x-4 max-md:text-center  ${
                check ? "" : "  "
              } `}
            >
              {kategoriler.map((y, x) => (
                <div
                  className={`w-full  `}
                  onMouseEnter={() => handleMouseEnter(y)}
                  onMouseLeave={() => {
                    if (isMobile) {
                      return;
                    }
                    setCheck("");
                  }}
                  onClick={() => {
                    if (isMobile && check != y.id) {
                      setCheck(y.id);
                    } else {
                      if (isMobile) {
                        setActive(y.id);
                        setCheck("");
                      }
                    }
                  }}
                >
                  {turler.filter((item) => item.kategoriId == y.id).length >
                  0 ? (
                    <div
                      className={` max-md:font-semibold font-bold px-4    text-[16px] py-2`}
                      onClick={() => {
                        setActive(y.id);
                      }}
                    >
                      <span
                        className={`button ${
                          active == y.id ? "text-red-700" : ""
                        }`}
                      >
                        {y.kategori}
                      </span>
                    </div>
                  ) : (
                    <NavLink
                      onClick={() => {
                        if (y.kategori === "Anasayfa") {
                          setIsOpen(false);
                        }
                        setActive(y.id);
                      }}
                      to={y.kategori == "Anasayfa" ? "/" : y.kategori}
                      className={`flex max-md:font-semibold  font-bold px-4 max-md:flex max-md:justify-center   ${
                        active == y.id ? "text-red-700 " : "text-black"
                      }   ${y.w}  text-[16px] py-2`}
                    >
                      <span className="button max-md:text-center">
                        {y.kategori}
                      </span>
                    </NavLink>
                  )}
                  {check && (
                    <div className=" flex max-md:z-20 max-md:text-center max-md:w-full flex-col rounded-md fixed bg-white w-60 text-start ">
                      {turler
                        .filter((i) => y.id == check && i.kategoriId == check)
                        .map((i) => (
                          <NavLink
                            onClick={() => {
                              setActive(y.id);
                              setIsOpen(false);
                            }}
                            to={i.tur.split(" ").join("")}
                            className=" hover:bg-gray-100   rounded-md px-4 py-4 font-semibold text-gray-500"
                          >
                            <span className="button">{i.tur}</span>
                          </NavLink>
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
