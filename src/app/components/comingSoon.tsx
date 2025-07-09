// components/ComingSoonModal.tsx
"use client"

import React, { useState } from 'react';

const ComingSoonModal = ({ linkClasses, btnClasses, linkText, btnText = "Close", modalTitle, modalDescription, modalImage }: { linkClasses: string, btnClasses?: string, linkText: string, btnText?: string, modalTitle: string, modalDescription: string, modalImage: string }) => {
  // Marlayer's primary brand color
  const primaryColor = '#003C3C';

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    console.log("handleopem")
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <section>
      <button onClick={handleOpen} className={` ${linkClasses}`}>{linkText}</button>


      {isOpen &&
        // Modal Overlay: Added w-screen and h-screen explicitly to ensure full coverage
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000] w-screen h-screen">
          {/* Modal Content: White background, rounded corners, shadow, responsive width */}
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-5xl w-full mx-auto relative transform transition-all duration-300 scale-100 opacity-100">
            {/* Close Button: Absolute positioned at top right */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="flex justify-center my-6">
              <figure className={`h-420 w-full bg-[url('/images/homepage/${modalImage}')] bg-no-repeat bg-cover bg-center`}>
              </figure>
            </div>

            {/* Modal Title */}
            <h3 className={`text-3xl font-bold text-center mb-4`} >
              {modalTitle}
            </h3>

            {/* Modal Description */}
            <article className='flex justify-center'>
              <p className="text-gray-700 text-center mb-6 max-w-2xl">
                {modalDescription}
              </p>
            </article>


            {/* Modal Button */}
            <div className="text-center">
              <button
                onClick={handleClose}
                className={`btn text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 ${btnClasses}`}
              >
                {btnText}
              </button>
            </div>
          </div>
        </div>
      }
    </section>

  );
};

export default ComingSoonModal;
