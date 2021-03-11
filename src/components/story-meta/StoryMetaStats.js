import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faStar } from '@fortawesome/free-solid-svg-icons';

export const StoryMetaStats = ({ time, readCount, className }) => (
  <div className={`story-meta__stats-wrapper f jcsb aic ${className}`}>
    <div className="story-meta__stats">
      <a href="/" className="story-meta__date bg--none">{time}</a>
      <span className="story-meta__read-count">
        <FontAwesomeIcon icon={faStar} /> {readCount} Reads
      </span>
    </div>
    <div className="story-meta__bookmark">
      <FontAwesomeIcon icon={faBookmark} />
    </div>
  </div>
);

StoryMetaStats.defaultProps = {
  className: '',
};

export default StoryMetaStats;
