"use client";
// components/contact.tsx
import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mjkbrlwj");

  if (state.succeeded) {
    return (
      <section id="contact" className="bg-white py-5">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold">Thanks for your message! We&apos;ll get back to you soon.</h3>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-white py-5">
      <div className="container mx-auto text-center">
        <div className="flex flex-col lg:flex-row mt-24">
          {/* Contact Information Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-12">
            <h3 className="text-4xl font-bold text-black relative flex ml-12 mb-20">
              <span className="uppercase">Contact Me</span>
              <div className="mt-6 absolute bottom-20 opacity-10 h-3">
                <Image src="/images/dots.svg" alt="Decorative dots pattern" width={300} height={200} className="text-red-500" />
              </div>
            </h3>
            <h3 className="text-3xl text-justify text-black mb-6 ml-12">Want to reach me? Fill out the form on the side or use the department email below.</h3>
            {/* Icons */}
            <div className="flex flex-col gap-3 text-lg ml-12">
              <div className="flex items-center space-x-2">
                <FaEnvelope size={26} aria-hidden="true" />
                <p>contact@medlaamyry.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone size={26} aria-hidden="true" />
                <p>+212 619 367 728</p>
              </div>
            </div>
          </div>
          {/* Form Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative">
            <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-2xl w-full max-w-lg z-40">
              <div className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700"></label>
                  <input id="name" type="text" name="name" placeholder="Name" className="bg-gray-200 mt-1 px-4 py-3 border-gray-300 rounded-full shadow-sm focus:ring-primary focus:border-primary w-full" />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
                  <input id="email" type="email" name="email" placeholder="Email" className="bg-gray-200 mt-1 px-4 py-3 border-gray-300 rounded-full shadow-sm focus:ring-primary focus:border-primary w-full" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700"></label>
                  <textarea id="message" name="message" placeholder="Message" className="bg-gray-200 mt-1 px-4 py-3 border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary w-full h-40"></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <div className="flex justify-center">
                  <button type="submit" disabled={state.submitting} className="px-6 py-3 w-full bg-primary text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition ease-in-out duration-500">
                    Send
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-6 absolute -top-36 left-0 h-3">
              <Image src="/images/circle.svg" alt="Decorative dots pattern" width={300} height={200} className="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
