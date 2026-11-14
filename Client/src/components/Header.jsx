'use client';

import {useState, useEffect} from "react";


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [companyName, setCompanyName] = useState("SP Catering Services")

    const handleMenuClose = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCompanyName((prevName) => prevName === "SP Catering Services" ? "SP கேட்டரிங் சர்வீசஸ்" : "SP Catering Services")
        }, 3000)

        return () => clearInterval(interval)
    },[])

  return (
    
    <header className="p-4 sm:relative sm:w-auto sm:static fixed top-0 left-0 w-full z-50 bg-[#F9F6EE]">

        <div className="    container mx-auto flex justify-between items-center">

            
            <div className="flex items-center">

                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src="https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/logo.jpg" alt="SP Catering Logo" className="w-full h-full object-cover" />
                </div>

                <h1 className="text-xl sm:text-2xl font-bold ml-2 text-[#4A2E1B]">{companyName}</h1>
                <img className="w-9 h-7" src="https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/veg-icon.png?updatedAt=1730002675053" alt="Veg logo" />

            </div>

            <button className="block sm:hidden focus:outline-none text-[#4A2E1B]" onClick={() => setIsMenuOpen(!isMenuOpen)}>

                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                

            </button>

            <nav className="hidden sm:flex space-x-4">

            <a href="#home" className="text-[#4A2E1B] hover:text-[#C45A2C]">Home</a>
            <a href="#about" className="text-[#4A2E1B] hover:text-[#C45A2C]">About</a>
            <a href="#services" className="text-[#4A2E1B] hover:text-[#C45A2C]">Services</a>
            <a href="#menu" className="text-[#4A2E1B] hover:text-[#C45A2C]">Menu</a>
            <a href="#gallery" className="text-[#4A2E1B] hover:text-[#C45A2C]">Gallery</a>
            <a href="#feedback" className="text-[#4A2E1B] hover:text-[#C45A2C]">Feedback</a>
            <a href="#contact" className="text-[#4A2E1B] hover:text-[#C45A2C]">Contact</a>



            </nav>

        </div>

        {
            isMenuOpen && (

                <nav className="sm:hidden bg-[#C45A2C] p-4">

                <a href="#home" className="block py-2 text-white hover:text-[#D4AF37]" onClick={handleMenuClose}>Home</a>
                <a href="#about" className="block py-2 text-white hover:text-[#D4AF37]" onClick={handleMenuClose}>About</a>
                <a href="#services" className="block py-2 text-white hover:text-[#D4AF37]" onClick={handleMenuClose}>Services</a>
                <a href="#menu" className="block py-2 text-white hover:text-[#D4AF37]" onClick={handleMenuClose}>Menu</a>
                <a href="#gallery" className="block py-2 text-white hover:text-[#D4AF37]" onClick={handleMenuClose}>Gallery</a>
                <a href="#feedback" className="block py-2 text-white hover:text-[#D4AF37]" onClick={handleMenuClose}>Feedback</a>
                <a href="#contact" className="block py-2 text-white hover:text-[#D4AF37]" onClick={handleMenuClose}>Contact</a>


            </nav>
                
            )
        }

    </header>

  )
}

export default Header
