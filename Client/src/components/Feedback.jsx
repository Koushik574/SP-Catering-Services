// eslint-disable-next-line no-unused-vars
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation"; 

const reviews = [
  {
    name: "Sai Koushik",
    review: "Their Rasamalai, potato fry, paneer tikka, gobi 65 and veg meals are worth of golden rating💛🥇",
    rating: 5,
  },
  {
    name: "Akshaya Moorthy",
    review: "Very hygienic and tasty food. Trustworthy caterers and very high quality food. Their sweets are to die for...",
    rating: 5,
  },
  {
    name: "Aadhithya D",
    review: "SP Catering Services handled the catering for my Upanayanam, From start to finish, their service was professional...",
    rating: 5,
  },
  {
    name: "Aakash Moorthy",
    review: "One of the best and most honest catering services. I experienced the richness and freshness...",
    rating: 5,
  },
  {
    name: "Lakshmi Sundar",
    review: "They serve  pure Sathvic south indian veg foods for our special occasions.kalyana sapadu is my favourite.",
    rating: 5,
  },
  {
    name: "Chitra Balaji",
    review: "I have tasted the food of SP catering several times the food is very hygiene and their service is extraordinary...",
    rating: 5,
  },
  {
    name: "Dinesh N Swamy",
    review: "Super Menu, Excellent Taste, Perfect  Service and Complete Satisfaction...👍👌💯 …",
    rating: 5,
  },
  {
    name: "Aarthi Dinesh",
    review: "Very very professional way of handling customers and food is very tasty and authentic...",
    rating: 5,
  },
  {
    name: "Anuradha Moorthy",
    review: `Excellent quality of food, service, hygiene are the main criteria for SP CATERING, SUCCESS
  NO COMPROMISE...`,
    rating: 5,
  },
];

const Feedback = () => {
  return (
    <section id="feedback" className="py-20">
    <div className="container mx-auto py-8 px-4 relative">
      <h2 className="text-2xl font-bold text-center mb-6">
        What Our Clients Say
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
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        spaceBetween={40} 
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transform transition-all duration-200 hover:scale-105 hover:bg-orange-400"
          >
            <div className="flex flex-col items-center transform transition-transform duration-200 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
              <p className="text-gray-600 mb-4 text-center">{review.review}</p>
              <div className="flex items-center align-stretch">
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.9c.969 0 1.371 1.24.588 1.81l-3.964 2.874a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.964-2.874a1 1 0 00-1.176 0l-3.964 2.874c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.54 9.101c-.783-.57-.381-1.81.588-1.81h4.9a1 1 0 00.95-.69l1.518-4.674z" />
                    </svg>
                  ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      <div className="text-center mt-8">
        <a
          href="https://g.page/r/CeUK44eWtMvyEAE/review"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 hover:bg-purple-500 text-white py-2 px-6 rounded-full text-lg transition-colors"
        >
          Rate us on Google
        </a>
      </div>
    </div>
    </section>
  );
};

export default Feedback;
