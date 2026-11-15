// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    
    <footer className="py-1 bg-[#F9F6EE]">
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-1">
          
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <img
                src="https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/logo.jpg"
                alt="SP Catering Logo"
                className="w-8 h-8 rounded-full object-cover"
              />
              <h2 className="text-xl font-bold text-[#4A2E1B]">SP Catering Services</h2>
            </div>
            <p className="text-sm text-[#D4AF37] pl-10 md: pl-10 md: text-right">Service is our motto</p>
          </div>

          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="text-[#4A2E1B] hover:text-[#C45A2C]">Home</a>
            <a href="#about" className="text-[#4A2E1B] hover:text-[#C45A2C]">About</a>
            <a href="#services" className="text-[#4A2E1B] hover:text-[#C45A2C]">Services</a>
            <a href="#menu" className="text-[#4A2E1B] hover:text-[#C45A2C]">Menu</a>
            <a href="#gallery" className="text-[#4A2E1B] hover:text-[#C45A2C]">Gallery</a>
            <a href="#feedback" className="text-[#4A2E1B] hover:text-[#C45A2C]">Feedback</a>
            <a href="#contact" className="text-[#4A2E1B] hover:text-[#C45A2C]">Contact</a>
          </nav>

        </div>

        
        <div className="text-center text-[#4A2E1B] text-sm">
          © {new Date().getFullYear()} SP Catering Services. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
