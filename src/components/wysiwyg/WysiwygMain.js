import React from 'react';

export const WysiwygMain = ({ children, className }) => (
  <div className={`wysiwyg__main ${className}`}>
    {children}
  </div>
);

WysiwygMain.defaultProps = {
  className: '',
};

export default WysiwygMain;
