import React from 'react';

export const Image = ({ alt, className, src, bordered, height, width, responsive, fit }) => {
  let classes = className;

  if (bordered) {
    classes += ' image--bordered';
  }

  if (height > 0 && width > 0) {
    return (
      <img
        className={classes}
        src={src}
        alt={alt}
        height={height}
        width={width}
      />
    );
  }

  if (responsive) {
    classes += ' image--responsive';
  }

  if (fit) {
    classes += ' image--fit';
  }

  return (
    <img className={classes} src={src} alt={alt} />
  );
};

Image.defaultProps = {
  alt: '',
  className: '',
  src: '',
  bordered: false,
  responsive: true,
  fit: true,
  height: 0,
  width: 0,
};

export default Image;
