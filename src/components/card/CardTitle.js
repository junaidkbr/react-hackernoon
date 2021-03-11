import React from 'react';

export const CardTitle = ({ children, className }) => (
  <div className={`card__title ${className}`}>
    {children}
  </div>
);

CardTitle.defaultProps = {
  className: '',
};

export default CardTitle;
