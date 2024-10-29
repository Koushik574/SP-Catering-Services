import { useState, useEffect } from "react";

const AboutUs = () => {
  const people = [
    {
      name: "Parthasarathy",
      designation: "Proprietor",
      image:
        "https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/appa6.jpg?updatedAt=1729091543548",
    },
    {
      name: "Sundar",
      designation: "Co-Proprietor & Head Chef",
      image:
        "https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/naina.jpg?updatedAt=1729086102836",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [people.length]);

  return (
    <section id="about">
      <div className="container mx-auto px-4 py-8 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-5/12 relative mb-8 md:mb-0 transform transition-transform duration-200 hover:scale-105 bg-white rounded-lg shadow-lg hover:shadow-2xl">
            <div className="relative w-full h-96">
              {people.map((person, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-72 rounded-md">
                    <h3 className="text-xl font-bold">{person.name}</h3>
                    <p className="text-md">{person.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-7/12 p-16 text-left transform transition-transform duration-200 hover:scale-105 bg-white rounded-lg shadow-lg hover:shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-lg leading-relaxed">
              Welcome to SP Catering Services, a family-owned business with over
              40+ years of experience in delivering exceptional catering
              solutions. Our mission is to provide delicious, high-quality
              <span className="text-green-600 font-bold"> vegetarian</span> food
              with unparalleled service.
              <span className="font-semibold">
                Our Proprietor,
                <span className="text-yellow-300"> Parthasarathy</span>, and his
                elder brother, co-proprietor,
                <span className="text-yellow-300"> Sundar</span>,
              </span>
              have built this company from the ground up with dedication and a
              passion for culinary excellence. Whether it's a wedding, birthday
              event, or any special occasion, we aim to make your event
              memorable with our top-notch service and flavorful dishes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
