import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentArea, setAreaName, setFirstState } from '../area/areaSlice';
import { HiOutlineArrowSmRight } from "react-icons/hi";

export function PostInitial() {
    const dispatch = useDispatch();

    function backToTop () {
        window.scrollTo( { top: 0, behavior: 'smooth' } );
      }

    const handleClick = (e) => {
        let path = e.currentTarget.value;
        let name = e.currentTarget.name;

        dispatch(setCurrentArea(path));
        dispatch(setAreaName(name));
        dispatch(setFirstState(false));
        backToTop();
      };

  return (
    <div>
        <div className="m-4 p-6 md:max-w-xl md:mx-auto lg:max-w-3xl bg-slate-200 dark:bg-slate-600 rounded-xl shadow-md">
            <h5 className="flex-initial mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-50">Welcome!</h5>
            <p className="mb-3 font-normal text-slate-700 dark:text-gray-200">
                Through the very latest in computing technology, the team behind Reddit.reduce() has taken an old JavaScript method and applied it to the infamous Reddit website. Reddit.reduce() is everything you love about Reddit without all the noise. No upvotes. No downvotes. No miscelaneous buttons or cluttered text. Just clean, simple posts in a read-only format. Its Reddit - reduced. 
            </p>
            <p className="mb-3 font-normal text-slate-700 dark:text-gray-200">
                There are three main ways to navigate Reddit.reduce(): 
            </p>
            <ul className="ml-8 mb-3 font-normal text-slate-700 dark:text-gray-200 list-decimal">
                <li>
                    <span className="font-bold">Search: </span>At any point in time, you can search using the search bar in the upper right-hand corner. Reddit.reduce() will return posts that relate to your search parameters.
                </li>
                <li>
                    <span className="font-bold">Clicking the Post's Title: </span>When you click a post's title, the comments of the post will be displayed.
                </li>
                <li>
                    <span className="font-bold">Clicking the Arrow: </span>Every post has an <HiOutlineArrowSmRight className="inline mt-1 mb-2 w-6 h-6 cursor-pointer stroke-slate-800 dark:stroke-slate-50" />. Clicking this arrow will take you to the subreddit page associated with that post.
                </li>
            </ul>
            <p className="mb-3 font-normal text-slate-700 dark:text-gray-200">
                If you ever get lost, you can always click on the Reddit.reduce() logo in the upper left-hand corner to return to this screen.  
            </p>
            <p className="mb-3 font-normal text-slate-700 dark:text-gray-200">
                And that's it! Jump in to your favorite Reddit content by searching at the top or clicking one of the buttons below. 
            </p>
            <div className="flex justify-start mt-8">
                <button onClick={handleClick} value="hot" name="Hot Posts" className="bg-slate-600 dark:bg-slate-200 hover:bg-slate-700 dark:hover:bg-slate-300 text-slate-100 dark:text-slate-800 font-bold py-2 px-4 mr-10 rounded-xl active:shadow-lg transition duration-150 ease-in-out">Hot</button>
                <button onClick={handleClick} value="new" name="New Posts" className="bg-slate-600 dark:bg-slate-200 hover:bg-slate-700 dark:hover:bg-slate-300 text-slate-100 dark:text-slate-800 font-bold py-2 px-4 mr-10 rounded-xl active:shadow-lg transition duration-150 ease-in-out">New</button>
                <button onClick={handleClick} value="top" name="Top Posts" className="bg-slate-600 dark:bg-slate-200 hover:bg-slate-700 dark:hover:bg-slate-300 text-slate-100 dark:text-slate-800 font-bold py-2 px-4 mr-10 rounded-xl active:shadow-lg transition duration-150 ease-in-out">Top</button>
            </div>
        </div>
        
    </div>
  );
}