import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ContactFormSection() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current.reset();
          setIsSending(false);
        },
        () => {
          toast.error("Failed to send message. Try again later.");
          setIsSending(false);
        }
      );
  };

  return (
    <section className="w-full py-16 px-4 md:px-20 bg-white">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Info Section */}
        <div className="w-full md:w-1/2">
          <p className="text-blue-500 font-semibold uppercase tracking-wide mb-2">
            Write a Message
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-10 leading-snug">
            We’re here to help You
          </h2>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <ContactInfo
              icon={<FaPhoneAlt className="text-blue-500 text-xl" />}
              label="Have any question?"
              value="+91 99224 40957"
            />
            <ContactInfo
              icon={<FaEnvelope className="text-blue-500 text-xl" />}
              label="Write email"
              value="princelandsngp@gmail.com"
            />
            <ContactInfo
              icon={<FaMapMarkerAlt className="text-blue-500 text-xl" />}
              label="Visit anytime"
              value={`PL No 200, Opposite Bhavnagri,\nRing Road, Chhatrapati Nagar, Nagpur, Maharashtra 440015`}
            />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 border p-8 shadow-sm">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-6"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="border px-4 py-3 rounded outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="border px-4 py-3 rounded outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              required
              className="border px-4 py-3 rounded resize-none outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button
              type="submit"
              disabled={isSending}
              className={`py-3 rounded font-semibold transition ${
                isSending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-green-700 text-white"
              }`}
            >
              {isSending ? "Sending..." : "Send A Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Helper Component for Contact Info
function ContactInfo({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-4 border rounded">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-gray-800 font-semibold whitespace-pre-line">
          {value}
        </p>
      </div>
    </div>
  );
}
