import React from 'react';

export const CardHeader = ({ children, className }) => (
  <div className={`card__header ${className}`}>
    {children}
  </div>
);

CardHeader.defaultProps = {
  className: '',
};

export default CardHeader;
