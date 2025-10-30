import { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { NAV_LINKS } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[1536px] w-full flex justify-center">
      <div className="w-full">
        <nav className="font-Poppins items-center flex justify-between py-4 px-auto">
          <Logo className="2xl:ml-[60px] xl:ml-[30px] sm:ml-[30px] ml-[10px]" />

          <div className="hidden md:flex items-center ">
            <a href="#" className="hover:text-[#1090CB]">
              <div className="w-[8px] h-[8px] bg-[#08D3BB] border border-[#08D3BB] rounded-full flex justify-end mt-[-10px]"></div>
            </a>

            <div className="flex items-start 2xl:space-x-[88px] xl:space-x-[70px] lg:space-x-[40px] md:space-x-[30px]">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  href={link.href}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <a href="#footer">
              <Button
                variant="primary"
                className="2xl:w-[133px] xl:w-[125px] xm:w-[115px] lg:w-[105px] md:w-[95px] 2xl:h-[44px] xl:h-[41px] xm:h-[39px] lg:h-[36px] md:h-[34px] 2xl:text-[14px] xl:text-[13px] lg:text-[11px] md:text-[10px] 2xl:mr-[60px] xl:mr-[30px] mr-[20px] 2xl:ml-[60px] xl:ml-[70px] ml-[20px]"
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
          <div className="md:hidden bg-white border-t border-[#C4C4C4] py-4 ">
            <div className="flex flex-col space-y-4 px-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  href={link.href}
                  className="text-[16px]"
                >
                  {link.name}
                </NavLink>
              ))}
              <a href="#footer">
                <Button
                  variant="primary"
                  className="w-full h-[41px] text-[13px] px-4"
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
  );
}