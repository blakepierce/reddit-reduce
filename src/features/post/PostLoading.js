import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import image from '../../placeholder-image.png'
import { HiOutlineArrowSmRight } from "react-icons/hi"

export function PostLoading() {
  
  return (
    <div>
        <div className="m-4 p-6 animate-pulse md:max-w-xl md:mx-auto lg:max-w-3xl bg-slate-200 dark:bg-slate-600 rounded-xl shadow-md">
            <div className="flex justify-between">
                <div className="rounded-xl bg-slate-400 h-8 w-3/5"></div>
                <div className="rounded-xl bg-slate-400 h-5 w-8"></div>
            </div>
            <div className="mt-6">
                <div className="my-3 rounded-xl bg-slate-400 h-4 w-1/1"></div>
                <div className="my-3 rounded-xl bg-slate-400 h-4 w-1/1"></div>
                <div className="my-3 rounded-xl bg-slate-400 h-4 w-1/1"></div>
                <div className="my-3 rounded-xl bg-slate-400 h-4 w-4/5"></div>
            </div>
            <div className="my-4 rounded-xl bg-slate-400 h-48 w-1/1"></div>
        </div>
        <div className="m-4 p-6 animate-pulse md:max-w-xl md:mx-auto lg:max-w-3xl bg-slate-200 dark:bg-slate-600 rounded-xl shadow-md">
            <div className="flex justify-between">
                <div className="rounded-xl bg-slate-400 h-8 w-3/5"></div>
                <div className="rounded-xl bg-slate-400 h-5 w-8"></div>
            </div>
            <div className="mt-6">
                <div className="my-3 rounded-xl bg-slate-400 h-4 w-1/1"></div>
                <div className="my-3 rounded-xl bg-slate-400 h-4 w-1/1"></div>
                <div className="my-3 rounded-xl bg-slate-400 h-4 w-2/5"></div>
            </div>
        </div>
        <div className="m-4 p-6 animate-pulse md:max-w-xl md:mx-auto lg:max-w-3xl bg-slate-200 dark:bg-slate-600 rounded-xl shadow-md">
            <div className="flex justify-between">
                <div className="rounded-xl bg-slate-400 h-8 w-3/5"></div>
                <div className="rounded-xl bg-slate-400 h-5 w-8"></div>
            </div>
            <div className="mt-6">
                <div className="my-3 rounded-xl bg-slate-400 h-4 w-1/1"></div>
                <div className="my-3 rounded-xl bg-slate-400 h-4 w-1/1"></div>
                <div className="my-3 rounded-xl bg-slate-400 h-4 w-1/1"></div>
                <div className="my-3 rounded-xl bg-slate-400 h-4 w-1/1"></div>
                <div className="my-3 rounded-xl bg-slate-400 h-4 w-4/5"></div>
            </div>
        </div>
        <div className="m-4 p-6 animate-pulse md:max-w-xl md:mx-auto lg:max-w-3xl bg-slate-200 dark:bg-slate-600 rounded-xl shadow-md">
            <div className="flex justify-between">
                <div className="rounded-xl bg-slate-400 h-8 w-3/5"></div>
                <div className="rounded-xl bg-slate-400 h-5 w-8"></div>
            </div>
            <div className="my-4 rounded-xl bg-slate-400 h-96 w-1/1"></div>
        </div>
        <div className="m-4 p-6 animate-pulse md:max-w-xl md:mx-auto lg:max-w-3xl bg-slate-200 dark:bg-slate-600 rounded-xl shadow-md">
            <div className="flex justify-between">
                <div className="rounded-xl bg-slate-400 h-8 w-3/5"></div>
                <div className="rounded-xl bg-slate-400 h-5 w-8"></div>
            </div>
            <div className="mt-6">
                <div className="my-3 rounded-xl bg-slate-400 h-4 w-1/1"></div>
                <div className="my-3 rounded-xl bg-slate-400 h-4 w-1/1"></div>
                <div className="my-3 rounded-xl bg-slate-400 h-4 w-1/1"></div>
                <div className="my-3 rounded-xl bg-slate-400 h-4 w-4/5"></div>
            </div>
            <div className="my-4 rounded-xl bg-slate-400 h-48 w-1/1"></div>
        </div>
    </div>
  );
}