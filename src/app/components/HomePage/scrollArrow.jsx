import { useState } from 'react';

export default function ScrollArrow() {
  const [color, setColor] = useState('#2dac44');

  const handleMouseEnter = () => {
    setColor('#1c3e35');
  };

  const handleMouseLeave = () => {
    setColor('#2dac44');
  };

  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="113 102.9 385.3 583.5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} width={40} height={60}>
      <path fill={color} d="M496.2 486.8l-5.6-5.6c-2.8-2.8-11.1-2.8-13.9 0L321 634.2V114c0-5.6-5.6-11.1-11.1-11.1h-8.3c-5.6 0-11.1 5.6-11.1 11.1v523L134.6 484c-2.8-2.8-11.1-2.8-13.9 0l-5.6 5.6c-2.8 2.8-2.8 11.1 0 13.9l183.6 180.8c2.8 2.8 11.1 2.8 13.9 0l183.6-180.8c2.8-5.6 2.8-11.2 0-16.7z"></path>
    </svg>
  );
}