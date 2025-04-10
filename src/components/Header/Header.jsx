import React, { useState, useEffect } from "react";
import { FaCartArrowDown, FaBars, FaTimes } from "react-icons/fa"; 
import { CiSearch } from "react-icons/ci";
import "./Header.scss"; 

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth >= 768 && isMobileMenuOpen) { 
              setIsMobileMenuOpen(false);
          }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  
  const navLinks = [
    { href: "#", text: "Trang chủ" },
    { href: "#", text: "Sản phẩm" },
    { href: "#", text: "Giới thiệu" },
    { href: "#", text: "Tin tức" },
    { href: "#", text: "Liên hệ" },
  ];

  return (
    <>
     
      {isMobileMenuOpen && (
         <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={toggleMobileMenu} 
         ></div>
      )}

      <header
        className={`animated-header fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          isScrolled ? "scrolled shadow-md" : ""
        }`}
      >
        
        <div className="header__top bg-[#669933] text-white hidden md:block"> 
          <div className="container mx-auto flex items-center h-[40px] justify-between px-4">
            <div className="header__top--content animated-fade-in">
              <h3 className="text-sm">
                Chuyên cung cấp thực phẩm sạch | Halona Fruits
              </h3>
            </div>
            <div className="header__top--menu">
              <ul className="flex items-center space-x-4 text-sm">
               
                <li className="hover:text-blue-200 hover:underline animated-slide-in" style={{ animationDelay: "0.1s" }}> <a href="#">Tài khoản</a> </li>
                <li className="hover:text-blue-200 hover:underline animated-slide-in" style={{ animationDelay: "0.2s" }}> <a href="#">Thanh toán</a> </li>
                <li className="hover:text-blue-200 hover:underline animated-slide-in" style={{ animationDelay: "0.3s" }}> <a href="#">Cửa hàng</a> </li>
                <li className="hover:text-blue-200 hover:underline animated-slide-in" style={{ animationDelay: "0.4s" }}> <a href="#">Đăng nhập</a> </li>
              </ul>
            </div>
          </div>
        </div>

    
        <div className={`header__bottom bg-white transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
          <div className="container mx-auto flex items-center justify-between px-4">
            
            <div className={`logo flex-shrink-0 animated-logo transition-all duration-300 ${isScrolled ? 'w-[100px] h-[60px]' : 'w-[150px] h-[80px]'}`}>
              <img
                className="max-h-full max-w-full object-contain"
                src="http://hoaqua.langsonweb.com/wp-content/uploads/2020/09/logo-hoa-qua.png"
                alt="Halona Fruits Logo"
              />
            </div>

          
             <div className="search hidden lg:flex items-center animated-fade-in mx-4 flex-grow max-w-xs md:max-w-md" style={{ animationDelay: "0.3s" }}>
              <input
                className="border border-r-0 border-[#ddd] h-[36px] px-3 text-sm rounded-l focus:outline-none focus:border-[#669933] flex-grow search-input"
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
              />
              <button className="bg-[#669933] text-white h-[36px] w-[40px] flex items-center justify-center rounded-r hover:bg-[#55802b] transition-colors search-button">
                 <CiSearch size={20} />
              </button>
            </div>

           
            <nav className="nav hidden md:flex items-center space-x-3 lg:space-x-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  className="text-gray-700 hover:text-white hover:bg-[#669933] rounded-full px-3 py-1.5 text-sm lg:text-base font-medium transition-all duration-200 nav-item"
                  href={link.href}
                >
                  {link.text}
                </a>
              ))}
              <a
                href="#"
                className="text-gray-700 flex items-center hover:text-white hover:bg-[#669933] rounded-full px-3 py-1.5 text-sm lg:text-base font-medium transition-all duration-200 nav-item cart-item"
              >
                <span className="mr-1 hidden lg:inline">Giỏ hàng</span>
                <FaCartArrowDown className="cart-icon" size={18} />
              
              </a>
            </nav>


             <div className="md:hidden flex items-center">
                 
                 <button className="text-gray-600 hover:text-[#669933] p-2 mr-2">
                     <CiSearch size={24} />
                 </button>
                 
                 <a href="#" className="text-gray-600 hover:text-[#669933] p-2 mr-2 relative">
                      <FaCartArrowDown size={22} />
                  
                 </a>
                <button
                    onClick={toggleMobileMenu}
                    className="text-gray-600 hover:text-[#669933] p-2 focus:outline-none"
                    aria-label="Mở menu"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
             </div>
          </div>
       
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden bg-white absolute top-full left-0 right-0 shadow-lg transition-transform duration-300 ease-in-out transform ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-[120%]" // Di chuyển ra khỏi màn hình khi ẩn
          } border-t border-gray-200`} // Thêm border top
        >
          <nav className="flex flex-col p-4 space-y-2">
            {/* Search bar for mobile */}
            <div className="search flex items-center mb-3">
               <input
                className="border border-r-0 border-[#ddd] h-[36px] px-3 text-sm rounded-l focus:outline-none focus:border-[#669933] flex-grow search-input"
                type="text"
                placeholder="Tìm kiếm..."
              />
              <button className="bg-[#669933] text-white h-[36px] w-[40px] flex items-center justify-center rounded-r hover:bg-[#55802b] transition-colors search-button">
                 <CiSearch size={20} />
              </button>
            </div>

            
            {navLinks.map((link, index) => (
              <a
                key={index}
                className="text-gray-700 hover:text-[#669933] hover:bg-gray-100 rounded px-3 py-2 block font-medium"
                href={link.href}
                onClick={toggleMobileMenu} 
              >
                {link.text}
              </a>
            ))}
            
             <hr className="my-2"/>
              <a href="#" className="text-gray-700 hover:text-[#669933] hover:bg-gray-100 rounded px-3 py-2 block font-medium" onClick={toggleMobileMenu}>Tài khoản</a>
              <a href="#" className="text-gray-700 hover:text-[#669933] hover:bg-gray-100 rounded px-3 py-2 block font-medium" onClick={toggleMobileMenu}>Thanh toán</a>
              <a href="#" className="text-gray-700 hover:text-[#669933] hover:bg-gray-100 rounded px-3 py-2 block font-medium" onClick={toggleMobileMenu}>Cửa hàng</a>
              <a href="#" className="text-gray-700 hover:text-[#669933] hover:bg-gray-100 rounded px-3 py-2 block font-medium" onClick={toggleMobileMenu}>Đăng nhập</a>

          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;