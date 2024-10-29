// eslint-disable-next-line no-unused-vars
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const videos = [
  "VfUUGc95pio",
  "GXzvsKULI60",
  "0gTBT5RPeCQ",
  "9rse5ljDsuw",
  "491y2yCxnDQ",
  "O15HeN4QO_E",
  "h9MAJnvngK8",
];

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Our Youtube Videos
        </h2>

        <div className="flex justify-center mb-4 space-x-4">
          <div className="custom-prev bg-green-600 text-white p-3 rounded-md cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>

          <div className="custom-next bg-green-600 text-white p-3 rounded-md cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
        >
          {videos.map((videoId, index) => (
            <SwiperSlide
              className="bg-white shadow-lg rounded-lg p-6"
              key={index}
            >
              <div className="video-container">
                <iframe
                  className="rounded-lg"
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Youtube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
