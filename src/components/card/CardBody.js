import React from 'react';

export const CardBody = ({ children, className, fullWidth }) => (
  <div className={`card__body ${fullWidth ? 'card__body--full-width' : ''} ${className}`}>
    {children}
  </div>
);

CardBody.defaultProps = {
  className: '',
  fullWidth: false,
};

export default CardBody;
