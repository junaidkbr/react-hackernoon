import React from 'react';

export const WysiwygAside = ({ children, className }) => (
  <div className={`wysiwyg__aside ${className}`}>
    {children}
  </div>
);

WysiwygAside.defaultProps = {
  className: '',
};

export default WysiwygAside;
