import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentArea, setCurrentArea, setAreaName, setFirstState, fetchPosts } from '../area/areaSlice';

export function PostError() {
    const currentArea = useSelector(selectCurrentArea);
    const dispatch = useDispatch();

    const handleTryAgainClick = () => {
        dispatch(fetchPosts(currentArea));
    }

    const handleReturnHomeClick = () => {
        dispatch(setCurrentArea(""));
        dispatch(setAreaName('This is Reddit.reduce()'));
        dispatch(setFirstState(true));
      };

  return (
    <div>
        <div className="m-4 p-6 md:max-w-xl md:mx-auto lg:max-w-3xl bg-slate-200 dark:bg-slate-600 rounded-xl shadow-md">
            <div className="flex justify-between">
                <h5 className="flex-initial mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-50">Error loading content</h5>
            </div>
            <p className="mb-3 font-normal text-slate-700 dark:text-gray-200">We're sorry about that! Feel free to try again or return home.</p>
            <div className="flex justify-start mt-8">
                <button onClick={handleTryAgainClick} className="bg-slate-600 dark:bg-slate-200 hover:bg-slate-700 dark:hover:bg-slate-300 text-slate-100 dark:text-slate-800 font-bold py-2 px-4 mr-10 rounded-xl active:shadow-lg transition duration-150 ease-in-out">Try Again</button>
                <button onClick={handleReturnHomeClick} className="bg-slate-600 dark:bg-slate-200 hover:bg-slate-700 dark:hover:bg-slate-300 text-slate-100 dark:text-slate-800 font-bold py-2 px-4 mr-10 rounded-xl active:shadow-lg transition duration-150 ease-in-out">Return Home</button>
            </div>
        </div>
        
    </div>
  );
}