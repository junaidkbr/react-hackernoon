import React from 'react';

export const Fullscreen = ({ children, className }) => {
  const handleFullScreen = (event) => {
    const { target } = event;

    if (target.requestFullscreen) {
      target.requestFullscreen();
    }
  };

  return (
    <div className={`fullscreen pointer ${className}`} onClick={handleFullScreen}>
      {children}
    </div>
  );
};

export default Fullscreen;
