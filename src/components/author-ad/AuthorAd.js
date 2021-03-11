import React from 'react';
import { Image } from '../media/Image';

export const AuthorAd = ({ className, imgSrc, username, name, description, adLink }) => (
  <div className={`author-ad f jcsb aifs ${className}`}>
    <div className="author-ad__info">
      <div className="mb-16">
        <Image
          bordered={true}
          height={50}
          src={imgSrc}
          width={50}
        />
      </div>
      <a href={`/u/${username}`}>@{username}</a>
      <p className="mb-12 mt-6"><small>{name}</small></p>
    </div>
    <div className="author-ad__description">
      <p className="mb-24"><a href={adLink} className="bg--none">{description}</a></p>
    </div>
  </div>
);

AuthorAd.defaultProps = {
  adLink: '',
  className: '',
  imgSrc: '',
  username: '',
  name: '',
  description: '',
};

export default AuthorAd;
