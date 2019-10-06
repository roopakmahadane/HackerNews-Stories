import React, {useEffect, useState } from 'react';
import { StoriesContainer } from '../containers/StoriesContainer.js';
import { getStory } from '../services/hnApi';
import { StoryWrapper, StoryTitle, StorytMeta, StoryMetaElement } from '../styles/StoryStyles';
import { mapTime } from '../mappers/mapTime';


export const Story = ({storyId}) => {
 const [story, setStory] = useState({});
useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data))
},[]);

  return story && story.url ? (
 <StoryWrapper data-testid="story">
 <StoryTitle>
   <a target="_blank" href={story.url}>{story.title}</a>
  </StoryTitle>

<StorytMeta>
  <span data-testid="story-by">
      <StoryMetaElement color="#000">By: </StoryMetaElement>{story.by}
  </span>
  <span data-testid="story-time">
       <StoryMetaElement color="#000">Posted: </StoryMetaElement>{mapTime(story.time)}
  </span>
    </StorytMeta>
  </StoryWrapper>
    ) : null;
};
