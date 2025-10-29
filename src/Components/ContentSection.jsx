export default function ContentSection({ 
  feature, 
  title, 
  description, 
  image, 
  imageAlt, 
  reverse = false, 
  className = "" 
}) {
  const flexDirection = reverse ? "lg:flex-row-reverse" : "lg:flex-row";
  
  return (
    <div className={`w-full flex flex-col ${flexDirection} items-center gap-8 ${className}`}>
      <div className="flex-1 max-w-[550px] 2xl:ml-[128px] xl:ml-[107px] lg:ml-[80px] md:ml-[0px] sm:ml-[30px] ml-[30px]">
        {feature}
        <p className="font-[600] 2xl:text-[32px] xl:text-[30px] lg:text-[24px] md:text-[21px] sm:text-[18px] text-[16px] text-[#252525] leading-[170%] mb-6">
          {title}
        </p>
        <p className="font-[400] 2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] text-[#545454] leading-[170%]">
          {description}
        </p>
      </div>
      <div className="flex-1 max-w-[858px] flex justify-center">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto lg:w-[100%] md:w-[80%] sm:w-[70%] w-[60%]"
        />
      </div>
    </div>
  );
}