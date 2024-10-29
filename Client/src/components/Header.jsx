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
    
    <header className="p-4 sm:relative sm:w-auto sm:static fixed top-0 left-0 w-full z-50 bg-white">

        <div className="    container mx-auto flex justify-between items-center">

            
            <div className="flex items-center">

                <div className="w-10 h-10 bg-gray-500 rounded-full">
                    <img src="https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/SP.jpg?updatedAt=1729959843265" alt="SP Catering Logo" />
                </div>

                <h1 className="text-xl sm:text-2xl font-bold ml-2">{companyName}</h1>
                <img className="w-9 h-7" src="https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/veg-icon.png?updatedAt=1730002675053" alt="Veg logo" />

            </div>

            <button className="block sm:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>

                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                

            </button>

            <nav className="hidden sm:flex space-x-4">

            <a href="#home" className="hover:text-veganOrange">Home</a>
            <a href="#about" className="hover:text-veganOrange">About</a>
            <a href="#services" className="hover:text-veganOrange">Services</a>
            <a href="#menu" className="hover:text-veganOrange">Menu</a>
            <a href="#gallery" className="hover:text-veganOrange">Gallery</a>
            <a href="#feedback" className="hover:text-veganOrange">Feedback</a>
            <a href="#contact" className="hover:text-veganOrange">Contact</a>



            </nav>

        </div>

        {
            isMenuOpen && (

                <nav className="sm:hidden bg-yellow-500 p-4">

                <a href="#home" className="block py-2" onClick={handleMenuClose}>Home</a>
                <a href="#about" className="block py-2" onClick={handleMenuClose}>About</a>
                <a href="#services" className="block py-2" onClick={handleMenuClose}>Services</a>
                <a href="#menu" className="block py-2" onClick={handleMenuClose}>Menu</a>
                <a href="#gallery" className="block py-2" onClick={handleMenuClose}>Gallery</a>
                <a href="#feedback" className="block py-2" onClick={handleMenuClose}>Feedback</a>
                <a href="#contact" className="block py-2" onClick={handleMenuClose}>Contact</a>


            </nav>
                
            )
        }

    </header>

  )
}

export default Header