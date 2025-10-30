export default function Logo({ className = "" }) {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href="#hero" onClick={handleClick} className={`text-[#1090CB] 2xl:text-[31px] xl:text-[29px] lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] font-bold cursor-pointer hover:opacity-80 transition-opacity ${className}`}>
      LOGO
    </a>
  );
}