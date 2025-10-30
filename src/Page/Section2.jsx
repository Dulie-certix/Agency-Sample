import { useState } from "react";
import happy1 from "../assets/happy1.png";
import phone from "../assets/phone.png";
import paper from "../assets/paper.png";
import man2 from "../assets/man2.png";
import SectionHeader from "../Components/SectionHeader";
import FeatureCard from "../Components/FeatureCard";
import ContentSection from "../Components/ContentSection";
import { LOREM_TEXT, COMPANY_INFO } from "../constants";

export default function Section2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="section2"
      className="w-full  h-auto bg-white font-Poppins 2xl:pt-[123px] xl:pt-[115px] lg:pt-[85px] md:pt-[70px] sm:pt-[55px] pt-[40px]"
    >
      <SectionHeader
        title={LOREM_TEXT.title}
        subtitle={<>{LOREM_TEXT.subtitle}</>}
        className="sm:mx-[0px] mx-[10px]"
      />
      <ContentSection
        feature={
          <FeatureCard
            icon={happy1}
            title="Lorem Ipsum is simply dummy text"
            subtitle="Lorem Ipsum is simply dummy text"
            bgColor="bg-[#08D3BB]"
          />
        }
        title={
          <>
            <span className="text-[#1090CB]">Lorem Ipsum</span> is simply dummy
            <br />
            text of the printing.
          </>
        }
        description={COMPANY_INFO.description}
        image={phone}
        imageAlt="phone"
        className="2xl:mt-[59px] xl:mt-[55px] lg:mt-[45px] md:mt-[40px] sm:mt-[35px] mt-[30px] 2xl:pt-[116px] xl:pt-[109px] lg:pt-[75px] md:pt-[60px] sm:pt-[45px] pt-[30px]"
      />
      {/* Section 02 */}
      <div className="mr-[65px]">
        <ContentSection
          feature={
            <FeatureCard
              icon={happy1}
              title="Lorem Ipsum is simply dummy text"
              subtitle="Lorem Ipsum is simply dummy text"
              bgColor="bg-[#1090CB]"
            />
          }
          title={
            <>
              <span className="text-[#1090CB]">Lorem Ipsum</span> is simply
              dummy
              <br />
              text of the printing.
            </>
          }
          description={COMPANY_INFO.description}
          image={paper}
          imageAlt="paper"
          reverse={true}
          className="2xl:mt-[59px] xl:mt-[55px] lg:mt-[45px] md:mt-[40px] sm:mt-[35px] mt-[30px] 2xl:pt-[116px] xl:pt-[109px] lg:pt-[75px] md:pt-[60px] sm:pt-[45px] pt-[30px]"
        />
      </div>
      {/* Section 03 */}

      <ContentSection
        feature={
          <FeatureCard
            icon={happy1}
            title="Lorem Ipsum is simply dummy text"
            subtitle="Lorem Ipsum is simply dummy text"
            bgColor="bg-[#9208D3]"
          />
        }
        title={
          <>
            <span className="text-[#1090CB]">Lorem Ipsum</span> is simply dummy
            <br />
            text of the printing.
          </>
        }
        description={COMPANY_INFO.description}
        image={paper} 
        imageAlt="paper"
        className="2xl:mt-[59px] xl:mt-[55px] lg:mt-[45px] md:mt-[40px] sm:mt-[35px] mt-[30px] 2xl:pt-[116px] xl:pt-[109px] lg:pt-[75px] md:pt-[60px] sm:pt-[45px] pt-[30px]"
      />
    </section>
  );
}