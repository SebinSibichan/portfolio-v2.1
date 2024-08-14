// components/Contact.js

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the component is in view
    triggerOnce: true, // Trigger animation only once
  });

  useEffect(() => {
    if (inView) {
      // Animation logic here (e.g., fade in)
    }
  }, [inView]);

  return (
    <section id="contact" className="mb-20">
      <motion.div
        ref={ref}
        className="bg-bg-dark text-text-primary py-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-4 text-accent"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Say hi✌️
        </motion.h2>
        <motion.p
          className="mb-8 text-text-secondary"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Hi, I’ll try my best to get back to you soon!
        </motion.p>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p>
            Email:{" "}
            <a
              href="mailto:sibichan.sebinn@gmail.com"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wanna drop a mail?
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+918848895783" className="text-accent hover:underline">
              let's talk!
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/sebin-sibichan/"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yeah, it's little bit formal!
            </a>
          </p>
          <p>
            Whatsapp:{" "}
            <a
              href="https://shorturl.at/NfGLh"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wanna chat?
            </a>
          </p>
        </motion.div>
        <motion.a
          href="mailto:sibichan.sebinn@gmail.com"
          className="bg-accent text-white py-2 px-6 rounded-lg transition duration-300 inline-block"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 10px rgba(255, 255, 200, 0.5)",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.01, delay: 0.01 }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Contact;
