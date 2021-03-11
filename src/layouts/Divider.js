import React from 'react';

export const Divider = ({ className, text }) => (
  <div class={`divider ${className}`}>
    {text && <span className="divider__text">{text}</span>}
  </div>
);

Divider.defaultProps = {
  className: '',
  text: '',
};

export default Divider;
