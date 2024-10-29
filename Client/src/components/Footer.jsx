// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    
    <footer className="py-1">
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-1">
          
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <img
                src="https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/SP.jpg?updatedAt=1729959843265"
                alt="SP Catering Logo"
                className="w-8 h-8 rounded-md"
              />
              <h2 className="text-xl font-bold">SP Catering Services</h2>
            </div>
            <p className="text-sm text-white-400 pl-10 md: pl-10 md: text-right">Service is our motto</p>
          </div>

          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-veganOrange">Home</a>
            <a href="#about" className="hover:text-veganOrange">About</a>
            <a href="#services" className="hover:text-veganOrange">Services</a>
            <a href="#menu" className="hover:text-veganOrange">Menu</a>
            <a href="#gallery" className="hover:text-veganOrange">Gallery</a>
            <a href="#feedback" className="hover:text-veganOrange">Feedback</a>
            <a href="#contact" className="hover:text-gray-50">Contact</a>
          </nav>

        </div>

        
        <div className="text-center text-white-400 text-sm">
          © {new Date().getFullYear()} SP Catering Services. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
