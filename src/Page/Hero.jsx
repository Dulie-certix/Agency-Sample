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
    <section
      id="hero"
      className="max-w-[1536px] w-full 2xl:h-[968px] xl:h-[910px] lg:h-[750px] md:h-[700px] sm:h-[850px] h-auto m-0 p-0 item-center "
    >
      <div className="w-full 2xl:h-[793px] xl:h-[743px] lg:h-[580px] md:h-[500px] sm:h-[700px] h-[750px] font-poppins bg-[#1090CB10] 2xl:pt-[137px] xl:pt-[128px] lg:pt-[110px] md:pt-[100px] sm:pt-[170px] pt-[490px] ">
        <div className=" 2xl:w-[529px] xl:w-[496px] lg:w-[350px] md:w-[280px] sm:w-[220px] w-[0px] 2xl:h-[538px] xl:h-[504px] lg:h-[360px] md:h-[290px] sm:h-[230px] h-[0px] 2xl:mt-[-112px] xl:mt-[-105px] lg:mt-[-105px] md:mt-[-100px] sm:mt-[-45px] mt-[-30px] 2xl:ml-[-118px] xl:ml-[-111px] lg:ml-[-80px] md:ml-[-65px] sm:ml-[-50px]  bg-[radial-gradient(circle_at_center,_#EDEAFF_0%,_rgba(196,196,196,0)_50%)]"></div>

        <p className="animate-fade-in-up delay-200 2xl:text-[43px] xl:text-[40px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[18px] font-bold 2xl:ml-[131px] xl:ml-[123px] lg:ml-[85px] md:ml-[65px] sm:ml-[45px] ml-[25px] 2xl:mt-[-426px] xl:mt-[-399px] lg:mt-[-250px] md:mt-[-200px] sm:mt-[100px] mt-[00px] 2xl:w-[672px] xl:w-[630px] lg:w-[470px] md:w-[390px] sm:w-auto 2xl:h-[206px] xl:h-[193px] lg:h-[150px] md:h-[160px] sm:h-[80px] h-[80px] md:text-left text-center md:justify-start sm:justify-center justify-center">
          Experienced<span className="text-[#1090CB]"> mobile and web </span>
          applications and website builders measuring.
        </p>

        <p className="animate-fade-in-up delay-400 2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[10px] font-normal leading-[204%] tracking-[0px] text-[#5C5C5C] 2xl:pt-[17px] xl:pt-[16px] lg:pt-[12px] md:pt-[10px] sm:pt-[8px] pt-[6px] 2xl:ml-[131px] xl:ml-[123px] lg:ml-[85px] md:ml-[65px] sm:ml-[55px] ml-[25px] 2xl:w-[654px] xl:w-[613px] lg:w-[450px] md:w-[370px] sm:w-auto 2xl:h-[133px] xl:h-[125px] lg:h-[95px] md:h-[140px] sm:h-[70px] h-[10px] lg:justify-start md:justify-center sm:justify-center justify-center">
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS.
        </p>

        <div className="animate-fade-in-up delay-600 flex flex-row gap-4 2xl:mt-[69px] xl:mt-[65px] lg:pt-[40px] md:mt-[30px] sm:mt-[25px] mt-[120px]  2xl:ml-[131px] xl:ml-[123px] lg:ml-[85px] md:ml-[65px] md:justify-start sm:justify-center justify-center ">
          <a href="#footer">
            <Button variant="primary" className="cursor-pointer">
              Contact us
            </Button>
          </a>
          <Button variant="secondary" className="cursor-pointer">
            View more
          </Button>
        </div>

        <div>
          <img
            className="animate-fade-in-scale delay-300 max-w-[597px] 2xl:w-[40vw] xl:w-[45vw] lg:w-[35vw] md:w-[40vw] sm:w-[50vw] w-[320px] h-auto 2xl:mt-[-694px] xl:mt-[-650px] lg:mt-[-450px] md:mt-[-450px] sm:mt-[-700px] mt-[-690px] 2xl:ml-[831px] xl:ml-[708px] lg:ml-[600px] md:ml-[450px] mx-auto"
            src={man}
            alt="man"
          />
          <img
            className="absolute 2xl:w-[62px] xl:w-[58px] lg:w-[45px] 2xl:h-[224px] xl:h-[210px] lg:h-[150px] 2xl:mt-[-90px] xl:mt-[-120px] lg:mt-[-10px] hidden lg:flex"
            src={Lside}
            alt="Lside"
          />
          <img
            className=" 2xl:w-[50px] xl:w-[47px] lg:w-[35px] 2xl:h-[391px] xl:h-[366px] lg:h-[260px] 2xl:ml-[96.8%] xl:ml-[96.8%] lg:ml-[96.6%] md:ml-[58.6%] sm:ml-[50%] ml-[50%] 2xl:mt-[-540px] xl:mt-[-520px] lg:mt-[-340px] hidden lg:flex"
            src={Rside}
            alt="Rside"
          />

          <div className="2xl:w-[529px] xl:w-[496px] lg:w-[350px] md:w-[280px] sm:w-[220px] w-[180px] 2xl:h-[538px] xl:h-[504px] lg:h-[360px] md:h-[290px] sm:h-[230px] h-[180px] 2xl:mt-[-559px] xl:mt-[-324px] lg:mt-[-390px] md:mt-[-420px] sm:mt-[-350px] mt-[-250px] flex 2xl:ml-[900px] xl:ml-[790px] lg:ml-[650px] md:ml-[470px] sm:ml-[300px] ml-[100px] bg-[radial-gradient(circle_at_center,_#FDFFEA_20%,_rgba(196,196,196,0)_80%)]"></div>
        </div>
      </div>

      <div className="w-full bg-white py-8 px-6 lg:px-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:ml-[100px] sm:ml-[100px] ml-[60px] 2xl:gap-4 lg:gap-2 gap-4 max-w-7xl mx-auto">
          <ServiceItem
            icon={list1}
            title="Web Application"
            description="Lorem Ipsum is simply"
            bgColor="bg-[#EFEAFF]"
          />
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
        </div>
      </div>

      <hr className="w-full  border-[0.7px] border-[#C7C7C7]"></hr>
    </section>
  );
}
