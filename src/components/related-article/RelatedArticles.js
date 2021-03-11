import React from 'react';

import { RelatedArticle } from './RelatedArticle';

export const RelatedArticles = ({ articles, className }) => (
  <div class={`related-articles ${className}`}>
    {articles.map(({
      excerpt,
      publishedAt,
      reactionsCount,
      mainImage,
      slug,
      profile,
    }) => (
      <RelatedArticle
        link={`/${slug}`}
        title={(excerpt || '').slice(0, 64)}
        imgSrc={mainImage}
        reactionCount={reactionsCount}
        createdAt={publishedAt}
        profile={{
          username: profile && profile.handle,
          name: profile && profile.displayName,
          imgSrc: profile && profile.avatar,
        }}
      />
    ))}
  </div>
);

RelatedArticles.defaultProps = {
  articles: [],
  className: '',
};

export default RelatedArticles;
