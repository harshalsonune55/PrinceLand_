import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactFormSection() {
  return (
    <section className="w-full py-16 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Info Section */}
        <div className="w-full md:w-1/2">
          <p className="text-orange-500 font-semibold uppercase tracking-wide mb-2">Write a Message</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-10 leading-snug">
            We’re here to help You
          </h2>

          {/* Contact Item 1 */}
          <div className="flex items-start gap-4 mb-8">
            <div className="p-4 border rounded">
              <FaPhoneAlt className="text-orange-500 text-xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Have any question?</p>
              <p className="text-orange-500 font-semibold">Free +61 (313) 8376 6284</p>
            </div>
          </div>

          {/* Contact Item 2 */}
          <div className="flex items-start gap-4 mb-8">
            <div className="p-4 border rounded">
              <FaEnvelope className="text-orange-500 text-xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Write email</p>
              <p className="text-gray-800 font-semibold">info@dax.com</p>
            </div>
          </div>

          {/* Contact Item 3 */}
          <div className="flex items-start gap-4">
            <div className="p-4 border rounded">
              <FaMapMarkerAlt className="text-orange-500 text-xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Visit anytime</p>
              <p className="text-gray-800 font-semibold">
                2425 Westview Dr W, Seattle,<br />WA 98119, USA
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
              className="bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600 transition"
            >
              Send A Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
