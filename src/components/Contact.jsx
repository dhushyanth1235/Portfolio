import { useState } from "react";
import emailjs from "@emailjs/browser"; // ✅ ADD THIS

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    };

    emailjs
      .send(
        "service_lixwj0n",     // replace
        "template_g1dx2s7",    // replace
        templateParams,
        "ugsOl3Lv4aIlBQwBt"      // replace
      )
      .then(
        () => {
          setSent(true);
          setForm({ name: "", email: "", subject: "", message: "" });

          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message"); // optional
        }
      );
  };

  return (
    <section id="contact" className="contact section">
      <div className="section-title">
        <span className="section-label">Get In Touch</span>
        <h2>Contact Me</h2>
        <p className="section-subtitle">
          Have a project in mind? Let's work together and build something great.
        </p>
      </div>

      <div className="contact__container">
        <div className="contact__info">
          <div className="contact__info-item">
            <div className="contact__info-icon">📍</div>
            <div>
              <h3>Address</h3>
              <p>Coimbatore, Tamilnadu</p>
            </div>
          </div>

          <div className="contact__info-item">
            <div className="contact__info-icon">📞</div>
            <div>
              <h3>Call Us</h3>
              <p>+91 6369352572</p>
            </div>
          </div>

          <div className="contact__info-item">
            <div className="contact__info-icon">✉️</div>
            <div>
              <h3>Email Us</h3>
              <p>dhushyanthselvan@gmail.com</p>
            </div>
          </div>

          <div className="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.310264085035!2d76.9588876!3d10.9973691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1727678650000!5m2!1sen!2sin"
              width="100%"
              height="270"
              style={{ border: 0, borderRadius: "10px" }}
              loading="lazy"
              title="Coimbatore Map"
            />
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-row">
            <div className="contact__form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Dhushyanth"
                required
              />
            </div>

            <div className="contact__form-group">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="dhushyanth@example.com"
                required
              />
            </div>
          </div>

          <div className="contact__form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project Enquiry"
              required
            />
          </div>

          <div className="contact__form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows={8}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            />
          </div>

          {sent && (
            <div className="contact__success">
              ✅ Your message has been sent. Thank you!
            </div>
          )}

          <button type="submit" className="contact__submit">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}