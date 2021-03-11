import React from 'react';
import { SocialItem } from './SocialItem';
import { faFacebook, faGoogle, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const SocialShares = ({ className, text }) => (
  <div className={`social ${className}`}>
    <span className="social__text">{text}</span>
    <SocialItem
      faIcon={faTwitter}
      className="social__item"
      onClick={() => alert('share this on twitter')}
    />
    <SocialItem
      faIcon={faFacebook}
      className="social__item"
      onClick={() => alert('share this on facebook')}
    />
    <SocialItem
      faIcon={faLinkedin}
      className="social__item"
      onClick={() => alert('share this on linkedin')}
    />
    <SocialItem
      faIcon={faGoogle}
      className="mr-6"
      onClick={() => alert('share this on google')}
    />
  </div>
);

SocialShares.defaultProps = {
  text: '',
  className: '',
};

export default SocialShares;
