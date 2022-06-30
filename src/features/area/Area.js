import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Post } from '../post/Post';
import { PostLoading } from '../post/PostLoading';
import { PostError } from '../post/PostError';
import { PostInitial } from '../post/PostInitial';
import { selectAreaName, selectPosts, selectCurrentArea, selectFirstState, selectIsLoading, selectError, fetchPosts } from './areaSlice';

export function Area() {
  const areaName = useSelector(selectAreaName);
  const posts = useSelector(selectPosts);
  const currentArea = useSelector(selectCurrentArea);
  const firstState = useSelector(selectFirstState);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  // dispatches fecthPosts whenever currentArea changes
  useEffect(() => {
    dispatch(fetchPosts(currentArea));
  }, [currentArea, dispatch]);

  if (firstState) {
    return (
      <div className="pt-16">
        <div className="m-4 md:max-w-xl md:mx-auto lg:max-w-3xl">
            <h2 className="pl-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-50" >{areaName}</h2>
        </div>
        <PostInitial />
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="pt-16">
        <PostLoading />
      </div>
    )
  }

  if (error) {
    return (
      <div className="pt-16">
        <PostError />
      </div>
    )
  }

  return (
    <div className="pt-16" >
        <div className="m-4 md:max-w-xl md:mx-auto lg:max-w-3xl">
            <h2 className="pl-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-50" >{areaName}</h2>
        </div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
    </div>
  );
}
