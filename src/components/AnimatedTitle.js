import React, { useState, useEffect } from 'react';

const titles = ['Software Engineer','Freelance Fullstack Developer', 'Graphic Designer'];
const colors = ['#ff6b6b', '#4ecdc4', '#45aaf2']; // You can adjust these colors

const AnimatedTitle = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFlipped(false);
      }, 500); 
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="text-2xl mb-4 mt-4 relative">
      I'm a{' '}
      <span
        className={`inline-block transition-all duration-500 ${
          flipped ? 'transform -rotate-x-90' : ''
        }`}
        style={{
          color: colors[index],
          textShadow: `0 0 2px ${colors[index]}`,
          animation: 'rainbow-pulse 3s linear infinite',
        }}
      >
        {titles[index]}
      </span>
      <style jsx>{`
        @keyframes rainbow-pulse {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
      `}</style>
    </h2>
  );
};

export default AnimatedTitle;