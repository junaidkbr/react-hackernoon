import React from 'react';

import { Tag } from './Tag';

export const Tags = ({ className, tags }) => (
  <div class={`tags ${className}`}>
    {tags.map((tag) => <Tag tag={tag} key={tag} />)}
  </div>
);

Tags.defaultProps = {
  className: '',
  tags: [],
};

export default Tags;
