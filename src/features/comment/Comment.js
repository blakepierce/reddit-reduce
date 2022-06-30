import React from 'react';
import ReactMarkdown from 'react-markdown';

export function Comment({ comment }) {

    const body = comment.body;

    return (
        <div className="md:max-w-xl md:mx-auto lg:max-w-3xl">
            <div className="my-4 mx-7 md:mx-5 p-4 bg-slate-200 dark:bg-slate-600 rounded-xl shadow-md">
            <div className="font-normal text-slate-700 dark:text-gray-200 turnicate">
                <ReactMarkdown children={body} />
                </div>
            </div>
        </div>
    );
}
