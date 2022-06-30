import React from 'react';
import { Area } from './features/area/Area';
import { Nav } from './features/nav/Nav';

function App() {
  return (
    <div>
      <Nav />
      {/* <nav className="fixed top-0 left-0 right-0 bg-slate-50 dark:bg-slate-800 px-2 sm:px-4 py-2.5 border-b-1 border-slate-200 dark:border-slate-600 shadow-md" >
        <div className="container flex justify-between px-2 mx-auto" >
          <h1 className="self-center text-lg md:text-xl lg:text-2xl text-slate-800 dark:text-slate-50 font-sans font-semibold">Reddit<span className="font-mono font-normal tracking-tight">.reduce()</span></h1>
          <input type="text" id="search" className="block p-2 rounded-xl w-48 md:w-56 lg:w-64 bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-200 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400" placeholder="Search" />
        </div>
      </nav> */}
      <Area />
      <div className="relative bottom-0 left-0 right-0" >
        <h2 className="py-5 text-slate-500 dark:text-slate-400 text-sm md:text-md text-center" >Copyright © 2022 Blake Pierce</h2>
      </div>
    </div>
  );
}

export default App;
