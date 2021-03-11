import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const SocialItem = ({ className, faIcon, link, onClick }) => (
  faIcon
    ? (
      <a
        href={link}
        className={className}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faIcon} />
      </a>
    )
    : null
);

SocialItem.defaultProps = {
  className: '',
  faIcon: null,
  link: '',
  onClick: () => null,
};

export default SocialItem;
