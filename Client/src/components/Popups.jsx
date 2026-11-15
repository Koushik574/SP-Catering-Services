'use client';

import { useState, useEffect } from "react";

export default function Popups() {
  const [showGoogleReviewPopup, setShowGoogleReviewPopup] = useState(false);
  const [showInstagramPopup, setShowInstagramPopup] = useState(false);

  useEffect(() => {
    setShowGoogleReviewPopup(true);
  }, []);

  const handleCloseGooglePopup = () => {
    setShowGoogleReviewPopup(false);
    setShowInstagramPopup(true);
  };

  const handleCloseInstagramPopup = () => {
    setShowInstagramPopup(false);
  };

  return (
    <>
      {showGoogleReviewPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#F9F6EE] p-6 rounded-lg shadow-lg w-11/12 max-w-md relative text-center">
            <button
              className="absolute top-3 right-3 text-[#4A2E1B] hover:text-gray-800 text-lg"
              onClick={handleCloseGooglePopup}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-[#4A2E1B]">Rate Us On Google!</h2>
            <p className="text-[#4A2E1B] mb-4">
              We'd love to hear your feedback. It helps us grow!
            </p>
            <a
              href="https://g.page/r/CeUK44eWtMvyEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C45A2C] hover:bg-[#a7461e] text-white py-2 px-4 rounded-md"
            >
              Leave Review
            </a>
          </div>
        </div>
      )}

      {showInstagramPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#F9F6EE] p-6 rounded-lg shadow-lg w-11/12 max-w-md relative text-center">
            <button
              className="absolute top-3 right-3 text-[#4A2E1B] hover:text-gray-800 text-lg"
              onClick={handleCloseInstagramPopup}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-[#4A2E1B]">Follow Us On Instgaram!</h2>
            <p className="text-[#4A2E1B] mb-4">Check out our Instagram Page.</p>
            <a
              href="https://www.instagram.com/sp_catering_?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C45A2C] hover:bg-[#a7461e] text-white py-2 px-4 rounded-md"
            >
              View Instagram
            </a>
          </div>
        </div>
      )}
    </>
  );
}
