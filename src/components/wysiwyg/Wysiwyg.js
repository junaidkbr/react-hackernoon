import React from 'react';

export const Wysiwyg = ({ children, className }) => (
  <div className={`wysiwyg ${className}`}>
    {children}
  </div>
);

Wysiwyg.defaultProps = {
  className: '',
};

export default Wysiwyg;
