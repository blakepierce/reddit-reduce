import React from 'react';
import { Area } from './features/area/Area';
import { Nav } from './features/nav/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Area />
      <div className="relative bottom-0 left-0 right-0" >
        <h2 className="py-5 text-slate-500 dark:text-slate-400 text-sm md:text-md text-center" >Copyright © 2022 Blake Pierce</h2>
      </div>
    </div>
  );
}

export default App;
