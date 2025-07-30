import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with emailjs or backend logic
    console.log("Form submitted:", form);
    setSubmitted(true);

    setForm({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000); // Reset after 3s
  };

  return (
    <div className="min-h-screen bg-[#040033] px-4 pt-20 text-white flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-5">Contact Me</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-[#12002e] p-8 rounded-lg shadow-lg">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 rounded bg-[#1d0e2c] border border-cyan-400 text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 rounded bg-[#1d0e2c] border border-cyan-400 text-white focus:outline-none"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded bg-[#1d0e2c] border border-cyan-400 text-white focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <p className="text-green-400 mt-4 text-center font-medium">
            ✅ Message sent successfully!
          </p>
        )}

        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-4xl mb-2">Connect</h1>
          <div className="flex gap-8 text-3xl">
            <a href="https://github.com/247ArjunCode">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/arjun-magar-a37025277/">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
