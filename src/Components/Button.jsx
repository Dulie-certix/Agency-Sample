export default function Button({ children, variant = "primary", onClick, className = "" }) {
  const baseClasses = "2xl:w-[206px] xl:w-[193px] lg:w-[150px] md:w-[130px] sm:w-[120px] w-[90px] 2xl:h-[54px] xl:h-[51px] lg:h-[42px] md:h-[38px] sm:h-[36px] h-[30px] font-normal 2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[9px] rounded-[10px]";
  
  const variants = {
    primary: "text-[#FFFFFF] bg-[#1090CB]",
    secondary: "text-[#1090CB] bg-[#FFFFFF] border-[1px] border-[#1090CB]"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}