import { useState, useEffect } from "react";
import Button from "./Button";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { NAV_LINKS } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-90 backdrop-blur-sm z-40 md:hidden"></div>
      )}
      <div className="max-w-[1536px] w-full flex justify-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-sm">
        <div className="w-full">
          <nav className="font-Poppins items-center flex justify-between py-4 px-auto">
            <Logo className="2xl:ml-[60px] xl:ml-[30px] sm:ml-[30px] ml-[10px]" />

            <div className="hidden md:flex items-center ">
              <div className="flex items-start 2xl:space-x-[44px] xl:space-x-[40px] lg:space-x-[20px] md:space-x-[15px] ">
                {NAV_LINKS.map((link) => (
                  <NavLink key={link.name} href={link.href}>
                    {link.name}
                  </NavLink>
                ))}
              </div>

              <a href="#footer">
                <Button
                  variant="primary"
                  className="2xl:w-[133px] xl:w-[125px] xm:w-[115px] lg:w-[105px] md:w-[95px] sm:w-full 2xl:h-[44px] xl:h-[41px] xm:h-[39px] lg:h-[36px] md:h-[34px] 2xl:text-[14px] xl:text-[13px] lg:text-[11px] md:text-[10px] 2xl:mr-[60px] xl:mr-[30px] mr-[20px] 2xl:ml-[60px] xl:ml-[70px] ml-[20px]"
                >
                  Contact us
                </Button>
              </a>
            </div>

            <button
              className="md:hidden text-[#1090CB] text-2xl sm:mr-[30px] mr-[10px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </nav>

          {isOpen && (
            <div className="md:hidden bg-white border-t border-[#C4C4C4] py-4 absolute top-full w-full">
              <div className="flex flex-col space-y-4 px-4 items-center">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.name}
                    href={link.href}
                    className="text-[16px] sm:text-[14px] text-center"
                  >
                    {link.name}
                  </NavLink>
                ))}
                <a href="#footer" className="w-full">
                  <Button
                    variant="primary"
                    className="sm:w-full w-full h-[41px] text-[13px] px-4"
                  >
                    Contact us
                  </Button>
                </a>
              </div>
            </div>
          )}

          <hr className="w-full border-[#C4C4C4] " />
        </div>
      </div>
    </>
  );
}