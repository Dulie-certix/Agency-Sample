import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full">
        <nav className="font-Poppins items-center flex justify-between py-4 px-auto">
          <div className="text-[#1090CB] 2xl:text-[31px] xl:text-[29px]  lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] font-bold 2xl:ml-[60px] xl:ml-[40px] sm:ml-[30px] ml-[10px]">
            LOGO
          </div>

          <div className="hidden md:flex 2xl:pl-[600px] xl:pl-[500px] lg:pl-[400px] md:pl-[250px] sm:pl-[200px] pl-[100px] ">
            <a href="#" className="hover:text-[#1090CB]">
              <div className="w-[8px] h-[8px] bg-[#08D3BB] border border-[#08D3BB] rounded-full"></div>
            </a>

            <div className="flex items-center 2xl:space-x-[88px] xl:space-x-[83px] lg:space-x-[40px] md:space-x-[30px] items-center">
              <a
                href="#"
                className="hover:text-black text-[#1090CB] 2xl:text-[17px] xl:text-[16px] xm:text-[15px] lg:text-[14px] md:text-[13px]"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-[#1090CB] 2xl:text-[17px] xl:text-[16px] xm:text-[15px] lg:text-[14px] md:text-[13px]"
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-[#1090CB] 2xl:text-[17px] xl:text-[16px] xm:text-[15px] lg:text-[14px] md:text-[13px]"
              >
                Services
              </a>
              <a
                href="#"
                className="hover:text-[#1090CB] 2xl:text-[17px] xl:text-[16px] xm:text-[15px] lg:text-[14px] md:text-[13px]"
              >
                Blog
              </a>
            </div>
          </div>

          <button className="hidden md:block 2xl:w-[133px] xl:w-[125px] xm:w-[115px] lg:w-[105px] md:w-[95px] 2xl:h-[44px] xl:h-[41px] xm:h-[39px] lg:h-[36px] md:h-[34px] bg-[#1090CB] text-white rounded-[6px] 2xl:text-[14px] xl:text-[13px]  lg:text-[11px] md:text-[10px] ml-[0px] mr-[40px]">
            Contact us
          </button>

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
              <a href="#" className="text-[#1090CB] text-[16px]">
                Home
              </a>
              <a href="#" className="hover:text-[#1090CB] text-[16px]">
                About
              </a>
              <a href="#" className="hover:text-[#1090CB] text-[16px]">
                Services
              </a>
              <a href="#" className="hover:text-[#1090CB] text-[16px]">
                Blog
              </a>
              <button className="w-full h-[41px] bg-[#1090CB] text-white rounded-[6px] text-[13px] px-4">
                Contact us
              </button>
            </div>
          </div>
        )}

        <hr className="w-full border-[#C4C4C4] " />
      </div>
    </div>
  );
}