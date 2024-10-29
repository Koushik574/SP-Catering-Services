import { useState, useEffect } from "react";

const Home = () => {
  const images = [
    "https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/saibaba.jpg?updatedAt=1729006338123",
    "https://ik.imagekit.io/nknso76xld/SP%20Catering%20Services/golagamudi3.jpg?updatedAt=1729006703042",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    // console.log("useEffect called")

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="pt-16 md:pt-0">
    <div className="relative w-full" style={{ paddingBottom: "46%" }}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index == currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
    </section>
  );
};

export default Home;
