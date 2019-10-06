import React, {useEffect, useState } from 'react';
import { getStoryIds , getStory} from '../services/hnApi';
import { Story } from "../components/Story.js";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../styles/StoryContainerStyles';


export  const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);


useEffect(() => {
  console.log('count', count)
getStoryIds().then(data => setStoryIds(data))
}, []);

return (
   <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  )
}