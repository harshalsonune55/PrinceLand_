import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactFormSection() {
  return (
    <section className="w-full py-16 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Info Section */}
        <div className="w-full md:w-1/2">
          <p className="text-blue-500 font-semibold uppercase tracking-wide mb-2">Write a Message</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-10 leading-snug">
            We’re here to help You
          </h2>

          {/* Contact Item 1 */}
          <div className="flex items-start gap-4 mb-8">
            <div className="p-4 border rounded">
              <FaPhoneAlt className="text-blue-500 text-xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Have any question?</p>
              <p className="text-blue-500 font-semibold">+91 99224 40957</p>
            </div>
          </div>

          {/* Contact Item 2 */}
          <div className="flex items-start gap-4 mb-8">
            <div className="p-4 border rounded">
              <FaEnvelope className="text-blue-500 text-xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Write email</p>
              <p className="text-gray-800 font-semibold">princelandsngp@gmail.com</p>
            </div>
          </div>

          {/* Contact Item 3 */}
          <div className="flex items-start gap-4">
            <div className="p-4 border rounded">
              <FaMapMarkerAlt className="text-blue-500 text-xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Visit anytime</p>
              <p className="text-gray-800 font-semibold">
              PL No 200, Opposite Bhavnagri, <br/>
Ring Road, Chhatrapati Nagar, Nagpur, Maharashtra 440015

              </p>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 border p-8 shadow-sm">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Name"
              className="border px-4 py-3 rounded outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="border px-4 py-3 rounded outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="border px-4 py-3 rounded resize-none outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 rounded font-semibold hover:bg-green-700 transition"
            >
              Send A Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
