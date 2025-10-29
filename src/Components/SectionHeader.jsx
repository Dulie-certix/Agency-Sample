export default function SectionHeader({ title, subtitle, className = "" }) {
  return (
    <div className={`w-full text-center ${className}`}>
      <p className="font-[600] text-[#252525] 2xl:text-[35px] xl:text-[33px] lg:text-[27px] md:text-[24px] sm:text-[21px] text-[14px] leading-[160%] mb-4">
        {title}
      </p>
      {subtitle && (
        <p className="font-[400] 2xl:text-[19px] xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[11px] leading-[175%] text-[#868686] max-w-[740px] mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}