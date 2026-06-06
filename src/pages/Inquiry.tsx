import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import type { ChangeEvent,FormEvent } from "react";

const Inquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: ""
  });
const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.website) {
      setStatus("Spam detected.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(`${baseURL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `${formData.subject}\n\n${formData.message}`,
          website: formData.website,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully");
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      } else {
        setStatus(data.message || "Failed to send");
      }
    } catch (err) {
      setStatus("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-bg w-full min-h-screen overflow-x-hidden">
      {/* 1. Tuned max width down to max-w-4xl to center content away from browser edges.
           Added extra horizontal padding (px-6 md:px-12) to shield items from screen clipping.
      */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center py-12 px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm text-darkgreen tracking-widest font-semibold">CONTACT US</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-greensage mt-2">
            We’d love to talk to you
          </h1>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 w-full">
          <div className="bg-darkgreen p-4 rounded-xl flex items-center gap-3 shadow-sm">
            <Phone className="text-white shrink-0 w-5 h-5" />
            <div>
              <p className="text-xs text-white/80 font-medium tracking-wide">CALL US</p>
              <p className="text-greensage text-sm font-semibold whitespace-nowrap">+95 9 44244 3388</p>
            </div>
          </div>

          <div className="bg-darkgreen p-4 rounded-xl flex items-center gap-3 shadow-sm">
            <Mail className="text-white shrink-0" />
            <div>
              <p className="text-xs text-white/80 font-medium tracking-wide">EMAIL</p>
              <p className="text-greensage text-sm font-semibold break-all">info@bamboo.com</p>
            </div>
          </div>

          <div className="bg-darkgreen p-4 rounded-xl flex items-center gap-3 shadow-sm">
            <MapPin className="text-white shrink-0" />
            <div>
              <p className="text-xs text-white/80 font-medium tracking-wide">ADDRESS</p>
              <p className="text-greensage text-sm font-semibold">Naypyidaw, Myanmar</p>
            </div>
          </div>
        </div>

        {/* Main Content Area
            2. Using a 5-column grid split strategy (2/5 for text, 3/5 for form layout block)
               prevents components from squishing or sliding out of bounds on laptops.
        */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 w-full items-start">
          
          {/* Left Text Column */}
          <div className="md:col-span-2">
            <h2 className="text-xl md:text-2xl font-bold text-darkgreen mb-3">
              Let’s Work Together
            </h2>
            <p className="text-greensage text-sm sm:text-base leading-relaxed">
              Share your vision and we’ll respond quickly.
            </p>
          </div>

          {/* Right Form Column */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-darkgreen p-6 sm:p-8 rounded-xl space-y-4 shadow-md w-full"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              className="w-full h-11 px-4 rounded-lg bg-white outline-none text-sm md:text-base focus:ring-2 focus:ring-greensage/30"
              required
            />
            
            {/* Honeypot Security Field */}
            <input
              name="website"
              value={formData.website}
              onChange={handleChange}
              type="text"
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
              style={{ opacity: 0, position: "absolute", pointerEvents: "none" }}
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="w-full h-11 px-4 rounded-lg bg-white outline-none text-sm md:text-base focus:ring-2 focus:ring-greensage/30"
              required
            />

            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
              className="w-full h-11 px-4 rounded-lg bg-white outline-none text-sm md:text-base focus:ring-2 focus:ring-greensage/30"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full h-32 px-4 py-3 rounded-lg bg-white outline-none resize-none text-sm md:text-base focus:ring-2 focus:ring-greensage/30"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-bg text-greensage font-bold py-3 rounded-lg hover:bg-greensage hover:text-white transition-colors duration-200 shadow-sm"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {status && (
              <p className="text-center text-sm text-white mt-2 font-medium">
                {status}
              </p>
            )}
          </form>
        </div>

      </div>
    </div>
  );
};

export default Inquiry;