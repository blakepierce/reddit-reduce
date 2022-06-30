import React from 'react';

export function CommentError() {

  return (
    <div className="md:max-w-xl md:mx-auto lg:max-w-3xl">
        <div className="my-4 mx-7 md:mx-5 p-4 bg-slate-200 dark:bg-slate-600 rounded-xl shadow-md">
            <p className="mb-3 font-normal text-slate-700 dark:text-gray-200">We're sorry! There was an error loading comments for this post. Please click the title to try again.</p>
        </div>
    </div>
  );
}
