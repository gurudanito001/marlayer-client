// components/ComingSoonModal.tsx
"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ComingSoonModal = ({ linkClasses, btnClasses, linkText, btnText = "Close", modalTitle, modalDescription, modalImage, btnLink, instantOpen }: { linkClasses: string, btnClasses?: string, linkText: string, btnText?: string, modalTitle: string, modalDescription: string, modalImage: string, btnLink?: string, instantOpen?: boolean }) => {
  // Marlayer's primary brand color
  const primaryColor = '#003C3C';
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
  const handleClickButton = () => {
    if(!btnLink){
      setIsOpen(false)
    }else{
      router.push(`${btnLink}`)
    }
  }

  useEffect(()=>{
    const timer = setTimeout( ()=>{
      if(instantOpen){
        setIsOpen(true)
      }
    }, 1500)
    return () => clearTimeout(timer);
  },[instantOpen])

  return (
    <section>
      <button onClick={handleOpen} className={` ${linkClasses}`}>{linkText}</button>


      {isOpen &&
        // Modal Overlay: Added w-screen and h-screen explicitly to ensure full coverage
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000] w-screen h-screen overflow-y-auto py-10">
          {/* Modal Content: White background, rounded corners, shadow, responsive width */}
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-5xl w-full mx-auto relative transform transition-all duration-300 scale-100 opacity-100">
            {/* Close Button: Absolute positioned at top right */}
            <button
              onClick={()=>setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image - Replaced figure with a div containing next/image */}
            <div className="flex justify-center my-6">
              {/* The parent div needs relative positioning and a defined height */}
              <div className="relative h-[420px] w-full overflow-hidden rounded-lg"> {/* Added rounded-lg for consistency */}
                <Image
                  src={`/images/homepage/${modalImage}`} // Path to your image in the public folder
                  alt={modalTitle} // Important for accessibility
                  fill // Makes the image fill the parent container
                  style={{ objectFit: 'contain' }} // Ensures the image covers the area without distortion
                  priority // Consider adding priority if this image is above the fold
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading for different viewports
                />
              </div>
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
                onClick={handleClickButton}
                className={`btn text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 ${btnClasses} border-primary`}
              >
                {btnText}
              </button>

              <button
                onClick={handleClose}
                className={`btn border-primary bg-neutral text-primary rounded-md shadow-md hover:shadow-lg transition-all duration-300 ml-5`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      }
    </section>

  );
};

export default ComingSoonModal;
