import React from "react";

const GoogleMap = () => {
  return (
    <section className="w-full h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24152.671756779513!2d-74.0060152!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3161a3e0df%3A0x3f8b97!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1694000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default GoogleMap;
