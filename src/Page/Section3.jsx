import { useState } from "react";
import bell from "../assets/bell.png";
import InfoCard from "../Components/InfoCard";

export default function Section3() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center bg-transparent">
      <section id="section3" className="w-full max-w-screen-2xl mx-auto 2xl:h-[898px] xl:h-[841px] lg:h-[700px] md:h-[700px] h-[760px] font-poppins 2xl:pt-[211px] xl:pt-[198px] lg:pt-[140px] md:pt-[110px] sm:pt-[80px] pt-[50px] mb-[50px] 2xl:px-[123px] xl:px-[100px] lg:px-[80px] md:px-[60px] sm:px-[40px] px-[20px] relative overflow-hidden ">
        <div className="flex flex-col md:flex-row gap-[50px] mb-[50px]">
          <InfoCard
            title="Lorem Ipsum is simply dummy text."
            description="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS."
            buttonText="View more"
            bgColor="bg-[#F4F4F4]"
            textColor="text-[#252525]"
            buttonVariant="primary"
          />
          
          <InfoCard
            title="Lorem Ipsum is simply dummy text."
            description="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS."
            buttonText="View more"
            bgColor="bg-[#1090CB]"
            textColor="text-white"
            buttonVariant="secondary"
            icon={bell}
            className="md:h-[300px]"
          />
        </div>
        <div className="2xl:w-[531px] xl:w-[497px] lg:w-[390px] md:w-[335px] sm:w-[280px] w-[225px] 2xl:h-[540px] xl:h-[505px] lg:h-[400px] md:h-[345px] sm:h-[290px] h-[235px] bg-[radial-gradient(circle_at_center,_#FFD9EB_0%,_rgba(196,196,196,0)65%)] absolute right-0 2xl:mr-[-80px] xl:mr-[-60px] lg:mr-[-90px] md:mr-[-120px] sm:mr-[-150px] mr-[-80px] 2xl:mt-[-380px] xl:mt-[-350px] lg:mt-[-280px] md:mt-[-240px] sm:mt-[-180px] mt-[-200px] -z-10"></div>
      </section>
    </div>
  );
}
