import React from 'react';

export const CardFooter = ({ children, className }) => (
  <div className={`card__footer ${className}`}>
    {children}
  </div>
);

CardFooter.defaultProps = {
  className: '',
};

export default CardFooter;
