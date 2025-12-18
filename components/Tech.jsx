"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import { technologies } from '../constants';

const BallCanvas = dynamic(() => import('./canvas/BallCanvas'), {
  ssr: false
});

const Tech = () => {
  return (
    <div className='grid grid-cols-3 justify-items-center not-visited:gap-x-6 gap-y-6 sm:gap-x-10 sm:gap-y-10
     max-w-xl w-full mx-auto'>
      {technologies.map((technology) => (
        <div className='h-20 w-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;