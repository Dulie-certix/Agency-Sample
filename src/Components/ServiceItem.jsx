export default function ServiceItem({ icon, title, description, bgColor }) {
  const getGlowColor = () => {
    if (bgColor.includes('#EFEAFF')) return '239, 234, 255';
    if (bgColor.includes('#ECFFDA')) return '236, 255, 218';
    if (bgColor.includes('#DAE6FF')) return '218, 230, 255';
    if (bgColor.includes('#FFE5DA')) return '255, 229, 218';
    return '16, 144, 203';
  };

  return (
    <div
      className={`2xl:w-[89px] xl:w-[83px] lg:w-[65px] md:w-[55px] sm:w-[50px] w-[45px] 2xl:h-[89px] xl:h-[83px] lg:h-[65px] md:h-[55px] sm:h-[50px] h-[45px] rounded-[20px] ${bgColor} flex-shrink-0 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg`}
      style={{
        animation: 'highlight 2s ease-in-out infinite',
        '--glow-color': getGlowColor()
      }}
    >
      <div className="leading-[175%] mb-[30px]">
        <img
          src={icon}
          alt={title}
          className="2xl:w-[41px] xl:w-[38.44px] lg:w-[30px] md:w-[26px] sm:w-[24px] w-[22px] 2xl:h-[41px] xl:h-[38.44px] lg:h-[30px] md:h-[26px] sm:h-[24px] h-[22px] 2xl:ml-[22px] xl:ml-[21px] lg:ml-[17px] md:ml-[14px] sm:ml-[13px] ml-[11px] 2xl:mt-[25px] xl:mt-[25px] lg:mt-[19px] md:mt-[16px] sm:mt-[14px] mt-[12px]"
        />
        <div className="2xl:w-[212px] xl:w-[199px] lg:w-[150px] md:w-[230px] sm:w-[115px] w-[100px] 2xl:ml-[106px] xl:ml-[99px] lg:ml-[70px] md:ml-[65px] sm:ml-[55px] ml-[50px] 2xl:mt-[-60px] xl:mt-[-56.44px] lg:mt-[-44px] md:mt-[-38px] sm:mt-[-40px] mt-[-40px] 2xl:text-[21px] xl:text-[20px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] font-[500] text-black">
          {title}
        </div>
        <div className="2xl:w-[177px] xl:w-[166px] lg:w-[150px] md:w-[210px] sm:w-[200px] w-[150px] 2xl:ml-[106px] xl:ml-[99px] lg:ml-[70px] md:ml-[65px] sm:ml-[55px] ml-[50px] 2xl:text-[16px] xl:text-[15px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px] font-[400] text-[#969696]">
          {description}
        </div>
      </div>
    </div>
  );
}