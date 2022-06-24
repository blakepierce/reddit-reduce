import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {} from './postSlice';
import image from '../../placeholder-image.png'
import { HiOutlineArrowSmRight } from "react-icons/hi"

export function Post() {

  return (
    <div>
        <div className="m-4 p-6 md:max-w-xl md:mx-auto lg:max-w-3xl bg-slate-200 dark:bg-slate-600 rounded-xl shadow-md">
            <div className="flex justify-between">
                <a href="#">
                    <h5 className="flex-initial mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-50">Title of the Post</h5>
                </a>
                <a href="#">
                    <HiOutlineArrowSmRight className="flex-none mt-1 mb-2 w-6 h-6 stroke-slate-800 dark:stroke-slate-50" />
                </a>
            </div>
            <p className="mb-3 font-normal text-slate-700 dark:text-gray-200">Main body of the post. This is an example of the text spanning many lines. It can span a bunch of lines if the comment itself is very long.</p>
            <img src={image} className="mb-3"></img>
        </div>
        <div className="m-4 p-6 md:max-w-xl md:mx-auto lg:max-w-3xl bg-slate-200 dark:bg-slate-600 rounded-xl shadow-md">
            <div className="flex justify-between">
                <a href="#">
                    <h5 className="flex-initial mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-50">Title of the Post</h5>
                </a>
                <a href="#">
                    <HiOutlineArrowSmRight className="flex-none mt-1 mb-2 w-6 h-6 stroke-slate-800 dark:stroke-slate-50" />
                </a>
            </div>
            <p className="mb-3 font-normal text-slate-700 dark:text-gray-200">Main body of the post. This is an example of the text spanning many lines. It can span a bunch of lines if the comment itself is very long.</p>
        </div>
        <div className="m-4 p-6 md:max-w-xl md:mx-auto lg:max-w-3xl bg-slate-200 dark:bg-slate-600 rounded-xl shadow-md">
            <div className="flex justify-between">
                <a href="#">
                    <h5 className="flex-initial mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-50">Title of the Post</h5>
                </a>
                <a href="#">
                    <HiOutlineArrowSmRight className="flex-none mt-1 mb-2 w-6 h-6 stroke-slate-800 dark:stroke-slate-50" />
                </a>
            </div>                  
            <p className="mb-3 font-normal text-slate-700 dark:text-gray-200">Main body of the post. This is an example of the text spanning many lines. It can span a bunch of lines if the comment itself is very long.</p>
            <img src={image} className="mb-3"></img>
        </div>
        <div className="m-4 p-6 md:max-w-xl md:mx-auto lg:max-w-3xl bg-slate-200 dark:bg-slate-600 rounded-xl shadow-md">
            <div className="flex justify-between">
                <a href="#">
                    <h5 className="flex-initial mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-50">This is the title of a post and it is very long. It even spans multiple lines and consists of 2 sentences.</h5>
                </a>
                <a href="#">
                    <HiOutlineArrowSmRight className="flex-none mt-1 mb-2 w-6 h-6 stroke-slate-800 dark:stroke-slate-50" />
                </a>
            </div>
        </div>
        <div className="m-4 p-6 md:max-w-xl md:mx-auto lg:max-w-3xl bg-slate-200 dark:bg-slate-600 rounded-xl shadow-md">
            <div className="flex justify-between">
                <a href="#">
                    <h5 className="flex-initial mb-2 text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-50">Title of the Post</h5>
                </a>
                <a href="#">
                    <HiOutlineArrowSmRight className="flex-none mt-1 mb-2 w-6 h-6 stroke-slate-800 dark:stroke-slate-50" />
                </a>
            </div>
            <p className="mb-3 font-normal text-slate-700 dark:text-gray-200">Main body of the post. This is an example of the text spanning many lines. It can span a bunch of lines if the comment itself is very long.</p>
        </div>
    </div>
  );
}
