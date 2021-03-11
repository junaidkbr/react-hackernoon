import React from 'react';

export const Container = ({ children, className, small }) => (
  <div className={`container ${className} ${small ? 'container--small' : ''}`}>
    {children}
  </div>
);

Container.defaultProps = {
  className: '',
  small: false,
};

export default Container;
