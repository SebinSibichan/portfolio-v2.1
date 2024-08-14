// components/SocialLinks.js
import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaDiscord, FaPhone } from 'react-icons/fa';
// import { FaX } from 'react-icons/fa6';


function SocialLinks() {
  return (
    <div className="flex space-x-5">
      <a href="https://wa.me/message/ZCKCYB72BSYDP1" className="text-text-secondary hover:text-accent">
        {/* <i className="fab FaFacebook"></i> */}
        <FaWhatsapp/>

      </a>
      <a href="https://www.linkedin.com/in/sebin-sibichan/" className="text-text-secondary hover:text-accent">
        <FaLinkedin/>
      </a>
    
      <a href="#" className="text-text-secondary hover:text-accent">
        <FaInstagram/>
      </a>
      <a href="https://discord.com/invite/ppAeQ2mE" className="text-text-secondary hover:text-accent">
        <FaDiscord/>
      </a>
        <a href="#" className="text-text-secondary hover:text-accent">
        <FaPhone/>
      </a>
    </div>
  );
}

export default SocialLinks;






