import React from 'react'

const About = () => {
  return (
    <section id="about" className="w-[85%] max-w-[1440px] mx-auto py-10 md:py-30">
      <div className="flex flex-col items-center pb-5 md:pb-10">
        <h1 className="text-primary text-center text-[24px] md:text-[36px]">About Me</h1>
        <svg className="w-[46px] h-[5px] md:w-[73px] md:h-[5px]" viewBox="0 0 73 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="2.5" y1="2.5" x2="70.5" y2="2.5" stroke="#52FBED" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="w-full aspect-2/1 bg-linear-to-br from-support3 from-30%  via-support4 via-70%  to-support5 rounded-[25px]
       flex flex-col lg:flex-row justify-around items-center mt-5">
        <div className="gap-4 w-[90%] lg:w-[45%] py-6">
          <p className="font-[Sriracha] text-[14px] lg:text-[16px] text-secondary mb-4">
            &lt;p&gt;
          </p>
          <p className="text-secondary mb-4 text-[14px] lg:text-[16px] font-light">
            I'm a motivated software developer with a strong passion for technology and problem-solving.
            Transitioning from another field, I've systematically studied front-end development — HTML,
            CSS, JavaScript, React, and Next.js — and built real projects that turned theory into practice.
          </p>
          <p className="text-secondary mb-4 text-[14px] lg:text-[16px] font-light">
            Throughout this journey, I discovered how much I enjoy coding. Learning a new framework or solving
            a tough bug gives me a deep sense of accomplishment and reminds me why I chose this path. I'm fascinated
            by how logic, creativity, and perseverance come together in software development.
          </p>
          <p className="text-secondary text-[14px] lg:text-[16px] font-light">
            I'm also interested in AI-driven design, using generative tools to explore new forms of digital creativity
            My goal is to keep growing as a developer, crafting clean, functional, and engaging web experiences that make
            technology feel effortless and inspiring.
          </p>
          <p className="font-[Sriracha] text-[14px] lg:text-[16px] text-secondary mt-4">
            &lt;/p&gt;
          </p>
        </div>
        <div className="w-full md:w-[45%] flex justify-end items-center pr-4 md:justify-center">
          <img src="rita_portrait.png" alt="" className="w-[70%] md:w-[80%] xl:[60%] h-auto pb-4" />
        </div>
      </div>
    </section>
  )
}

export default About;