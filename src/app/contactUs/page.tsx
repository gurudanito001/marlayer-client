"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  ChevronDown, 
  ArrowRight,
  Check,
  Search
} from "lucide-react";
import NavBar from "../(home)/navbar";
import Footer from "../(home)/footer";

// --- Country Data ---
const countries = [
  { code: "AF", name: "Afghanistan", dial: "+93" },
  { code: "AL", name: "Albania", dial: "+355" },
  { code: "DZ", name: "Algeria", dial: "+213" },
  { code: "AR", name: "Argentina", dial: "+54" },
  { code: "AM", name: "Armenia", dial: "+374" },
  { code: "AW", name: "Aruba", dial: "+297" },
  { code: "AU", name: "Australia", dial: "+61" },
  { code: "AT", name: "Austria", dial: "+43" },
  { code: "AZ", name: "Azerbaijan", dial: "+994" },
  { code: "BD", name: "Bangladesh", dial: "+880" },
  { code: "BB", name: "Barbados", dial: "+1-246" },
  { code: "BY", name: "Belarus", dial: "+375" },
  { code: "BE", name: "Belgium", dial: "+32" },
  { code: "BZ", name: "Belize", dial: "+501" },
  { code: "BJ", name: "Benin", dial: "+229" },
  { code: "BF", name: "Burkina Faso", dial: "+226" },
  { code: "BI", name: "Burundi", dial: "+257" },
  { code: "KH", name: "Cambodia", dial: "+855" },
  { code: "CM", name: "Cameroon", dial: "+237" },
  { code: "CA", name: "Canada", dial: "+1" },
  { code: "CV", name: "Cape Verde", dial: "+238" },
  { code: "EG", name: "Egypt", dial: "+20" },
  { code: "SV", name: "El Salvador", dial: "+503" },
  { code: "ET", name: "Ethiopia", dial: "+251" },
  { code: "FI", name: "Finland", dial: "+358" },
  { code: "FR", name: "France", dial: "+33" },
  { code: "HK", name: "Hong Kong", dial: "+852" },
  { code: "HU", name: "Hungary", dial: "+36" },
  { code: "IS", name: "Iceland", dial: "+354" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "ID", name: "Indonesia", dial: "+62" },
  { code: "IE", name: "Ireland", dial: "+353" },
  { code: "IL", name: "Israel", dial: "+972" },
  { code: "IT", name: "Italy", dial: "+39" },
  { code: "JM", name: "Jamaica", dial: "+1-876" },
  { code: "JP", name: "Japan", dial: "+81" },
  { code: "JE", name: "Jersey", dial: "+44-1534" },
  { code: "JO", name: "Jordan", dial: "+962" },
  { code: "MA", name: "Morocco", dial: "+212" },
  { code: "MZ", name: "Mozambique", dial: "+258" },
  { code: "NI", name: "Nicaragua", dial: "+505" },
  { code: "NE", name: "Niger", dial: "+227" },
  { code: "NG", name: "Nigeria", dial: "+234" },
  { code: "ZA", name: "South Africa", dial: "+27" },
  { code: "SS", name: "South Sudan", dial: "+211" },
  { code: "ES", name: "Spain", dial: "+34" },
  { code: "LK", name: "Sri Lanka", dial: "+94" },
  { code: "UG", name: "Uganda", dial: "+256" },
  { code: "UA", name: "Ukraine", dial: "+380" },
  { code: "AE", name: "United Arab Emirates", dial: "+971" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "US", name: "United States", dial: "+1" },
];

export default function ContactPage() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = countries
    .filter((country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const lowerQuery = searchQuery.toLowerCase();
      const aStarts = a.name.toLowerCase().startsWith(lowerQuery);
      const bStarts = b.name.toLowerCase().startsWith(lowerQuery);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return a.name.localeCompare(b.name);
    });

  return (
    <main>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }
        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent;
        }
      `}</style>
      <NavBar />
      <div className="bg-[#F0F2F5] flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-[1200px] bg-white rounded-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="w-full lg:w-[40%] bg-[#003C3C] text-white p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden">
            
           
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-2xl pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-teal-200 mb-2 uppercase text-sm">Contact Us</h3>
              <h1 className="text-2xl lg:text-4xl font-bold mb-6">How can we help you today?</h1>
              <p className="text-teal-100/80 text-md lg:text-lg mb-12">
                From software solutions to tech education and premium gadgets - let us know what you need, and we'll get it done.
              </p>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-teal-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Our Address</h4>
                    <p className="text-teal-100/70 text-sm mt-1">6 Oremeta Street Oregun, Ikeja <br />Lagos, Nigeria</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-teal-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <a href="mailto:hello@marlayer.com" className="text-teal-100/70 text-sm mt-1 hover:text-white transition-colors">daniel.marlayer@gmail.com</a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-teal-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Support</h4>
                    <a href="tel:+234800000000" className="text-teal-100/70 text-sm mt-1 hover:text-white transition-colors">+234 8140715723</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="relative z-10 mt-12 pt-12 border-t border-white/10">
               <div className="flex gap-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#003C3C] transition-all">
                      <Icon size={18} />
                    </a>
                  ))}
               </div>
            </div>
          </div>

          {/* --- RIGHT PANEL (The Form) --- */}
          <div className="w-full lg:w-[60%] bg-white p-10 lg:p-14">
            
            <form className="space-y-8">
              <div className="lg:hidden mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
                <p className="text-gray-500 text-sm">We'd love to hear from you.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Name */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full border-b border-gray-300 py-3 text-gray-900 focus:border-[#003C3C] focus:outline-none transition-colors bg-transparent placeholder:text-gray-400" 
                    placeholder="John"
                  />
                </div>

                {/* Last Name */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full border-b border-gray-300 py-3 text-gray-900 focus:border-[#003C3C] focus:outline-none transition-colors bg-transparent placeholder:text-gray-400" 
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full border-b border-gray-300 py-3 text-gray-900 focus:border-[#003C3C] focus:outline-none transition-colors bg-transparent placeholder:text-gray-400" 
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone with Country Dropdown */}
                <div className="group relative" ref={dropdownRef}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <div className="flex items-center border-b border-gray-300 focus-within:border-[#003C3C] transition-colors">
                    
                    {/* Dropdown Toggle */}
                    <button 
                      type="button" 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-2 py-3 pr-3 hover:bg-gray-50 transition-colors"
                    >
                      <Image src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} width={20} height={15} alt={selectedCountry.name} />
                      <ChevronDown size={14} className="text-gray-400" />
                    </button>

                    {/* Dropdown List */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 max-h-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 flex flex-col overflow-hidden">
                        <div className="p-2 border-b border-gray-100 bg-white">
                          <div className="relative">
                            <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                            <input
                              type="text"
                              placeholder="Search..."
                              className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#003C3C] transition-colors"
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="overflow-y-auto custom-scrollbar flex-1">
                        {filteredCountries.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(country);
                              setIsDropdownOpen(false);
                              setSearchQuery("");
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center justify-between transition-colors border-b border-gray-50 last:border-0"
                          >
                            <div className="flex items-center gap-3">
                              <Image src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} width={20} height={15} alt={country.name} />
                              <span className="text-sm text-gray-700">{country.name}</span>
                            </div>
                            {selectedCountry.code === country.code && <Check size={14} className="text-[#003C3C]" />}
                          </button>
                        ))}
                        {filteredCountries.length === 0 && (
                          <div className="p-4 text-center text-sm text-gray-500">No results found</div>
                        )}
                        </div>
                      </div>
                    )}

                    {/* Number Input */}
                    <div className="flex-1 flex items-center">
                       <span className="text-gray-500 font-medium mr-2">{selectedCountry.dial}</span>
                       <input 
                          type="tel" 
                          className="w-full py-3 text-gray-900 bg-transparent focus:outline-none placeholder:text-gray-400" 
                          placeholder="800 123 4567"
                       />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                 <label className="block text-sm font-semibold text-gray-700 mb-4">I'm interested in...</label>
                 <div className="flex flex-wrap gap-x-3 gap-y-6">
                    {['Web Development', 'Gadgets / Hardware', 'Software Consultancy', 'Other'].map((topic) => (
                       <label key={topic} className="cursor-pointer">
                          <input type="radio" name="topic" className="peer sr-only" />
                          <span className="px-4 py-2 rounded-full border border-gray-300 text-sm text-gray-600 peer-checked:bg-[#003C3C] peer-checked:text-white peer-checked:border-[#003C3C] transition-all hover:border-[#003C3C]">
                             {topic}
                          </span>
                       </label>
                    ))}
                 </div>
              </div>

              {/* Message */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea 
                  rows={3} 
                  className="w-full border-b border-gray-300 py-3 text-gray-900 focus:border-[#003C3C] focus:outline-none transition-colors bg-transparent placeholder:text-gray-400 resize-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              {/* Footer / Submit */}
              <div className="pt-4">
                <button className="group w-full md:w-auto bg-[#003C3C] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#002A2A] transition-all shadow-lg hover:shadow-xl">
                  Send Message
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-[#1F1F1F] mt-4">
                  By submitting this form, you agree to our <a href="/terms&conditions" className="underline font-bold hover:text-[#003C3C]">Terms&Conditions</a> and <a href="/privacyandpolicy" className="underline font-bold hover:text-[#003C3C]">Privacy Policy</a>.
                </p>
              </div>

            </form>
          </div>

        </div>
      </div>
      <Footer theme="dark"/>
    </main>
  );
}