"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full relative" id="contact">
      {/* TITLE */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-semibold text-white">
          Let’s build something together
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto leading-relaxed">
          Got an idea, project, or just want to say hi?
          I’m always open to interesting conversations and collaborations.
        </p>
      </div>

      {/* SUCCESS TOAST */}
      <div
        className={`
          fixed top-6 left-6 z-50
          transition-all duration-500 ease-out
          ${
            success
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }
        `}
      >
        <div className="bg-green-500/90 text-white px-4 py-3 rounded-xl shadow-lg backdrop-blur">
          Message sent successfully 🚀
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
        
        {/* LEFT - FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* NAME */}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name of the beautiful human ✨"
            className="
              w-full px-4 py-3 rounded-xl
              bg-[#0b0b0f]
              border border-purple-500/40
              text-white
              placeholder:text-gray-500
              outline-none
              focus:border-purple-400
              transition
            "
            required
          />

          {/* EMAIL */}
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your digital mailbox 📬"
            type="email"
            className="
              w-full px-4 py-3 rounded-xl
              bg-[#0b0b0f]
              border border-purple-500/40
              text-white
              placeholder:text-gray-500
              outline-none
              focus:border-purple-400
              transition
            "
            required
          />

          {/* MESSAGE */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What’s on your mind? let’s turn it into reality 🚀"
            rows={6}
            className="
              w-full px-4 py-3 rounded-xl
              bg-[#0b0b0f]
              border border-purple-500/40
              text-white
              placeholder:text-gray-500
              outline-none
              focus:border-purple-400
              resize-none
              transition
            "
            required
          />

          {/* BUTTON */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="
                px-8 py-3
                rounded-xl
                bg-white
                text-black
                font-medium
                hover:bg-gray-200
                transition
                disabled:opacity-50
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {/* RIGHT - CONTACT INFO */}
        <div className="space-y-5">
          
          {/* EMAIL CARD */}
          <div
            className="
              rounded-2xl
              border border-purple-500/20
              bg-[#0b0b0f]
              p-6
            "
          >
            <p className="text-sm text-gray-500 mb-2">
              Email
            </p>

            <a
              href="mailto:yourmail@gmail.com"
              className="
                text-white text-lg
                hover:text-purple-400
                transition
                break-all
              "
            >
              nguyenhongtruclam1@gmail.com
            </a>
          </div>

          {/* PHONE / WHATSAPP */}
          <div
            className="
              rounded-2xl
              border border-purple-500/20
              bg-[#0b0b0f]
              p-6
            "
          >
            <p className="text-sm text-gray-500 mb-2">
              Phone / WhatsApp
            </p>

            <a
              href="https://wa.me/84123456789"
              target="_blank"
              className="
                text-white text-lg
                hover:text-purple-400
                transition
              "
            >
              +84 987131513
            </a>
          </div>

          {/* STATUS CARD */}
          <div
            className="
              rounded-2xl
              border border-purple-500/20
              bg-[#0b0b0f]
              p-6
            "
          >
            <p className="text-sm text-gray-500 mb-4">
              Available for
            </p>

            <div className="flex flex-wrap gap-2">
              <span
                className="
                  px-3 py-1 rounded-full
                  bg-purple-500/10
                  border border-purple-500/20
                  text-sm text-purple-300
                "
              >
                Freelance
              </span>

              <span
                className="
                  px-3 py-1 rounded-full
                  bg-purple-500/10
                  border border-purple-500/20
                  text-sm text-purple-300
                "
              >
                Full-time
              </span>

              <span
                className="
                  px-3 py-1 rounded-full
                  bg-purple-500/10
                  border border-purple-500/20
                  text-sm text-purple-300
                "
              >
                Collaboration
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}