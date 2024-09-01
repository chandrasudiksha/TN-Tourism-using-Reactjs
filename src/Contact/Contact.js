import React from 'react';
import './Contact.css';
import Navbar from '../Navbar/Navbar';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="contact-container">
      <form className="contact-form">
      <h1>Contact Us</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
        </div>
        
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </>
  );
}

export default Contact;
