import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

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
    } catch {
      setStatus("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-bg w-full flex justify-center">
      <div className="w-full max-w-6xl flex flex-col items-center py-16 px-4 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mt-20 mb-12">
          <p className="text-xs sm:text-sm text-darkgreen tracking-widest font-semibold">
            お問い合わせ
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-greensage mt-2">
ぜひお話させてください          </h1>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 w-full">

          <div className="bg-darkgreen p-4 rounded-xl flex items-center gap-3 shadow-sm">
            <Phone className="text-white shrink-0 w-5 h-5" />
            <div>
              <p className="text-xs text-white/80">CALL US</p>
              <p className="text-greensage text-sm font-semibold">
                +95 9 44244 3388
              </p>
            </div>
          </div>

          <div className="bg-darkgreen p-4 rounded-xl flex items-center gap-3 shadow-sm">
            <Mail className="text-white shrink-0 w-5 h-5" />
            <div>
              <p className="text-xs text-white/80">EMAIL</p>
              <p className="text-greensage text-sm font-semibold break-all">
                info@bamboo.com
              </p>
            </div>
          </div>

          <div className="bg-darkgreen p-4 rounded-xl flex items-center gap-3 shadow-sm">
            <MapPin className="text-white shrink-0 w-5 h-5" />
            <div>
              <p className="text-xs text-white/80">ADDRESS</p>
              <p className="text-greensage text-sm font-semibold">
                Naypyidaw, Myanmar
              </p>
            </div>
          </div>

        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 w-full items-center">

          {/* Left */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-darkgreen mb-3">
              一緒に働きましょう
            </h2>
            <p className="text-greensage text-sm sm:text-base leading-relaxed">
              あなたのビジョンを共有してください。すぐに対応いたします。
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-darkgreen p-6 sm:p-8 rounded-xl space-y-4 shadow-md w-full"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              className="w-full h-11 px-4 rounded-lg bg-white outline-none"
              required
            />

            <input
              name="website"
              value={formData.website}
              onChange={handleChange}
              type="text"
              autoComplete="off"
              tabIndex={-1}
              style={{ display: "none" }}
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="w-full h-11 px-4 rounded-lg bg-white outline-none"
              required
            />

            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
              className="w-full h-11 px-4 rounded-lg bg-white outline-none"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full h-32 px-4 py-3 rounded-lg bg-white outline-none resize-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-bg text-greensage font-bold py-3 rounded-lg hover:bg-greensage hover:text-white transition"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {status && (
              <p className="text-center text-sm text-white mt-2">
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