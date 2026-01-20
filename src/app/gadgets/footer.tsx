'use client';

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full px-6 pt-16 pb-10 text-sm text-gray-700">

      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto">

        {/* Logo */}
        {/* <div className="mb-10">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Image src="/images/marlayer-logo.svg" width={30} height={30} alt="Marlayer Logo" />
            <span className={`font-bold text-primary text-xl`}>Marlayer Gadgets</span>
          </div>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-20">

          <div>
            <h3 className="font-semibold mb-4 text-gray-900">About</h3>
            <ul className="space-y-3">
              <li className="hover:text-blue-600 cursor-pointer text-xs">About Marlayer Gadgets</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Orders</h3>
            <ul className="space-y-3 text-xs">
              <li className="hover:text-blue-600 cursor-pointer">Free standard delivery</li>
              <li className="hover:text-blue-600 cursor-pointer">
                Country availability and delivery restrictions
              </li>
              <li className="hover:text-blue-600 cursor-pointer">Managing an order</li>
              <li className="hover:text-blue-600 cursor-pointer">Payment methods</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
            <ul className="space-y-3 text-xs">
              <li className="hover:text-blue-600 cursor-pointer">Help Centre</li>
              <li className="hover:text-blue-600 cursor-pointer">Repairs</li>
              <li className="hover:text-blue-600 cursor-pointer">Fitbit Support</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact us</li>
              <li className="hover:text-blue-600 cursor-pointer">Disability support</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Sustainability</h3>
            <ul className="space-y-3 text-xs">
              <li className="hover:text-blue-600 cursor-pointer">Device recycling</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BORDER */}
        <hr className="border-gray-200 mb-6" />

        {/* FOOTER BOTTOM ROW */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-3">
            {/* Nigeria Flag */}
            <svg
              viewBox="0 0 640 480"
              fill="none"
              className="w-5 h-5 cursor-pointer hover:opacity-80 transition-opacity"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fillRule="evenodd" strokeWidth="1pt">
                {/* White center */}
                <path fill="#ffffff" d="M0 0h640v480H0z" />
                {/* Green sides */}
                <path fill="#008751" d="M426.6 0H640v480H426.6zM0 0h213.3v480H0z" />
              </g>
            </svg>
            <span className="text-gray-800">Nigeria</span>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-700 text-xs">
            <span className="hover:text-blue-600 cursor-pointer">Privacy</span>
            <span className="hover:text-blue-600 cursor-pointer">
              Google Nest Commitment to Privacy
            </span>
            <span className="hover:text-blue-600 cursor-pointer">Sales Terms</span>
            <span className="hover:text-blue-600 cursor-pointer">Terms of Service</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-700">
            <div className="flex items-center gap-4 text-gray-700">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>

              {/* Instagram */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors"
              >
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.451 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>

              {/* Facebook */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors"
              >
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>

              {/* YouTube */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>

              {/* TikTok */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.74-1.66.41-.71.4-1.57.39-2.38V4.54c0-1.51.05-3.01.03-4.52z" />
              </svg>

            </div>
          </div>

        </div>

      </div>

    </footer>
  );
}
