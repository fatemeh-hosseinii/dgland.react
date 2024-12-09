
import React, { useState } from "react";
import { spinner9 } from "react-icons-kit/icomoon/spinner9";
import { ic_qr_code_twotone } from "react-icons-kit/md/ic_qr_code_twotone";
import { creditCard } from "react-icons-kit/fa/creditCard";
import { book_2 } from "react-icons-kit/ikons/book_2";
import { percent } from "react-icons-kit/fa/percent";
import { location } from "react-icons-kit/oct/location";
import Icon from "react-icons-kit";

const NavbarIteme = ({ navbar }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const iconMapping = {
    part: <Icon className="text-[#cecece]" icon={ic_qr_code_twotone} size={"26px"} />,
    Installment: <Icon className="text-[#cecece]" icon={creditCard} size={"20px"} />,
    magazine: <Icon className="text-[#cecece]" icon={book_2} size={"20px"} />,
    goldsujest: <Icon className="text-[#cecece]" icon={percent} size={"20px"} />,
    location: <Icon className="text-[#cecece]" icon={location} size={"20px"} />,
    company: <Icon className="text-[#cecece]" icon={spinner9} size={"22px"} />,
  };

  return (
    <>


      <div
        className={`lg:flex hidden lg:flex-row lg:space-x-4 justify-around w-full p-3 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {navbar?.map((elem) => {
          if (elem.part_navbar) {
            return elem.part_navbar.map((item) => (
              <div key={item.id} className="flex flex-row items-center p-3 gap-3">
                {iconMapping[item.icon] && (
                  <span className="w-8 flex justify-center text-[#6B6B6B]">
                    {iconMapping[item.icon]}
                  </span>
                )}
                <p className="text-[#6B6B6B]">{item.name}</p>
              </div>
            ));
          }

          const SelectedIcon = elem.icon ? iconMapping[elem.icon] : null;
          return (
            <div key={elem.id} className="flex flex-row items-center p-2">
              {SelectedIcon && (
                <span className="w-8 flex justify-center text-[#6B6B6B]">
                  {SelectedIcon}
                </span>
              )}
              <p className="text-[#6B6B6B]">{elem.name}</p>
            </div>
          );
        })}
      </div>   
      {/* هدر */}
      <div className="container flex lg:hidden justify-between items-center w-full bg-slate-900 p-3 lg:mt-0 mt-5">

      
        
        <div className="relative lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 focus:outline-none"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {!menuOpen ? (
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* منوی موبایل */}
      <div
        className={`fixed inset-y-0 left-0 w-3/4 bg-white shadow-lg z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-500 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <ul className="p-6 space-y-4">
          {navbar?.map((elem) => {
            if (elem.part_navbar) {
              return elem.part_navbar.map((item) => (
                <li key={item.id} className="flex items-center p-3 gap-3">
                  {iconMapping[item.icon]}
                  <span className="text-gray-700">{item.name}</span>
                </li>
              ));
            }

            return (
              <li key={elem.id} className="flex items-center p-3 gap-3">
                {iconMapping[elem.icon]}
                <span className="text-gray-700">{elem.name}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* لایه تیره */}
      {menuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </>
  );
};

export default NavbarIteme;