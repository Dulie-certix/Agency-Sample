import { useState } from "react";
import happy1 from "../assets/happy1.png";
import phone from "../assets/phone.png";
import paper from "../assets/paper.png";
import man2 from "../assets/man2.png";

export default function Section2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full  h-auto bg-white font-Poppins 2xl:pt-[123px] xl:pt-[115px] lg:pt-[85px] md:pt-[70px] sm:pt-[55px] pt-[40px]">
      {/* Section Header */}
      <div className="w-full text-center sm:mx-[0px] mx-[10px]">
        <p className="font-[600] text-[#252525] 2xl:text-[35px] xl:text-[33px] lg:text-[27px] md:text-[24px] sm:text-[21px] text-[14px] leading-[160%] tracking-[0%] mb-4">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <p className="font-[400] 2xl:text-[19px] xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[11px] leading-[175%] tracking-[0%] text-[#868686] max-w-[740px] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br />
          Lorem Ipsum has been the industry's
        </p>
      </div>

      {/* Section 01 */}
      <div className="w-full 2xl:mt-[59px] xl:mt-[55px] lg:mt-[45px] md:mt-[40px] sm:mt-[35px] mt-[30px] 2xl:pt-[116px] xl:pt-[109px] lg:pt-[75px] md:pt-[60px] sm:pt-[45px] pt-[30px]  flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 max-w-[550px] 2xl:ml-[128px] xl:ml-[107px] lg:ml-[80px] md:ml-[0px] sm:ml-[30px] ml-[30px] ">
          <div className="flex items-center gap-4 mb-4  ">
            <div className="2xl:w-[62px] xl:w-[58px] lg:w-[46px] md:w-[40px] sm:w-[34px] w-[28px] 2xl:h-[62px] xl:h-[58px] lg:h-[46px] md:h-[40px] sm:h-[34px] h-[28px] rounded-full bg-[#08D3BB] flex items-center justify-center">
              <img
                src={happy1}
                alt="happy1"
                className="2xl:w-[28px] xl:w-[26px] lg:w-[20px] md:w-[17px] sm:w-[14px] w-[11px] 2xl:h-[28px] xl:h-[26px] lg:h-[20px] md:h-[17px] sm:h-[14px] h-[11px]"
              />
            </div>
            <div>
              <p className="font-[500] 2xl:text-[18px] xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] leading-[175%]">
                Lorem Ipsum is simply dummy text
              </p>
              <p className="font-[400] 2xl:text-[15px] xl:text-[14px] lg:text-[12px] md:text-[11px] sm:text-[10px] text-[9px] text-[#868686] leading-[175%]">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>
          <p className="font-[600] 2xl:text-[32px] xl:text-[30px] lg:text-[24px] md:text-[21px] sm:text-[18px] text-[16px] text-[#252525] leading-[170%] mb-6">
            <span className="text-[#1090CB]">Lorem Ipsum</span> is simply dummy
            <br />
            text of the printing.
          </p>
          <p className="font-[400] 2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] text-[#545454] leading-[170%]">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </p>
        </div>
        <div className="flex-1 max-w-[858px] flex justify-center">
          <img
            src={phone}
            alt="phone"
            className="w-full h-auto lg:w-[100%] md:w-[80%] sm:w-[70%] w-[60%]"
          />
        </div>
      </div>

      {/* Section 02 */}
      <div className="w-full 2xl:mt-[191px] xl:mt-[179px] lg:mt-[140px] md:mt-[120px] sm:mt-[100px] mt-[80px] flex flex-col lg:flex-row-reverse items-center gap-0 mb-[250px]">
        <div className="flex-1 max-w-[550px] 2xl:ml-[260px] xl:ml-[197px] lg:ml-[80px] md:ml-[0px] sm:ml-[30px] ml-[30px] mr-[40px]">
          <div className="flex items-center gap-4 mb-4 2xl:ml-[-260px]">
            <div className="2xl:w-[62px] xl:w-[58px] lg:w-[46px] md:w-[40px] sm:w-[34px] w-[28px] 2xl:h-[62px] xl:h-[58px] lg:h-[46px] md:h-[40px] sm:h-[34px] h-[28px]  rounded-full bg-[#1090CB] flex items-center justify-center">
              <img
                src={happy1}
                alt="happy1"
                className="2xl:w-[28px] xl:w-[26px] lg:w-[20px] md:w-[17px] sm:w-[14px] w-[11px] 2xl:h-[28px] xl:h-[26px] lg:h-[20px] md:h-[17px] sm:h-[14px] h-[11px]"
              />
            </div>
            <div>
              <p className="font-[500] 2xl:text-[18px] xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] leading-[175%]">
                Lorem Ipsum is simply dummy text
              </p>
              <p className="font-[400] 2xl:text-[15px] xl:text-[14px] lg:text-[12px] md:text-[11px] sm:text-[10px] text-[9px] text-[#868686] leading-[175%]">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>
          <p className="font-[600] 2xl:text-[32px] xl:text-[30px] lg:text-[24px] md:text-[21px] sm:text-[18px] text-[16px] text-[#252525] leading-[170%] mb-6 2xl:ml-[-260px]">
            <span className="text-[#1090CB]">Lorem Ipsum</span> is simply dummy
            <br />
            text of the printing.
          </p>
          <p className="font-[400] 2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] text-[#545454] leading-[170%] 2xl:ml-[-260px]">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </p>
        </div>
        <div className="flex-1 max-w-[642px]  ">
          <img
            src={paper}
            alt="paper"
            className="w-full h-auto relative z-10 lg:w-[100%] md:w-[80%] sm:w-[70%] w-[50%]  md:ml-[0px] sm:ml-[100px] ml-[0px] "
          />
          <div
            className="2xl:w-[529px] xl:w-[496px] lg:w-[350px] md:w-[280px] sm:w-[220px] w-[180px] 2xl:h-[538px] xl:h-[504px] lg:h-[360px] md:h-[290px] sm:h-[230px] h-[180px] md:ml-[-20px] sm:ml-[50px] 2xl:mt-[-559px] xl:mt-[-524px] lg:mt-[-390px] md:mt-[-320px] sm:mt-[-350px] mt-[-320px] flex justifty-start bg-[radial-gradient(50%_50%_at_50%_50%,_#F3FFD9_0%,_rgba(196,196,196,0)_100%)]"
          ></div>
        </div>
      </div>

      {/* Section 03 */}
      <div className="w-full 2xl:mt-[92px] xl:mt-[200px] lg:mt-[140px] md:mt-[59px] sm:mt-[50px] mt-[41px] flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 max-w-[550px] 2xl:ml-[108px] xl:ml-[107px] lg:ml-[120px] md:ml-[0px] sm:ml-[30px] ml-[30px] ">
          <div className="flex items-center gap-4 mb-4">
            <div className="2xl:w-[62px] xl:w-[58px] lg:w-[46px] md:w-[40px] sm:w-[34px] w-[28px] 2xl:h-[62px] xl:h-[58px] lg:h-[46px] md:h-[40px] sm:h-[34px] h-[28px] rounded-full bg-[#9208D3] flex items-center justify-center ">
              <img
                src={happy1}
                alt="happy1"
                className="2xl:w-[28px] xl:w-[26px] lg:w-[20px] md:w-[17px] sm:w-[14px] w-[11px] 2xl:h-[28px] xl:h-[26px] lg:h-[20px] md:h-[17px] sm:h-[14px] h-[11px]"
              />
            </div>
            <div>
              <p className="font-[500] 2xl:text-[18px] xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] leading-[175%]">
                Lorem Ipsum is simply dummy text
              </p>
              <p className="font-[400] 2xl:text-[15px] xl:text-[14px] lg:text-[12px] md:text-[11px] sm:text-[10px] text-[9px] text-[#868686] leading-[175%]">
                Lorem Ipsum is simply dummy text
              </p>
            </div>
          </div>
          <p className="font-[600] 2xl:text-[32px] xl:text-[30px] lg:text-[24px] md:text-[21px] sm:text-[18px] text-[16px] text-[#252525] leading-[170%] mb-6">
            <span className="text-[#1090CB]">Lorem Ipsum</span> is simply dummy
            <br />
            text of the printing.
          </p>
          <p className="font-[400] 2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] text-[#545454] leading-[170%]">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </p>
        </div>
        <div className="flex-1 max-w-[689px] 2xl:ml-[178px] xl:ml-[167px] lg:ml-[120px] md:ml-[100px] sm:ml-[140px] ml-[30px] ">
          <img
            src={man2}
            alt="man2"
            className="w-full h-auto lg:w-[100%] md:w-[80%] sm:w-[70%] w-[60%] flex justify-center"
          />
        </div>
      </div>
    </section>
  );
}