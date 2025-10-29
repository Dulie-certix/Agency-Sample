import Button from "./Button";

export default function EmailSubscription({ className = "" }) {
  return (
    <div className={`flex w-full max-w-[568px] 2xl:h-[72px] xl:h-[67px] lg:h-[55px] md:h-[50px] sm:h-[45px] h-[40px] bg-white rounded-[10px] overflow-hidden ${className}`}>
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 2xl:text-[17px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[12px] text-[11px] text-[#787878] outline-none"
      />
      <Button 
        variant="primary" 
        className="2xl:w-[185px] xl:w-[173px] lg:w-[130px] md:w-[115px] sm:w-[100px] w-[90px] bg-black"
      >
        SUBSCRIBE
      </Button>
    </div>
  );
}