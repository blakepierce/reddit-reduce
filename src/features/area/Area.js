import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Post } from '../post/Post';

export function Area() {

  return (
    <div className="pt-16" >
        <div className="m-4 md:max-w-xl md:mx-auto lg:max-w-3xl">
            <h2 className="pl-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-50" >Name of Area</h2>
        </div>
        <Post />
    </div>
  );
}
