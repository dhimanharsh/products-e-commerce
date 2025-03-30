import React from 'react'

export default function Contact() {
  return (
    <>
  <div className="contact-container">
    <h2>Contact Us</h2>
    <p>If you have any questions, feel free to reach out to us using the form below or visit us at our location!</p>

    <div className="contact-info">
        <h3>Our Location</h3>
        <p>123 Business St.<br />
        City, State, ZIP<br />
        Country</p>
    </div>

    <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
    </form>
</div>

    </>
  )
}
