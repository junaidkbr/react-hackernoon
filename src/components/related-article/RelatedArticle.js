import React from 'react';

import { Card } from '../card/Card';
import { CardTitle } from '../card/CardTitle';
import { CardHeader } from '../card/CardHeader';
import { CardBody } from '../card/CardBody';
import { CardFooter } from '../card/CardFooter';
import { Image } from '../media/Image';

export const RelatedArticle = ({
  className,
  link,
  title,
  imgSrc,
  reactionCount,
  profile,
  createdAt,
}) => (
  <div className={`related-articles__article ${className}`}>
    <Card>
      <CardHeader>
        <CardTitle>
          <p className="mt-0 mb-0"><a href={link}><strong>{title}</strong></a></p>
        </CardTitle>
      </CardHeader>
      <CardBody fullWidth>
        <p className="text-center pt-8 mb-8">
          <strong>
            <small>{reactionCount} reactions</small>
          </strong>
        </p>
        <Image
          src={imgSrc}
          className="related-articles__img"
        />
      </CardBody>
      <CardFooter className="f jisb aic">
        <div className="b-50">
          <div className="f jcfs aic">
            <div className="mr-12">
              <Image src={profile.imgSrc} bordered height={50} width={50} />
            </div>
            <div>
              <p className="mb-6 mt-0"><a href={`/u/${profile.username}`}>@{profile.username}</a></p>
              <p className="mb-0 mt-0">{profile.name}</p>
            </div>
          </div>
        </div>
        <div className="b-50">
          <p className="text-right"><strong><small>{createdAt}</small></strong></p>
        </div>
      </CardFooter>
    </Card>
  </div>
);

RelatedArticle.defaultProps = {
  className: '',
  link: '',
  title: '',
  imgSrc: '',
  createdAt: '',
  reactionCount: 0,
  profile: {
    imgSrc: '',
    username: '',
    name: '',
  },
};

export default RelatedArticle;
