import { useState } from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo5 from "../assets/logo5.png";
import star from "../assets/star.png";
import design1 from "../assets/design1.png";
import EmailSubscription from "../Components/EmailSubscription";

export default function Section4() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center relative overflow-hidden">
      
      <div className="2xl:w-[531px] xl:w-[497px] lg:w-[390px] md:w-[335px] sm:w-[280px] w-[225px] 2xl:h-[540px] xl:h-[505px] lg:h-[400px] md:h-[345px] sm:h-[190px] h-[235px] 2xl:ml-[-300px] xl:ml-[-305px] lg:ml-[-215px] md:ml-[-195px] sm:ml-[-155px] ml-[-165px] bg-[radial-gradient(circle_at_center,_#F3FFD9_0%,_#FFFFFF00_70%)] absolute left-0 md:mt-[-100px] -z-10"></div>
      <section id="section4" className="w-full 2xl:h-[913px] xl:h-[855px] lg:h-[665px] md:h-[570px] sm:h-[475px] h-[530px] font-Poppins">
        <div className="w-full text-center">
          <p className="2xl:text-[26px] xl:text-[24px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] font-[500] leading-[159%] mb-8">
            You will be in good Company
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 2xl:gap-[123px] xl:gap-[115px] lg:gap-[60px] md:gap-[40px] sm:gap-[30px]">
            <img
              src={logo1}
              alt="logo1"
              className="2xl:w-[198px] xl:w-[185px] lg:w-[140px] md:w-[120px] sm:w-[100px] w-[80px] h-auto"
            />
            <img
              src={logo2}
              alt="logo2"
              className="2xl:w-[198px] xl:w-[185px] lg:w-[140px] md:w-[120px] sm:w-[100px] w-[80px] h-auto"
            />
            <img
              src={logo3}
              alt="logo3"
              className="2xl:w-[198px] xl:w-[185px] lg:w-[140px] md:w-[120px] sm:w-[100px] w-[80px] h-auto"
            />
            <img
              src={logo5}
              alt="logo4"
              className="2xl:w-[198px] xl:w-[185px] lg:w-[140px] md:w-[120px] sm:w-[100px] w-[80px] h-auto"
            />
          </div>
        </div>

        {/*sub section 02*/}
        <div className="w-full 2xl:mt-[58px] xl:mt-[54px] lg:mt-[42px] md:mt-[36px] sm:mt-[30px] mt-[24px] relative">
          <img
            src={star}
            alt="star"
            className="2xl:w-[70px] xl:w-[66px] lg:w-[50px] md:w-[44px] sm:w-[38px] w-[32px] 2xl:h-[70px] xl:h-[66px] lg:h-[50px] md:h-[44px] sm:h-[38px] h-[32px] 2xl:ml-[178px] xl:ml-[167px] lg:ml-[120px] md:ml-[100px] sm:ml-[80px] ml-[60px] rotate-[24.8deg] absolute z-10 mt-[-30px]"
          />

          <div className="w-full 2xl:h-[570px] xl:h-[534px] lg:h-[420px] md:h-[360px] sm:h-[320px] h-[280px] bg-[#E8F4FA]  lg:pt-[0px] md:pt-[60px] sm:pt-[50px] pt-[40px] flex flex-col items-center justify-center px-4">
            <img
              src={design1}
              alt="design1"
              className="2xl:w-[58px] xl:w-[54px] lg:w-[42px] md:w-[38px] sm:w-[34px] w-[30px] 2xl:h-[58px] xl:h-[54px] lg:h-[42px] md:h-[38px] sm:h-[34px] h-[30px] mb-4 mt-[-54px]"
            />
            <p className="2xl:text-[32px] xl:text-[30px] lg:text-[24px] md:text-[21px] sm:text-[18px] text-[16px] font-[600] leading-[170%] text-[#252525] text-center mb-8">
              Lorem Ipsum is simply dummy
              <br />
              text of the printing.
            </p>
            <EmailSubscription />
          </div>
        </div>
      </section>
    </div>
  );
}
