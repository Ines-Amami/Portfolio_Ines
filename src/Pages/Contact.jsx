import React, { useRef, useState } from "react";
import { FiMail, FiMessageSquare, FiUser } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


const SERVICE_ID  = "ines_Gmail";   
const TEMPLATE_ID = "template_0";  
const PUBLIC_KEY  = "Le60AUvw7y2xmtnCX";   

const Contact = () => {
  const formRef = useRef();

  // form state
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  // status: idle | sending | success | error
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (!form.from_name || !form.from_email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      setStatus("success");
      // reset form
      setForm({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-8"
      style={{ backgroundColor: "#fdf6ef" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p
            className="mb-2"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#7a5a6e",
fontSize: "17px",
fontWeight: 400,
              letterSpacing: "0.22em",
              
              textTransform: "uppercase",
            }}
          >
            Let's connect
          </p>
          <h2
            className="mb-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 600,
fontSize: "clamp(36px, 4vw, 52px)",
color: "#1a0d17",
              lineHeight: 1.1,
            }}
          >
            Get In{" "}
            <em style={{ color: "#c4637a", fontStyle: "italic" }}>Touch</em>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#7a5a6e",
      fontSize: "16px",
      fontWeight: 400,
             
            }}
          >
            I'd love to hear from you
          </p>
        </div>

        {/* TWO COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="font-light leading-snug mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "50px",
                color: "#3d2235",
              }}
            >
              Have a project in mind?
              <br />
              <em style={{ color: "#c4637a", fontStyle: "italic" }}>
                Let's work together.
              </em>
            </h3>
            <p
              className="text-sm font-light leading-relaxed mb-6"
              style={{
                color: "#5c3d52",
               
      fontSize: "18px",
     
fontWeight: 400,
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: "1.8",
              }}
            >
              I'm currently available for freelance work and open to new
              opportunities. Whether you have a question or just want to say
              hi, my inbox is always open.
            </p>

            {/* SOCIAL BUTTONS */}
            <div className="flex gap-3">
              {[
                {
                  href: "https://github.com/Ines-Amami",
                  icon: <FaGithub size={16} />,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/ines-amami-302576235",
                  icon: <FaLinkedin size={16} />,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:amamiines3@gmail.com",
                  icon: <FiMail size={16} />,
                  label: "Email",
                },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center rounded-full transition-all duration-200"
                  style={{
                    width: "38px",
                    height: "38px",
                    background: "#fff",
                    border: "0.5px solid #ecd8ce",
                    color: "#c4637a",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#fbeaf0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#fff")
                  }
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* SUCCESS MESSAGE */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-4 rounded-xl text-sm text-center"
                style={{
                  background: "#eaf3de",
                  border: "0.5px solid #c0dd97",
                  color: "#3b6d11",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                ✅ Message sent! I'll get back to you soon.
              </motion.div>
            )}

            {/* ERROR MESSAGE */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-4 rounded-xl text-sm text-center"
                style={{
                  background: "#fbeaf0",
                  border: "0.5px solid #f4c0d1",
                  color: "#993556",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                ❌ Something went wrong. Please try again.
              </motion.div>
            )}

            {/* FORM */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-7 rounded-2xl"
              style={{
                background: "#fff",
                border: "0.5px solid #ecd8ce",
              }}
            >
              {/* NAME */}
              <div className="flex flex-col gap-1">
                <label
                  className="text-xs font-medium tracking-wide"
                  style={{
                    color: "#3d2235",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Name
                </label>
                <div className="relative">
                  <FiUser
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    style={{ color: "#c4637a" }}
                  />
                  <input
                    type="text"
                    name="from_name"          // ✅ must match EmailJS template
                    value={form.from_name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl text-sm outline-none transition-all"
                    style={{
                      padding: "10px 12px 10px 34px",
                      border: "0.5px solid #ecd8ce",
                      background: "#fdf6ef",
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#3d2235",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#c4637a";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(196,99,122,0.09)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ecd8ce";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-1">
                <label
                  className="text-xs font-medium tracking-wide"
                  style={{
                    color: "#3d2235",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Email
                </label>
                <div className="relative">
                  <FiMail
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    style={{ color: "#c4637a" }}
                  />
                  <input
                    type="email"
                    name="from_email"          // ✅ must match EmailJS template
                    value={form.from_email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-xl text-sm outline-none transition-all"
                    style={{
                      padding: "10px 12px 10px 34px",
                      border: "0.5px solid #ecd8ce",
                      background: "#fdf6ef",
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#3d2235",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#c4637a";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(196,99,122,0.09)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ecd8ce";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-1">
                <label
                  className="text-xs font-medium tracking-wide"
                  style={{
                    color: "#3d2235",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Message
                </label>
                <div className="relative">
                  <FiMessageSquare
                    size={14}
                    className="absolute left-3 top-3"
                    style={{ color: "#c4637a" }}
                  />
                  <textarea
                    rows={4}
                    name="message"             // ✅ must match EmailJS template
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    className="w-full rounded-xl text-sm outline-none transition-all resize-none"
                    style={{
                      padding: "10px 12px 10px 34px",
                      border: "0.5px solid #ecd8ce",
                      background: "#fdf6ef",
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#3d2235",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#c4637a";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(196,99,122,0.09)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ecd8ce";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              {/* SEND BUTTON */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={
                  status !== "sending"
                    ? { scale: 1.02, boxShadow: "0 8px 24px rgba(196,99,122,0.28)" }
                    : {}
                }
                whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                className="w-full py-3 rounded-xl text-sm font-medium
                text-white border-none cursor-pointer transition-all"
                style={{
                  background: status === "sending" ? "#d4a0b4" : "#c4637a",
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.04em",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (status !== "sending")
                    e.currentTarget.style.background = "#b05469";
                }}
                onMouseLeave={(e) => {
                  if (status !== "sending")
                    e.currentTarget.style.background = "#c4637a";
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;