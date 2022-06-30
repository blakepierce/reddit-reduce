import React from 'react';

export function CommentLoading() {

  return (
    <div className="md:max-w-xl md:mx-auto lg:max-w-3xl">
        <div className="my-4 mx-7 md:mx-5 p-4 animate-pulse bg-slate-200 dark:bg-slate-600 rounded-xl shadow-md">
            <div className="my-3 rounded-xl bg-slate-400 h-4 w-1/1"></div>
            <div className="my-3 rounded-xl bg-slate-400 h-4 w-1/1"></div>
            <div className="my-3 rounded-xl bg-slate-400 h-4 w-4/5"></div>
        </div>
    </div>
  );
}
