import React from 'react';
import { createHtml } from '../../lib/create-html';

export const WysiwygHtml = ({ className, markup }) => {
  const html = createHtml(markup);

  if (!html.__html) return null;

  return <div className={className} dangerouslySetInnerHTML={html} />;
};

WysiwygHtml.defaultProps = {
  className: '',
  markup: '',
};

export default WysiwygHtml;
