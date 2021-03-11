import React from 'react';
import { SocialItem } from './SocialItem';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

// You may add support for more social share links here
export const SocialLinks = ({ className, github, twitter }) => (
  <div className={`social ${className}`}>
    <SocialItem
      faIcon={faGithub}
      className="social__item"
      link={`https://github.com/${github}`}
    />
    <SocialItem
      faIcon={faTwitter}
      className="social__item"
      link={`https://twitter.com/${twitter}`}
    />
  </div>
);

SocialLinks.defaultProps = {
  className: '',
  github: '',
  twitter: '',
};

export default SocialLinks;
