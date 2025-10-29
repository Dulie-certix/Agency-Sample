import { useState, useEffect } from "react";

export default function NavLink({ href = "#", children, className = "" }) {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (href === "#hero") {
        setIsActive(window.scrollY < 500);
      } else {
        const element = document.querySelector(href);
        if (element) {
          const rect = element.getBoundingClientRect();
          setIsActive(rect.top <= 100 && rect.bottom >= 100);
        }
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
  
  const baseClasses = "2xl:text-[17px] xl:text-[16px] xm:text-[15px] lg:text-[14px] md:text-[13px]  py-1 rounded transition-colors ";
  const activeClasses = isActive ? "text-black" : "hover:text-[#1090CB]";
  
  return (
    <a href={href} onClick={handleClick} className={`${baseClasses} ${activeClasses} ${className}`}>
      {children}
    </a>
  );
}