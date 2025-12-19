"use client";

import React from 'react'

const Web = () => {
  return (
    <section id="projects" className="w-[85%] max-w-[1440px] mx-auto py-5 md:pt-10">
      <div className="flex flex-col items-center pb-5 md:pb-10">
        <h1 className="text-primary text-center text-[24px] md:text-[36px]">Projects</h1>
        <svg className="w-[46px] h-[5px] md:w-[73px] md:h-[5px]" viewBox="0 0 73 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="2.5" y1="2.5" x2="70.5" y2="2.5" stroke="#52FBED" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="w-[70px] md:w-[90px] h-[35px] md:h-[45px] bg-ternary border-2 border-primary mx-auto rounded-[10px] mt-[30px] flex justify-center items-center">
        <h3 className="text-primary text-[16px] md:text-[20px]">WEB</h3>
      </div>

      <div className="w-full h-auto flex flex-col gap-8 md:flex-row justify-between items-center pt-10 md:pt-20 overflow-hidden">
        <div className="w-full md:w-[45%] aspect-7/5 border border-primary rounded-[20px] overflow-hidden">
          <div className="relative h-[50%] w-full border-b border-primary ">
            <a href="https://netherworld-candle.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="">
              <img
                src="project_1.png"
                alt="Project1"
                className="h-full w-full object-cover"
              />
            </a>
          </div>
          <div className="flex flex-col h-[50%] w-full xl:w-[80%] justify-between items-start py-2 md:py-3 px-3 md:px-6">
            <div className="">
              <h4 className="text-primary font-semibold text-[12px] md:text-[16px] xl:text-[20px]">Infinityhex Games Website</h4>
              <p className="text-secondary text-[10px] md:text-[12px] xl:text-[14px] font-extralight pt-2">Official website of Infinityhex Games, featuring
                Netherworld Candle, an original tabletop game
                with an online version.</p>
            </div>
            <div className="flex items-center gap-4 pt-2 lg:pt-4 bottom-2">
              <div className="w-[60px] lg:w-[90px] h-[25px] lg:h-[38px] rounded-full bg-ternary border-1 border-primary flex justify-center items-center">
                <p className="text-primary font-semibold text-[12px] lg:text-[16px]">React</p>
              </div>
              <div className="w-[60px] lg:w-[90px] h-[25px] lg:h-[38px] rounded-full bg-ternary border-1 border-primary flex justify-center items-center">
                <p className="text-primary font-semibold text-[12px] lg:text-[16px]">Next.js</p>
              </div>
              <a href="https://netherworld-candle.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-2">
                <svg className="w-[22px] h-[22px] lg:w-[30px] lg:h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.57143 2.57143C4.77578 2.57143 4.01272 2.8875 3.45011 3.45011C2.8875 4.01272 2.57143 4.77578 2.57143 5.57143V18.4286C2.57143 20.0846 3.91543 21.4286 5.57143 21.4286H18.4286C19.2242 21.4286 19.9873 21.1125 20.5499 20.5499C21.1125 19.9873 21.4286 19.2242 21.4286 18.4286V15C21.4286 14.659 21.564 14.332 21.8051 14.0909C22.0463 13.8497 22.3733 13.7143 22.7143 13.7143C23.0553 13.7143 23.3823 13.8497 23.6234 14.0909C23.8645 14.332 24 14.659 24 15V18.4286C24 19.9062 23.413 21.3233 22.3682 22.3682C21.3233 23.413 19.9062 24 18.4286 24H5.57143C4.09379 24 2.67668 23.413 1.63183 22.3682C0.586988 21.3233 0 19.9062 0 18.4286V5.57143C0 4.09379 0.586988 2.67668 1.63183 1.63183C2.67668 0.586988 4.09379 0 5.57143 0H9C9.34099 0 9.66802 0.135459 9.90914 0.376577C10.1503 0.617695 10.2857 0.944722 10.2857 1.28571C10.2857 1.62671 10.1503 1.95373 9.90914 2.19485C9.66802 2.43597 9.34099 2.57143 9 2.57143H5.57143ZM12.8571 1.28571C12.8571 0.944722 12.9926 0.617695 13.2337 0.376577C13.4748 0.135459 13.8019 0 14.1429 0H22.7143C23.0553 0 23.3823 0.135459 23.6234 0.376577C23.8645 0.617695 24 0.944722 24 1.28571V9.85714C24 10.1981 23.8645 10.5252 23.6234 10.7663C23.3823 11.0074 23.0553 11.1429 22.7143 11.1429C22.3733 11.1429 22.0463 11.0074 21.8051 10.7663C21.564 10.5252 21.4286 10.1981 21.4286 9.85714V4.38857L15.0514 10.7657C14.9337 10.892 14.7918 10.9934 14.6341 11.0636C14.4764 11.1339 14.3061 11.1717 14.1335 11.1747C13.9608 11.1778 13.7894 11.146 13.6293 11.0814C13.4692 11.0167 13.3237 10.9204 13.2016 10.7984C13.0796 10.6763 12.9833 10.5308 12.9186 10.3707C12.854 10.2106 12.8222 10.0392 12.8253 9.86653C12.8283 9.6939 12.8661 9.52365 12.9364 9.36593C13.0066 9.20822 13.108 9.06628 13.2343 8.94857L19.6114 2.57143H14.1429C13.8019 2.57143 13.4748 2.43597 13.2337 2.19485C12.9926 1.95373 12.8571 1.62671 12.8571 1.28571Z" fill="#52FBED" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[45%] aspect-7/5 border border-primary rounded-[20px] overflow-hidden">
          <div className="relative h-[50%] w-full border-b border-primary ">
            <a href="https://rita-portfolio-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="">
              <img
                src="project_2.png"
                alt="Project1"
                className="h-full w-full object-cover"
              />
            </a>
          </div>
          <div className="flex flex-col h-[50%] w-full xl:w-[80%] justify-between items-start py-3 px-3 md:px-6">
            <div className="">
              <h4 className="text-primary font-semibold text-[12px] md:text-[16px] xl:text-[20px]">Rita's Portfolio</h4>
              <p className="text-secondary text-[10px] md:text-[12px] xl:text-[14px] font-extralight pt-2">This portfolio showcases Rita's passion for IT and her
                growing professional skills in web development and
                digital creativity.</p>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-[60px] lg:w-[90px] h-[25px] lg:h-[38px] rounded-[25px] bg-ternary border-1 border-primary flex justify-center items-center">
                <p className="text-primary font-semibold text-[12px] lg:text-[16px]">React</p>
              </div>
              <div className="w-[60px] lg:w-[90px] h-[25px] lg:h-[38px] rounded-full bg-ternary border-1 border-primary flex justify-center items-center">
                <p className="text-primary font-semibold text-[12px] lg:text-[16px]">Next.js</p>
              </div>
              <a href="https://rita-portfolio-xi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="pl-2">
                <svg className="w-[22px] h-[22px] lg:w-[30px] lg:h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.57143 2.57143C4.77578 2.57143 4.01272 2.8875 3.45011 3.45011C2.8875 4.01272 2.57143 4.77578 2.57143 5.57143V18.4286C2.57143 20.0846 3.91543 21.4286 5.57143 21.4286H18.4286C19.2242 21.4286 19.9873 21.1125 20.5499 20.5499C21.1125 19.9873 21.4286 19.2242 21.4286 18.4286V15C21.4286 14.659 21.564 14.332 21.8051 14.0909C22.0463 13.8497 22.3733 13.7143 22.7143 13.7143C23.0553 13.7143 23.3823 13.8497 23.6234 14.0909C23.8645 14.332 24 14.659 24 15V18.4286C24 19.9062 23.413 21.3233 22.3682 22.3682C21.3233 23.413 19.9062 24 18.4286 24H5.57143C4.09379 24 2.67668 23.413 1.63183 22.3682C0.586988 21.3233 0 19.9062 0 18.4286V5.57143C0 4.09379 0.586988 2.67668 1.63183 1.63183C2.67668 0.586988 4.09379 0 5.57143 0H9C9.34099 0 9.66802 0.135459 9.90914 0.376577C10.1503 0.617695 10.2857 0.944722 10.2857 1.28571C10.2857 1.62671 10.1503 1.95373 9.90914 2.19485C9.66802 2.43597 9.34099 2.57143 9 2.57143H5.57143ZM12.8571 1.28571C12.8571 0.944722 12.9926 0.617695 13.2337 0.376577C13.4748 0.135459 13.8019 0 14.1429 0H22.7143C23.0553 0 23.3823 0.135459 23.6234 0.376577C23.8645 0.617695 24 0.944722 24 1.28571V9.85714C24 10.1981 23.8645 10.5252 23.6234 10.7663C23.3823 11.0074 23.0553 11.1429 22.7143 11.1429C22.3733 11.1429 22.0463 11.0074 21.8051 10.7663C21.564 10.5252 21.4286 10.1981 21.4286 9.85714V4.38857L15.0514 10.7657C14.9337 10.892 14.7918 10.9934 14.6341 11.0636C14.4764 11.1339 14.3061 11.1717 14.1335 11.1747C13.9608 11.1778 13.7894 11.146 13.6293 11.0814C13.4692 11.0167 13.3237 10.9204 13.2016 10.7984C13.0796 10.6763 12.9833 10.5308 12.9186 10.3707C12.854 10.2106 12.8222 10.0392 12.8253 9.86653C12.8283 9.6939 12.8661 9.52365 12.9364 9.36593C13.0066 9.20822 13.108 9.06628 13.2343 8.94857L19.6114 2.57143H14.1429C13.8019 2.57143 13.4748 2.43597 13.2337 2.19485C12.9926 1.95373 12.8571 1.62671 12.8571 1.28571Z" fill="#52FBED" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Web;
