import React from 'react';
import { Image } from '../media/Image';

export const ProfileWidget = ({ children, className, imgSrc, username, name, description }) => (
  <div className={className}>
    <div className="mb-18">
      <Image
        bordered={true}
        height={50}
        src={imgSrc}
        width={50}
      />
    </div>
    <a href={`/u/${username}`}>@{username}</a>
    <p className="mb-12 mt-6"><small>{name}</small></p>
    <p className="mb-24">{description}</p>
    <div>{children}</div>
  </div>
);

ProfileWidget.defaultProps = {
  className: '',
  imgSrc: '',
  username: '',
  name: '',
  description: '',
};

export default ProfileWidget;
