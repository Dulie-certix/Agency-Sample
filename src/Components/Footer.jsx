import { useState } from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <section id="footer" className=" w-full bg-white font-poppins  ">
        <div className="w-full 2xl:pt-[93px] xl:pt-[87px] lg:pt-[65px] md:pt-[35px] sm:pt-[45px] pt-[35px] sm:pl-[50px] flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-4  xl:gap-8 md:gap-6 sm:gap-6 mb-8 px-4 text-center sm:text-left">
            <div className="flex flex-col">
              <h3 className="2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] font-[700] text-[#00329B] mb-4">
                LOGO
              </h3>
              <p className="2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] font-[400] text-[#515151] mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] font-[400] text-[#515151] py-6">
                @Lorem
              </p>
            </div>

            <div>
              <h3 className="2xl:text-[18px] xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] font-[500] text-black  mb-4">
                About us
              </h3>
              <div className="2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] font-[400] text-[#515151] leading-[186%] space-y-2">
                <p>Lorem</p>
                <p>Portfolio</p>
                <p>Careers</p>
                <p>Contact us</p>
              </div>
            </div>

            <div>
              <h3 className="2xl:text-[18px] xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] font-[500] text-black mb-4">
                Contact us
              </h3>
              <p className="2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] font-[400] text-[#515151] mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] font-[400] text-[#515151] mb-4">
                +908 89097 890
              </p>
            </div>
            <div className="flex flex-col justify-center  flex-row mt-auto md:pt-[0px] sm:pt-[170px]">
              <div className="grid grid-cols-4 gap-2 sm:flex justify-end md:ml-[0px] sm:ml-[-600px] ">
                <img
                  src={facebook}
                  alt="fb"
                  className="2xl:w-[80px] xl:w-[72px] lg:w-[68px] md:w-[56px] sm:w-[48px] w-[48px] 2xl:h-[80px] xl:h-[72px] lg:h-[68px] md:h-[56px] sm:h-[48px] h-[48px]"
                />
                <img
                  src={twitter}
                  alt="twit"
                  className="2xl:w-[80px] xl:w-[72px] lg:w-[68px] md:w-[56px] sm:w-[48px] w-[48px] 2xl:h-[80px] xl:h-[72px] lg:h-[68px] md:h-[56px] sm:h-[48px] h-[48px]"
                />
                <img
                  src={insta}
                  alt="insta"
                  className="2xl:w-[80px] xl:w-[72px] lg:w-[68px] md:w-[56px] sm:w-[48px] w-[48px] 2xl:h-[80px] xl:h-[72px] lg:h-[68px] md:h-[56px] sm:h-[48px] h-[48px]"
                />
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="2xl:w-[80px] xl:w-[72px] lg:w-[68px] md:w-[56px] sm:w-[48px] w-[48px] 2xl:h-[80px] xl:h-[72px] lg:h-[68px] md:h-[56px] sm:h-[48px] h-[48px]"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full border-[#D2D2D2] border-[0.8px] mb-6" />

        <div className="text-center pb-6">
          <p className="2xl:text-[14px] xl:text-[13px] lg:text-[11px] md:text-[10px] sm:text-[9px] text-[8px] font-[400] leading-[191%] text-[#686868]">
            Copyright ® 2021 Lorem All rights Reserved
          </p>
        </div>
      </section>
    </div>
  );
}