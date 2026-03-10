"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

export default function ContactFormSection() {
  // Add state to handle form submission UI
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset(); // Clear the form
        
        // Reset the success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  }

  return (
    <section className="w-full bg-white py-20 xl:pt-32 px-6 md:px-12 lg:px-16 xl:px-28">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#11241E] mb-4 tracking-tight">
            Have any questions?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Whether it's a question, suggestion, or feedback, we're just a message away
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <div className="relative w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-sm">
            <Image 
              src="/images/contact/handshake.jpg" 
              alt="Business handshake" 
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="bg-white rounded-[2rem] border border-gray-100 p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
            {/* Added onSubmit handler here */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Emily Carter" 
                    required
                    className="w-full bg-[#FAFAFA] border border-transparent text-gray-900 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#0A4731] focus:bg-white focus:ring-1 focus:ring-[#0A4731] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="emily.carter@gmail.com" 
                    required
                    className="w-full bg-[#FAFAFA] border border-transparent text-gray-900 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:border-[#0A4731] focus:bg-white focus:ring-1 focus:ring-[#0A4731] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-700">Subject / Service of Interest</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                  </div>
                  <select 
                    id="service"
                    name="service"
                    className="w-full bg-[#FAFAFA] border border-transparent text-gray-900 rounded-xl py-3 pl-11 pr-10 appearance-none focus:outline-none focus:border-[#0A4731] focus:bg-white focus:ring-1 focus:ring-[#0A4731] transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="academy">Tech Academy Enrollment</option>
                    <option value="software">Software Solutions / Development</option>
                    <option value="gadgets">Flagship Gadgets / Hardware</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Drop a quick message</label>
                <div className="relative">
                  <div className="absolute top-3 left-0 pl-4 flex items-start pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                  </div>
                  <textarea 
                    id="message"
                    name="message"
                    placeholder="Type message..." 
                    required
                    rows={4}
                    className="w-full bg-[#FAFAFA] border border-transparent text-gray-900 rounded-xl py-3 pl-11 pr-4 resize-none focus:outline-none focus:border-[#0A4731] focus:bg-white focus:ring-1 focus:ring-[#0A4731] transition-colors"
                  ></textarea>
                </div>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="bg-green-50 text-green-700 p-4 rounded-xl text-sm flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Your message has been sent successfully. We will be in touch soon!
                </div>
              )}
              
              {status === 'error' && (
                <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              {/* Submit Button - Updates based on loading state */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="bg-[#0A4731] hover:bg-[#073624] disabled:bg-[#0A4731]/70 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 shadow-sm flex items-center justify-center gap-2 w-full md:w-auto min-w-[160px]"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Sending...
                    </>
                  ) : (
                    'Send message'
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}