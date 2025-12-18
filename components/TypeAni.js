"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeAni = () => {
  return (
    <h1 className="text-[28px] md:text-[32px] lg:text-[40px] xl:text-[52px] font-bold text-primary pt-2">
      <TypeAnimation
        sequence={[
          'Software Developer',
          2500, 
          'Frontend Innovator', 
          2500, 
          'AI Designer',
          2500,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity} 
        speed={150} 
        deletionSpeed={30} 
      />
    </h1>
  )
}

export default TypeAni