import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { setCurrentArea, setAreaName } from '../area/areaSlice';
import image from '../../placeholder-image.png'
import { HiOutlineArrowSmRight } from "react-icons/hi"

export function Post({ post }) {
  const title = post.title;
  const body = post.selftext;
  const subreddit = post.subreddit;
  const subredditURL = post.subreddit_name_prefixed;
  const postURL = post.permalink;
  const video = post.is_video;
  const videoURL = post.media;
  const media = post.is_reddit_media_domain
  const imgSRC = post.url;
  const adult = post.over_18;
  const dispatch = useDispatch();
  
  function backToTop () {
    window.scrollTo( { top: 0, behavior: 'smooth' } );
  }

  const handleTitleClick = () => {
    dispatch(setCurrentArea(postURL));
    dispatch(setAreaName(`Post's Comments`));
    backToTop();
  };

  const handleArrowClick = () => {
    dispatch(setCurrentArea(subredditURL));
    dispatch(setAreaName(`Subreddit: ${subreddit}`));
    backToTop();
  }

  return (
    <div>
      {adult ? <></> : 
        <div className="m-4 p-6 md:max-w-xl md:mx-auto lg:max-w-3xl bg-slate-200 dark:bg-slate-600 rounded-xl shadow-md">
            <div className="flex justify-between">
                <h5 onClick={handleTitleClick} className="flex-initial mb-2 text-2xl font-bold tracking-tight cursor-pointer text-slate-800 dark:text-slate-50">{title}</h5>
                <HiOutlineArrowSmRight onClick={handleArrowClick} className="flex-none mt-1 mb-2 w-6 h-6 cursor-pointer stroke-slate-800 dark:stroke-slate-50" />
            </div>
            <div className="mb-3 font-normal text-slate-700 dark:text-gray-200 turnicate">
              <ReactMarkdown children={body} />
            </div>
            {/* if there is a video, play the video */}
            {video ? <video className="mb-3 rounded-xl" controls autoPlay><source src={videoURL.reddit_video.fallback_url} type='video/mp4'/></video> : <></>}
            {media && !video ? <img src={imgSRC} className="mb-3 rounded-xl"></img> : <></> }
        </div>
      }
    </div>
  );
}
