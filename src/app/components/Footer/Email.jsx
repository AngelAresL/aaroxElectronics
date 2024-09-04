import { useState } from 'react';

export default function Email() {
  const [color, setColor] = useState('#fefffa');

  const handleMouseEnter = () => {
    setColor('#2dac44');
  };

  const handleMouseLeave = () => {
    setColor('#fefffa');
  };

  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 470" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" fill={color}/>
    </svg>
  );
}