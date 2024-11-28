// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faArrowUpRightFromSquare,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Contact Us</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between space-y-8 gap-4 md:space-y-0 md:space-x-8">
        
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">Our Office</h3>
          <p>
            <strong>SP Catering Services</strong>
            <br />
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            No: 5, (Old No: 3), Nambuliar Street, Kondithope, Chennai-79.
          </p>

          <p className="mt-4">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            🇮🇳 +91 9840317167
            <a
              href="tel:9840317167"
              className="ml-2 text-green-500 hover:text-green-700"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </p>

          <p>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            spcateringspcatering@gmail.com
            <a
              href="mailto:contact@spcateringspcatering@gmail.com"
              className="ml-2 text-green-500 hover:text-green-700"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </p>

          <div className="flex space-x-4 mt-4">
            <a
              href="https://wa.me/9840317167"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-200 hover:scale-110"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-green-500" />
            </a>
            <a
              href="https://www.instagram.com/sp_catering_?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-200 hover:scale-105"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-pink-500" />
            </a>
            <a
              href="https://www.youtube.com/@SPCateringSPCatering"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform duration-200 hover:scale-105"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" className="text-red-600" />
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">Our Location</h3>
          <div className="map-container overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7556.664381678923!2d80.2738590249172!3d13.094324049114315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526fece0a7e717%3A0xf2cbb49687e30ae5!2sSP%20Catering%20Services!5e0!3m2!1sen!2sin!4v1729791164781!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps Location"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
