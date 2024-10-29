// eslint-disable-next-line no-unused-vars
import React from "react";

const Services = () => {
  const servicesList = [
    "Birthday Party",
    "Upanayanam",
    "Puberty Ceremony",
    "Engagement",
    "Wedding Event",
    "Baby Shower",
    "House Warming Ceremony",
    "Other Special Occasions"
  ];

  const gallery = [
    {
      name: "Mangala Vadhyam",
      image:
        "https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/Wedding%20Planner/mangala_vadhyam-1.jpg?updatedAt=1729172296408",
    },
    {
      name: "Vaideega Materials",
      image:
        "https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/Wedding%20Planner/vaideega_materials-1.jpg?updatedAt=1729172296511",
    },
    {
      name: "Kolam Drawing at Mandapam",
      image:
        "https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/Wedding%20Planner/kolam-1.jpg?updatedAt=1729172296485",
    },
    {
      name: "Kasi Yatra Set",
      image:
        "https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/Wedding%20Planner/kasiyatra_set-1.jpg?updatedAt=1729172296404",
    },
    {
      name: "Seer Bakshanam",
      image:
        "https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/Wedding%20Planner/seer-1.jpg?updatedAt=1729172296402",
    },
  ];

  return (
    <section id="services">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start justify-between mb-8 space-y-4 gap-4 md:space-y-0 md:space-x-6">
        
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <p className="text-lg leading-relaxed">
          At SP Catering Services, we are dedicated to delivering exceptional catering experiences. Whether it's an intimate gathering of 75 guests or a grand event with over 2,000 attendees, our team works tirelessly to ensure every meal is crafted with care, precision, and passion. With a strong focus on quality and customer satisfaction, we strive to make every occasion memorable and stress-free. We proudly offer our services across Tamil Nadu, ensuring that no matter where your event is, you can rely on us to provide delicious food for your guests on your special occasions. From traditional South Indian dishes to an array of multi-cuisine options, we cater to diverse tastes and preferences. Let us take care of the culinary details, so you can focus on creating cherished moments and lasting memories.

          </p>
        </div>

        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Our Services Include</h2>
          <ul className="list-disc list-inside">
            {servicesList.map((service, index) => (
              <li key={index} className="text-lg mb-2">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold">Wedding Planner</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {gallery.map((item, index) => (
            <div key={index} className="rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-gray-100">
                <h4 className="text-md font-semibold">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Services;
