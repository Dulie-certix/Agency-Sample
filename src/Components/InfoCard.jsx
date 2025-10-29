import Button from "./Button";

export default function InfoCard({ 
  title, 
  description, 
  buttonText, 
  bgColor = "bg-[#F4F4F4]", 
  textColor = "text-[#252525]", 
  buttonVariant = "primary",
  icon,
  className = "" 
}) {
  return (
    <div className={`flex-1 2xl:w-[611px] xl:w-[572px] lg:w-[400px] 2xl:h-[490px] xl:h-[459px] lg:h-[350px] md:h-[350px] sm:h-[280px] h-[260px] rounded-[20px] ${bgColor} flex flex-col items-center justify-center 2xl:pt-[68px] xl:pt-[64px] lg:pt-[45px] md:pt-[35px] sm:pt-[30px] pt-[25px] px-4 relative ${className}`}>
      {icon && (
        <img
          src={icon}
          alt="icon"
          className="2xl:w-[128px] xl:w-[120.26px] lg:w-[85px] md:w-[75px] sm:w-[65px] w-[55px] 2xl:h-[128px] xl:h-[120.26px] lg:h-[85px] md:h-[75px] sm:h-[65px] h-[55px] xl:mt-[-75px] lg:mt-[-60px] md:mt-[-50px] mt-[-45px] absolute top-4 right-4"
        />
      )}
      <p className={`2xl:text-[27px] xl:text-[25px] lg:text-[21px] md:text-[19px] sm:text-[17px] text-[15px] font-[600] ${textColor} text-center mb-4`}>
        {title}
      </p>
      <p className={`2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] font-[400] ${textColor} text-center mb-6`}>
        {description}
      </p>
      <Button 
        variant={buttonVariant} 
        className="2xl:w-[163px] xl:w-[153px] lg:w-[130px] md:w-[120px] sm:w-[110px] w-[100px] 2xl:h-[52px] xl:h-[49px] lg:h-[42px] md:h-[38px] sm:h-[36px] h-[34px] lg:mb-[0px] mb-[10px]"
      >
        {buttonText}
      </Button>
    </div>
  );
}