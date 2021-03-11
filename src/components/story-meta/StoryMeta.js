import React from 'react';

export const StoryMeta = ({ children, className }) => (
  <div className={`story-meta ${className}`}>
    {children}
  </div>
);

StoryMeta.defaultProps = {
  className: '',
};

export default StoryMeta;
