export default function FeatureCard({ icon, title, subtitle, description, bgColor = "bg-[#08D3BB]", className = "" }) {
  return (
    <div className={`flex items-center gap-4 mb-4 ${className}`}>
      <div className={`2xl:w-[62px] xl:w-[58px] lg:w-[46px] md:w-[40px] sm:w-[34px] w-[28px] 2xl:h-[62px] xl:h-[58px] lg:h-[46px] md:h-[40px] sm:h-[34px] h-[28px] rounded-full ${bgColor} flex items-center justify-center`}>
        <img
          src={icon}
          alt={title}
          className="2xl:w-[28px] xl:w-[26px] lg:w-[20px] md:w-[17px] sm:w-[14px] w-[11px] 2xl:h-[28px] xl:h-[26px] lg:h-[20px] md:h-[17px] sm:h-[14px] h-[11px]"
        />
      </div>
      <div>
        <p className="font-[500] 2xl:text-[18px] xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] leading-[175%]">
          {title}
        </p>
        <p className="font-[400] 2xl:text-[15px] xl:text-[14px] lg:text-[12px] md:text-[11px] sm:text-[10px] text-[9px] text-[#868686] leading-[175%]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}