import React from 'react';

export const Tag = ({ className, tag }) => (
  <a href={`/tagged/${tag}`} className={`tag ${className}`}>#{tag}</a>
);

Tag.defaultProps = {
  className: '',
  tag: '',
};

export default Tag;
