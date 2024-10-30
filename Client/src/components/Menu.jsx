// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToggleOff,
  faToggleOn,
  faChevronDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const [language, setLanguage] = useState("English");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [button, setButton] = useState(faToggleOff);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    {
      title: language === "English" ? "Breakfast" : "காலை உணவு",
      items: [
        language === "English"
          ? "Kasi Halwa/ Carrot Halwa"
          : "காசி அல்வா/ கேரட் அல்வா",
        language === "English" ? " Makkan Peda" : "மக்கன் பேடா",
        language === "English" ? "Ghee Pongal" : "நெய் பொங்கல்",
        language === "English" ? "Aappam" : "ஆப்பம்",
        language === "English"
          ? "Idly/ Malli Idly/ Ilaneer Idly"
          : "இட்லி/ மல்லி இட்லி/ இளநீர் இட்லி",
        language === "English" ? "Poori" : "பூரி",
        language === "English"
          ? "Dosa/ Masal Dosa"
          : "தோசை/ மசால் தோசை",
        language === "English"
          ? "Medhu Vada/ Masal Vada"
          : "மெது வடை/ மசால் வடை",
        language === "English" ? "Kosthu" : "கொஸ்து",
        language === "English"
          ? "Channa Masala/ Vadacurry"
          : "சன்னா மசாலா/ வடகறி",
        language === "English" ? "Tiffin Sambar" : "டிபன் சாம்பார்",
        language === "English"
          ? "Kara Chutney/ Coconut Chutney"
          : "கார சட்னி/ தேங்காய் சட்னி",
        language === "English"
          ? "Milk/Coffee/Tea/Boost/Horlicks"
          : "பால்/காபி/டீ/பூஸ்ட்/ஹார்லிக்ஸ்",
        language === "English" ? "Water Bottle" : "தண்ணீர் பாட்டில்",
      ],
    },
    {
      title: language === "English" ? "Lunch" : "மதிய உணவு/ கல்யாண சாப்பாடு",
      items: [
        language === "English" ? "Rasamalai" : "ரச  மலாய்",
        language === "English" ? "Badam Roll" : "பாதாம் ரோல்",
        language === "English"
          ? "Semiya Payasam/ Parupu Payasam"
          : "சேமியா பாயசம்/ பருப்பு பாயசம்",
        language === "English"
          ? "Parupu Vada/ Thayir Vada"
          : "பருப்பு வடை/ தயிர் வடை",
        language === "English"
          ? "Onion Pakoda/ Cauliflower Pakoda"
          : "வெங்காய பக்கோடா/ காலிஃபிளவர் பக்கோடா",
        language === "English"
          ? "Veg Dum Biryani/ Kashmiri Pulao"
          : "வெஜ் டம் பிரியாண/ காஷ்மீரி புலாவ்",
        language === "English"
          ? "Onion Raitha/ Cucumber Raitha"
          : "வெங்காய தயிர் பச்சடி/ வெள்ளரி தயிர் பச்சடி",
        language === "English"
          ? "Chapati/ Rumali Roti"
          : "சப்பாத்தி/ ருமாலி ரொட்டி",
        language === "English"
          ? "Mushroom Pepper Masala/ Kaju Pepper Masala"
          : "காளான் மிளகு மசாலா/ காஜு மிளகு மசாலா",
        language === "English" ? "White Rice" : "சாதம்",
        language === "English" ? "Parupu Nei" : "பருப்பு நெய்",
        language === "English" ? "Sambar" : "சாம்பார்",
        language === "English" ? "Vathakozhambu" : "வத்தகொழம்பு",
        language === "English" ? "Rasam/ Mysore Rasam" : "ரசம்/ மைசூர் ரசம்",
        language === "English" ? "Veg Aviyal" : "அவியல்",
        language === "English"
          ? "Potato chops/ Seppankazhangu Roast"
          : "உருளைக்கிழங்கு சாப்ஸ்/ சேப்பங்கிழங்கு வறுவல்",
        language === "English" ? "Appalam" : "அப்பளம்",
        language === "English"
          ? "Potato chips/ Nendran Chips"
          : "உருளைக்கிழங்கு சிப்ஸ்/ நேந்திரன் சிப்ஸ்",
        language === "English" ? "Curd" : "தயிர்",
        language === "English" ? "Pickle/ Puli Inji" : "ஊறுகாய்/ புளி இஞ்சி",
        language === "English" ? "Moor Milagai" : "மோர் மிளகாய்",
        language === "English" ? "Water Bottle" : "தண்ணீர் பாட்டில்",
        language === "English" ? "Cut Fruits" : "கட் ப்ரூட்ஸ்",
        language === "English"
          ? "Special Beda/ Vethala Paaku"
          : "ஸ்பெஷல் பீடா/ வெத்தலை பாக்கு",
        language === "English" ? "Abukatta Ice Cream" : "அபுகட்டா ஐஸ்கிரீம்",
        language === "English" ? "Water Bottle" : "தண்ணீர் பாட்டில்",
      ],
    },
    {
      title: language === "English" ? "Evening Tiffin" : "மாலை டிபன்",
      items: [
        language === "English" ? "Bombay Jilebi" : "பம்பாய் ஜிலேபி",
        language === "English"
          ? "Mysore Bonda/ Veg Bonda"
          : "மைசூர் போண்டா/ வெஜ் போண்டா",
        language === "English" ? "Variety Bajji" : "வெரைட்டி பஜ்ஜி",
        language === "English" ? "Rava Dosa" : "ரவா தோசை",
        language === "English" ? "Coconut Chutney" : "டிபன் சாம்பார்",
        language === "English" ? "Tiffin Sambar" : "தேங்காய் சட்னி",
        language === "English" ? "Filter Coffee/ Tea" : "பில்டர் காபி/ தேநீர்",
        language === "English" ? "Kuzhi Paniyaram" : "குழி பணியாரம்",
        language === "English" ? "Water Bottle" : "தண்ணீர் பாட்டில்",
      ],
    },
    {
      title: language === "English" ? "Dinner" : "இரவு உணவு",
      items: [
        language === "English"
          ? "Veg Soup/ Tomato Soup"
          : "வெஜ் சூப்/ டொமெட்டோ சூப்",
        language === "English"
          ? "Badam Halwa/ Gulab Jamun"
          : "பாதாம் ஹல்வா/ குலாப் ஜாமுன்",
        language === "English" ? "Malpua" : "மால்புவா",
        language === "English" ? "Veg Spring Roll" : "வெஜ் ஸ்பிரிங் ரோல்",
        language === "English"
          ? "Paneer Tikka/ Veg Lollipop"
          : "பன்னீர் டிக்கா/ வெஜ் லாலிபாப்",
        language === "English"
          ? "Paneer Butter Masala/ Kadai Paneer"
          : "பன்னீர் பட்டர் மசாலா/ கடாய் பன்னீர்",
        language === "English"
          ? "Veg Dum Biryani/ Kashmiri Pulao"
          : "வெஜ் தம் பிரியாணி/ காஷ்மீரி புலாவ்",
        language === "English" ? "Brinjal Gravy" : "கத்தரிக்காய் கிரேவி",
        language === "English" ? "Onion Raitha" : "வெங்காய தயிர் பச்சடி",
        language === "English" ? "Idiyappam" : "இடியப்பம்",
        language === "English"
          ? "Onion Podi Uthappam"
          : "வெங்காய பொடி ஊத்தப்பம்",
        language === "English"
          ? "Kara Chutney/ Coconut Chutney"
          : "கார சட்னி/ தேங்காய் சட்னி",
        language === "English"
          ? "Bisibelabath/ Sambar Rice"
          : "பிசிபெலபாத்/ சாம்பார் சாதம்",
        language === "English"
          ? "Potata Chips/ Vazhaka Chips"
          : "உருளைக்கிழங்கு சிப்ஸ்/ வாழக்கை சிப்ஸ்",
        language === "English" ? "White Rice" : "சாதம்",
        language === "English" ? "National Poriyal" : "நேஷனல் பொரியல்",
        language === "English" ? "Potata Roast" : "உருளைக்கிழங்கு வறுவல்",
        language === "English"
          ? "Bagalabath/ Curd Rice"
          : "பகளாபாத்/ தயிர் சாதம்",
        language === "English" ? "Pickle" : "ஊறுகாய்",
        language === "English" ? "Moor Milagai" : "மோர் மிளகாய்",
        language === "English" ? "Ilaneer Payasam" : "இளநீர் பாயசம்",
        language === "English" ? "Water Bottle" : "தண்ணீர் பாட்டில்",
      ],
    },
  ];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "English" ? "Tamil" : "English"));
    setButton((prev) => (prev === faToggleOff ? faToggleOn : faToggleOff));
  };

  const handleMealSelect = (index) => {
    setCurrentIndex(index);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // const nextItem = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % menuItems.length);
  // };

  // const prevItem = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? menuItems.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <section id="menu" className="py-20">
    <div className="container mx-auto py-12 px-4 text-center">
      <h2 className="text-4xl font-bold mb-8">Menu</h2>

      {/* Language Toggle */}
      <div className="flex justify-center gap-7 mb-4">
        {language === "English" ? (
          <p className="font-bold text-2xl mt-3 text-green-500">English</p>
        ) : (
          <p className="font-bold text-2xl mt-3 text-red-500">English</p>
        )}

        <button
          onClick={toggleLanguage}
          className="transform transition-transform duration-150 hover:scale-105"
        >
          <FontAwesomeIcon icon={button} size="4x" />
        </button>

        {language === "English" ? (
          <p className="font-bold text-2xl mt-2 text-red-500">தமிழ்</p>
        ) : (
          <p className="font-bold text-2xl mt-2 text-green-500">தமிழ்</p>
        )}
      </div>

      {/* Navigation Buttons */}
      {/* <button
        onClick={prevItem}
        className="mr-4 p-2 bg-yellow-400 text-white rounded shadow transform transition-transform duration-150 hover:scale-105"
      >
        {menuItems[currentIndex === 0 ? menuItems.length - 1: currentIndex - 1].title}
      </button>
      <button
        onClick={nextItem}
        className="p-2 bg-yellow-400 text-white rounded shadow transform transition-transform duration-150 hover:scale-105"
      >
        {menuItems[currentIndex >= menuItems.length - 1 ? 0 : currentIndex + 1 % menuItems.length].title}
      </button> */}

      {/* Dropdown Menu */}
      <div className="relative inline-block text-left mb-8">
        <button
          className="bg-yellow-400 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
          onClick={toggleDropdown}
        >
          <span>{menuItems[currentIndex].title}</span>
          <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
        </button>

        {/* Dropdown List */}
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded shadow-md">
            <ul className="list-none text-left p-2">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleMealSelect(index)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Menu Items Display */}
      <div className="mt-8 p-4 border border-gray-300 rounded shadow-md w-full mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          {menuItems[currentIndex].title}
        </h3>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-8">
          {/* First Column */}
          <ul className="list-none flex-1">
            {menuItems[currentIndex].items.slice(0, 14).map((item, index) => (
              <li key={index} className="text-lg text-left">
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                {item}
              </li>
            ))}
          </ul>

          {/* Second Column */}
          <ul className="list-none flex-1">
            {menuItems[currentIndex].items.slice(14, 28).map((item, index) => (
              <li key={index + 10} className="text-lg text-left">
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Menu;
