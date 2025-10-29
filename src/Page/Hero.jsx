import { useState } from "react";
import man from "../assets/man.png";
import Rside from "../assets/Rside1.png";
import Lside from "../assets/Lside1.png";
import list1 from "../assets/list1.png";
import list2 from "../assets/list2.png";
import list3 from "../assets/list3.png";
import list4 from "../assets/list4.png";
import ServiceItem from "../Components/ServiceItem";
import Button from "../Components/Button";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="hero" className="w-full 2xl:h-[968px] xl:h-[910px] lg:h-[700px] md:h-[700px] sm:h-[750px] h-auto m-0 p-0 item-center ">
      <div className="w-full 2xl:h-[793px] xl:h-[743px] lg:h-[580px] md:h-[500px] sm:h-[600px] h-[550px] font-poppins bg-[#1090CB10] 2xl:pt-[137px] xl:pt-[128px] lg:pt-[90px] md:pt-[70px] sm:pt-[50px] pt-[40px] ">
        <div className=" 2xl:w-[529px] xl:w-[496px] lg:w-[350px] md:w-[280px] sm:w-[220px] w-[180px] 2xl:h-[538px] xl:h-[504px] lg:h-[360px] md:h-[290px] sm:h-[230px] h-[180px] 2xl:mt-[-112px] xl:mt-[-105px] lg:mt-[-105px] md:mt-[-100px] sm:mt-[-45px] mt-[-30px] 2xl:ml-[-118px] xl:ml-[-111px] lg:ml-[-80px] md:ml-[-65px] sm:ml-[-50px]  bg-[radial-gradient(circle_at_center,_#EDEAFF_0%,_rgba(196,196,196,0)_50%)]"></div>

        <p className="2xl:text-[43px] xl:text-[40px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[18px] font-bold 2xl:ml-[131px] xl:ml-[123px] lg:ml-[85px] md:ml-[65px] sm:ml-[45px] ml-[25px] 2xl:mt-[-426px] xl:mt-[-399px] lg:mt-[-250px] md:mt-[-200px] sm:mt-[100px] mt-[-150px] 2xl:w-[672px] xl:w-[630px] lg:w-[470px] md:w-[390px] sm:w-[550px] w-auto 2xl:h-[206px] xl:h-[193px] lg:h-[150px] md:h-[160px] sm:h-[80px] h-[80px] md:text-left text-center md:justify-start sm:justify-center justify-center">
          Experienced<span className="text-[#1090CB]"> mobile and web </span>
          applications and website builders measuring.
        </p>

        <p className="2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[10px] font-normal leading-[204%] tracking-[0px] text-[#5C5C5C] 2xl:pt-[17px] xl:pt-[16px] lg:pt-[12px] md:pt-[10px] sm:pt-[8px] pt-[256px] 2xl:ml-[131px] xl:ml-[123px] lg:ml-[85px] md:ml-[65px] sm:ml-[55px] ml-[25px] 2xl:w-[654px] xl:w-[613px] lg:w-[450px] md:w-[370px] sm:w-[550px] w-auto 2xl:h-[133px] xl:h-[125px] lg:h-[95px] md:h-[140px] sm:h-[70px] h-[10px] md:justify-start sm:justify-center justify-center">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
        </p>

        <div className="flex flex-row gap-4 2xl:mt-[69px] xl:mt-[65px] lg:pt-[40px] md:mt-[30px] sm:mt-[25px] mt-[120px]  2xl:ml-[131px] xl:ml-[123px] lg:ml-[85px] md:ml-[65px] md:justify-start sm:justify-center justify-center">
          <a href="#footer">
            <Button variant="primary">
              Contact us
            </Button>
          </a>
          <Button variant="secondary">
            View more
          </Button>
        </div>

        <div>
          <img
            className="2xl:w-[637px] xl:w-[597px] lg:w-[400px] md:w-[300px] sm:w-[250px] w-[250px] 2xl:h-[814px] xl:h-[763px] lg:h-[550px] md:h-[450px] sm:h-[400px] h-[350px] 2xl:mt-[-694px] xl:mt-[-650px] lg:mt-[-450px] md:mt-[-450px] sm:mt-[-600px] mt-[-490px] 2xl:ml-[831px] xl:ml-[708px] lg:ml-[600px] md:ml-[450px] mx-auto"
            src={man}
            alt="man"
          />
          <img
            className="2xl:w-[62px] xl:w-[58px] lg:w-[45px] 2xl:h-[224px] xl:h-[210px] lg:h-[150px] xl:mt-[-120px] lg:mt-[-100px] hidden lg:flex"
            src={Lside}
            alt="Lside"
          />
          <img
            className="2xl:w-[50px] xl:w-[47px] lg:w-[35px] 2xl:h-[391px] xl:h-[366px] lg:h-[260px] 2xl:mt-[-685px] xl:mt-[-608px] lg:mt-[-530px] ml-auto hidden lg:flex"
            src={Rside}
            alt="Rside"
          />

          <div className="2xl:w-[529px] xl:w-[496px] lg:w-[350px] md:w-[280px] sm:w-[220px] w-[180px] 2xl:h-[538px] xl:h-[504px] lg:h-[360px] md:h-[290px] sm:h-[230px] h-[180px] 2xl:mt-[-559px] xl:mt-[-524px] lg:mt-[-390px] md:mt-[-420px] sm:mt-[-350px] mt-[-250px] flex 2xl:ml-[7800px] xl:ml-[790px] lg:ml-[650px] md:ml-[470px] sm:ml-[300px] ml-[100px] bg-[radial-gradient(circle_at_center,_#FDFFEA_0%,_rgba(196,196,196,0)_100%)]"></div>
        </div>
      </div>

      <div className="h-auto w-full bg-white items-center font-poppins md:justify-start sm:justify-center justify-center mx-auto">
        <ul className="flex 2xl:gap-[228px] xl:gap-[214px] lg:gap-[170px] md:gap-[300px] sm:gap-[200px] gap-[150px] list-none overflow-x-auto 2xl:pt-[41px] xl:pt-[38px] lg:pt-[28px] md:pt-[24px] sm:pt-[20px] pt-[15px] 2xl:px-[131px] xl:px-[83px] lg:px-[60px] md:mx-auto sm:px-[70px] px-[10px] overflow-x-auto whitespace-nowrap py-4">
          <ServiceItem 
            icon={list1} 
            title="Web Application" 
            description="Lorem Ipsum is simply" 
            bgColor="bg-[#EFEAFF]" 
          />
          {/* sdfgbsdef */}
          <ServiceItem 
            icon={list2} 
            title="SEO" 
            description="Lorem Ipsum is simply" 
            bgColor="bg-[#ECFFDA]" 
          />
          <ServiceItem 
            icon={list3} 
            title="AR/VR Solutions" 
            description="Lorem Ipsum is simply" 
            bgColor="bg-[#DAE6FF]" 
          />
          <ServiceItem 
            icon={list4} 
            title="Mobile Application" 
            description="Lorem Ipsum is simply" 
            bgColor="bg-[#FFE5DA]" 
          />
        </ul>
      </div>

      <hr className="w-full  border-[0.7px] border-[#C7C7C7]"></hr>
    </section>
  );
}
