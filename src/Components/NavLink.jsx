import { useState, useEffect } from "react";

export default function NavLink({ href = "#", children, className = "" }) {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(href);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offset = 100;
        setIsActive(rect.top <= offset && rect.bottom >= offset);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [href]);
  
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const baseClasses =
    "2xl:text-[17px] xl:text-[16px] xm:text-[15px] lg:text-[14px] md:text-[13px] py-1 rounded transition-colors relative";
  const activeClasses = isActive ? "text-[#1090CB]" : "text-black hover:text-[#1090CB]";
  
  return (
    <a href={href} onClick={handleClick} className={`${baseClasses} ${activeClasses} ${className}`}>
      {children}
      {isActive && (
        <div className="absolute -top-0.5  transform -translate-x-1/2 w-[8px] h-[8px] bg-[#08D3BB] rounded-full hidden md:block"></div>
      )}
    </a>
  );
}