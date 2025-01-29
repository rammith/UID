import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>Have questions or need assistance? We're here to help!</p>
      <p><strong>Phone:</strong> +1-800-123-4567</p>
      <p><strong>Email:</strong> info@carwebsite.com</p>
      <p><strong>Address:</strong> 123 Car Dealership Ave, Auto City, USA</p>

      <h3>Send us a Message</h3>
  
      <form>
        <label>
          Name:
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Your email" />
        </label>
        <label>
          Message:
          <textarea placeholder="Your message"></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
