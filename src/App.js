import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import { Container } from './layouts/Container';
import { Divider } from './layouts/Divider';
import { StoryMeta } from './components/story-meta/StoryMeta';
import { StoryMetaStats } from './components/story-meta/StoryMetaStats';
import { StoryMetaReactions } from './components/story-meta/StoryMetaReactions';
import { Image } from './components/media/Image';
import { Fullscreen } from './components/media/Fullscreen';
import { Wysiwyg } from './components/wysiwyg/Wysiwyg';
import { WysiwygMain } from './components/wysiwyg/WysiwygMain';
import { WysiwygAside } from './components/wysiwyg/WysiwygAside';
import { WysiwygHtml } from './components/wysiwyg/WysiwygHtml';
import { SocialLinks } from './components/social/SocialLinks';
import { SocialShares } from './components/social/SocialShares';
import { ProfileWidget } from './components/profile/ProfileWidget';
import { AuthorAd } from './components/author-ad/AuthorAd';
import { RelatedArticles } from './components/related-article/RelatedArticles';
import { Tags } from './components/tags/Tags';

import { useGists } from './components/hooks/UseGists';

import { getPost } from './api';

export const App = () => {
  const [state, setState] = useState({});

  const { setGists } = useGists();

  useEffect(() => {
    getPost()
      .then((response) => {
        console.log(response.data);

        const publishedAt = dayjs(response.data.publishedAt * 1000).format('MMMM DD YYYY');

        setState({
          ...response.data,
          publishedAt,
        });

        setGists();
      })
      .catch(console.warn);
  }, []);

  return (
    <Container>
      <h1 className="mb-48 text-center">{state.title}</h1>
      <StoryMeta className="mb-32">
        <StoryMetaStats time={state.publishedAt} readCount="223" />
        <StoryMetaReactions
          reactionsCount={(state.reactions && state.reactions.total) || 0}
          className="f jcfe aic"
        />
      </StoryMeta>
      <Fullscreen className="mb-32">
        <Image
          className="scale scale--up"
          src="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-g6aq337h.jpeg"
          alt="Step by Step Guide to Create 3 Different Types of Loading Screens in React"
        />
      </Fullscreen>
      <Wysiwyg>
        <WysiwygAside>
          <ProfileWidget
            name="CodeBucks"
            username="codebucks"
            description="Helping you to learn code! here you'll find tutorials around web development. Keep Coding...😜"
            imgSrc="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-842316b.jpeg"
          >
            <SocialLinks github="abc" twitter="def" />
          </ProfileWidget>
        </WysiwygAside>
        <WysiwygMain>
          <WysiwygHtml markup={state.markup} />
          <div className="mt-16 mb-16">
            <StoryMetaReactions
              reactionsCount="11"
              className="f jcc aic"
            />
          </div>
          <SocialShares className="text-right" text="Share this story" />
          <AuthorAd
              name="CodeBucks"
              username="codebucks"
              description="Subscribe to Learn ReactJS by building!"
              adLink="#"
              imgSrc="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-842316b.jpeg"
          />
        </WysiwygMain>
        <WysiwygAside>
          <h2>Aisde</h2>
        </WysiwygAside>
      </Wysiwyg>
      <Divider text="related" />
      <RelatedArticles className="mb-108" articles={state.relatedStories} />
      <Container small>
        <Divider text="Tags" />
        <Tags tags={state.tags} />
      </Container>
    </Container>
  );
};

export default App;
