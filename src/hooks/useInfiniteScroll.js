import {useState, useEffect} from 'react';
import {STORY_INCREMENT, MAX_STORIES} from '../constants/index';
import {debounce} from '../utils/debounce';

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);


  const handelScroll = debounce(() => {
    if((window.innerHeight + window.scrollY) < document.body.offsetHeight){
      return false;
  }
  setLoading(true);
},500);


useEffect(() => {
  if(!loading) return ;

  if(count + STORY_INCREMENT >= MAX_STORIES){
    setCount(MAX_STORIES);
  }else{
    setCount(count + STORY_INCREMENT);
  }

  setLoading(false);
},[loading]);

useEffect(() => {
  window.addEventListener('scroll', handelScroll);
  return () => window.removeEventListener('scroll', handelScroll);
},[]);

return { count };
}