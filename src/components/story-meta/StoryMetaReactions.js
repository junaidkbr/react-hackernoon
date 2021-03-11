import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faCashRegister, faHeart, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export const StoryMetaReactions = ({ reactionsCount, className }) => (
  <div className="story-meta__reactions-wrapper">
    <div className={`story-meta__reactions ${className}`}>
      <div className="story-meta__reactions-count">{reactionsCount}</div>
      <div className="story-meta__emojis">
        <span className="emoji">
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <span className="emoji">
          <FontAwesomeIcon icon={faLightbulb} />
        </span>
        <span className="emoji">
          <FontAwesomeIcon icon={faCar} />
        </span>
        <span className="emoji">
          <FontAwesomeIcon icon={faCashRegister} />
        </span>
      </div>
    </div>
  </div>
);

StoryMetaReactions.defaultProps = {
  className: '',
};

export default StoryMetaReactions;
