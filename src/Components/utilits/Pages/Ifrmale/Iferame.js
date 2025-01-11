import React from "react";

const GoogleMap = () => {
  return (
    <div style={{ width: "10%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158816.76123536308!2d0.5707795646000741!3d51.540511871504414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8c4058575353d%3A0xacaa602a86fa432b!2sSouthend-on-Sea%2C%20UK!5e0!3m2!1sen!2sbd!4v1733548577516!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
