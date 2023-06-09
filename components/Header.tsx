import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [textColor, settextColor] = useState("text-black-800");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setBgColor("bg-[#09327c]");
        settextColor("text-white");
      } else {
        setBgColor("bg-teal-50");
        settextColor("text-black-800");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-30  md:bg-opacity-90 transition duration-300 ease-in-out ${bgColor}`}
    >
      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <Link
            href="/"
            className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
          >
            <h1
              className={`text-4xl Avenir tracking-tighter  md:text-4x1 lg:text-3xl ${textColor}`}
            >
              TVBS 實習生計畫
            </h1>
          </Link>
          <button
            className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191919"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <nav className="flex-col flex-grow ">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="  https://www.youtube.com/@TVBSNEWS01"
                  className="font-medium text-gray-600 hover:text-gray-900 px-1 py-3 flex items-center transition duration-150 ease-in-out hover:text-[17px]"
                >
                  <Image
                    className=""
                    alt="hug"
                    src="/images/Youtube-1.png"
                    width={50}
                    height={50}
                  ></Image>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/tvbslivenews/"
                  className="font-medium text-gray-600 hover:text-gray-900 px-1 py-3 flex items-center transition duration-150 ease-in-out hover:text-[17px]"
                >
                  <Image
                    className=""
                    alt="ig"
                    src="/images/Instagram-1.png"
                    width={50}
                    height={50}
                  ></Image>
                </Link>
              </li>
              <li>
                <Link
                  href="https://zh-tw.facebook.com/tvbsfb/"
                  className="font-medium text-gray-600 hover:text-gray-900 px-1 py-3 flex items-center transition duration-150 ease-in-out hover:text-[17px]"
                >
                  <Image
                    className=""
                    alt="facebook"
                    src="/images/Facebook-1.png"
                    width={50}
                    height={50}
                  ></Image>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className={`font-medium ${textColor} hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out hover:text-[17px]`}
                >
                  加入我們
                </Link>
              </li>
              <li>
                <Link
                  href="https://digital.tvbs.com.tw/"
                  className={`font-medium ${textColor} hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out hover:text-[17px]`}
                >
                  關於我們
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
