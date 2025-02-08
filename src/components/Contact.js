import React, { useState } from "react";
import "../styles/Contact.css";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate message send
    setSubmitted(true);

    // Clear form fields after submission
    setFormData({ name: "", email: "", message: "" });

    // Hide success message after a few seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      
      {submitted && <p className="success-message">✅ Your message has been sent!</p>}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FaUser className="icon" />
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>

        <div className="input-group">
          <FaEnvelope className="icon" />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>

        <div className="input-group">
          <FaCommentDots className="icon" />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            required 
            value={formData.message} 
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
