import { useState } from "react";
import bell from "../assets/bell.png";
import Button from "../Components/Button";

export default function Section3() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center bg-transparent">
      <section className="w-full max-w-screen-2xl mx-auto 2xl:h-[898px] xl:h-[841px] lg:h-[650px] md:h-[650px] h-auto font-poppins 2xl:pt-[211px] xl:pt-[198px] lg:pt-[140px] md:pt-[110px] sm:pt-[80px] pt-[50px] mb-[50px] px-4 relative overflow-hidden ">
        <div className="flex flex-col lg:flex-row gap-8 px-4 mb-[50px]">
          <div className="flex-1 2xl:w-[611px] xl:w-[572px] lg:w-[400px] 2xl:h-[490px] xl:h-[459px] lg:h-[350px] md:h-[350px] sm:h-[280px] h-[260px] rounded-[20px] bg-[#F4F4F4] flex flex-col items-center justify-center 2xl:pt-[68px] xl:pt-[64px] lg:pt-[45px] md:pt-[35px] sm:pt-[30px] pt-[25px] px-4">
            <p className="2xl:text-[27px] xl:text-[25px] lg:text-[21px] md:text-[19px] sm:text-[17px] text-[15px] font-[600] text-[#252525] text-center mb-4">
              Lorem Ipsum is simply dummy text.
            </p>
            <p className="2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] font-[400] text-[#545454] text-center mb-6">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
            </p>
            <Button 
              variant="primary" 
              className="2xl:w-[163px] xl:w-[153px] lg:w-[130px] md:w-[120px] sm:w-[110px] w-[100px] 2xl:h-[52px] xl:h-[49px] lg:h-[42px] md:h-[38px] sm:h-[36px] h-[34px] lg:mb-[0px] mb-[10px]"
            >
              View more
            </Button>
          </div>

          <div className="flex-1 2xl:w-[611px] xl:w-[572px] lg:w-[400px] 2xl:h-[490px] xl:h-[459px] lg:h-[350px] md:h-[300px] sm:h-[280px] h-[260px] rounded-[20px] bg-[#1090CB] flex flex-col items-center justify-center 2xl:pt-[68px] xl:pt-[64px] lg:pt-[45px] md:pt-[35px] sm:pt-[30px] pt-[25px] px-4 relative">
            <img
              src={bell}
              alt="bell"
              className="2xl:w-[128px] xl:w-[120.26px] lg:w-[85px] md:w-[75px] sm:w-[65px] w-[55px] 2xl:h-[128px] xl:h-[120.26px] lg:h-[85px] md:h-[75px] sm:h-[65px] h-[55px] xl:mt-[-75px] lg:mt-[-60px] md:mt-[-50px] mt-[-45px] absolute top-4 right-4"
            />
            <p className="2xl:text-[27px] xl:text-[25px] lg:text-[21px] md:text-[19px] sm:text-[17px] text-[15px] font-[600] text-white text-center mb-4">
              Lorem Ipsum is simply dummy text.
            </p>
            <p className="2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] font-[400] text-white text-center mb-6">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
            </p>
            <Button 
              variant="secondary" 
              className="2xl:w-[163px] xl:w-[153px] lg:w-[130px] md:w-[120px] sm:w-[110px] w-[100px] 2xl:h-[52px] xl:h-[49px] lg:h-[42px] md:h-[38px] sm:h-[36px] h-[34px] lg:mb-[0px] mb-[10px]"
            >
              View more
            </Button>
          </div>
        </div>
        <div className="2xl:w-[531px] xl:w-[497px] lg:w-[390px] md:w-[335px] sm:w-[280px] w-[225px] 2xl:h-[540px] xl:h-[505px] lg:h-[400px] md:h-[345px] sm:h-[290px] h-[235px] bg-[radial-gradient(circle_at_center,_#FFD9EB_0%,_rgba(196,196,196,0)_80%)] absolute right-0 2xl:mr-[-80px] xl:mr-[-60px] lg:mr-[-90px] md:mr-[-140px] sm:mr-[-150px] mr-[-10px] xl:mt-[-300px] xl:mt-[-75px] lg:mt-[-250px] md:mt-[-200px] mt-[-250px] -z-10"></div>
      </section>
    </div>
  );
}
