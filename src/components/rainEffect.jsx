import React, { useEffect, useState } from 'react';

const RainEffect = () => {
  const [raindrops, setRaindrops] = useState([]);

  useEffect(() => {
    const createRain = () => {
      const drops = [];
      for (let i = 0; i < 100; i++) {
        const dropStyle = {
          left: `${Math.random() * 100}vw`,
          animationDuration: `${0.5 + Math.random() * 1}s`,
          animationDelay: `${Math.random() * 5}s`,
        };
        drops.push(<div className="raindrop" style={dropStyle} key={i}></div>);
      }
      setRaindrops(drops);
    };

    createRain();
  }, []);

  return <div className="rain-container">{raindrops}</div>;
};

export default RainEffect;