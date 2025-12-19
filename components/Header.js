import React from 'react'
import Spline from '@splinetool/react-spline/next';
import TypeAni from './TypeAni';
import MobileNavMenu from './MobileNavMenu';
import { Suspense } from 'react';


const Header = () => {
  return (
    <section id="Home" className="w-[85%] max-w-[1440px] mx-auto py-10">
      <div className="flex justify-between items-center">
        <h2 className="text-[12px] md:text-[24px] text-primary font-semibold">Rita Zhao</h2>
        <div className="flex gap-10 items-center">
          <a href="#Home" className="group relative hidden sm:block sm:text-[12px] md:text-[18px] font-semibold text-secondary">
            Home
            <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-full transform
             origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a href="#skills" className="group relative hidden sm:block sm:text-[12px] md:text-[18px] font-semibold text-secondary">
            Skills
            <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-full transform
             origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a href="#project" className="group relative hidden sm:block sm:text-[12px] md:text-[18px] font-semibold text-secondary">
            Projects
            <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-full transform
             origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a href="#about" className="group relative hidden sm:block sm:text-[12px] md:text-[18px] font-semibold text-secondary">
            About
            <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-full transform
             origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <a href="#contact" className="group relative hidden sm:block sm:text-[12px] md:text-[18px] font-semibold text-secondary">
            Contact
            <span className="absolute bottom-0 left-0 h-0.5 bg-primary w-full transform
             origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
          <div className="hidden sm:block ">
            <a href="mailto:ritazhaocareer@gmail.com" className="sm:h-[30px] w-[70px] rounded-[15px] md:h-[50px] w-[110px] rounded-[25px] bg-primary flex justify-center items-center">
              <div className="hidden sm:block sm:text-[12px] md:text-[18px] font-semibold text-black">Hire me!</div>
            </a>
          </div>
        </div>
        <div className="sm:hidden">
          <MobileNavMenu />
        </div>
      </div>

      <div className="pt-25 pb-20 flex justify-between items-center">
        <div className="w-[1/2]">
          <p className="text-secondary text-[22px] font-medium">Hi, I'm Rita Zhao. I'm a</p>
          <TypeAni />
          <div className="pt-2">
            <p className="text-[12px] lg:text-[16px] text-gray-300 font-extralight"> Transitioning into tech as a software developer and<br />
              AI enthusiast, driven to turn ideas into intelligent design.</p>
          </div>
          <div className="pt-15 flex gap-4">
            <a href="mailto:ritazhaocareer@gmail.com" className="icon-wrapper group bg-ternary overflow-hidden h-12 w-12 rounded-full flex justify-center items-center">
              <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.21046 0H17.7895C19.2593 0 20 0.7375 20 2.2375V12.7625C20 14.25 19.2593 15 17.7895 15H2.21046C0.740741 15 0 14.25 0 12.7625V2.2375C0 0.7375 0.740741 0 2.21046 0ZM9.99412 10.75L17.9189 3.8375C18.2011 3.5875 18.4245 3.0125 18.0717 2.5C17.7307 1.9875 17.1076 1.975 16.6961 2.2875L9.99412 7.1125L3.30394 2.2875C2.89242 1.975 2.26925 1.9875 1.92828 2.5C1.57554 3.0125 1.79894 3.5875 2.08113 3.8375L9.99412 10.75Z" fill="#52FBED" />
              </svg>
            </a>
            <a href="" className="icon-wrapper group bg-ternary overflow-hidden h-12 w-12 rounded-full flex justify-center items-center">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 0C13.4016 0 15.877 1.00096 17.9262 3.00288C19.9754 5.0048 21 7.41512 21 10.2338C21 12.476 20.3279 14.4859 18.9836 16.2636C17.6393 18.0413 15.918 19.2825 13.8197 19.9872C13.3607 20.0512 13.1311 19.8751 13.1311 19.4587V16.672C13.1311 15.8072 12.8852 15.1666 12.3934 14.7502C13.8361 14.59 14.9918 14.1576 15.8607 13.4529C16.7295 12.7482 17.1639 11.5151 17.1639 9.75336C17.1639 8.66432 16.8033 7.73543 16.082 6.96669C16.4426 6.13389 16.4098 5.22101 15.9836 4.22806C15.3934 4.0679 14.4426 4.42024 13.1311 5.28507C12.2787 5.06086 11.3934 4.94875 10.4754 4.94875C9.55738 4.94875 8.68853 5.06086 7.86885 5.28507C7.27869 4.9007 6.7459 4.62044 6.27049 4.44427C5.79508 4.2681 5.45902 4.19603 5.2623 4.22806H4.96721C4.57377 5.22101 4.54098 6.13389 4.86885 6.96669C4.14754 7.73543 3.78689 8.66432 3.78689 9.75336C3.78689 11.5151 4.22951 12.7482 5.11475 13.4529C6 14.1576 7.14754 14.59 8.55738 14.7502C8.19672 15.0705 7.98361 15.5349 7.91803 16.1435C6.54098 16.7201 5.52459 16.4318 4.86885 15.2787C4.47541 14.6381 3.93443 14.2857 3.2459 14.2217C3.18033 14.2217 3.10656 14.2297 3.02459 14.2457C2.94262 14.2617 2.86066 14.3177 2.77869 14.4138C2.69672 14.5099 2.83607 14.6541 3.19672 14.8463C3.65574 15.0705 4.03279 15.5669 4.32787 16.3357C4.36066 16.3997 4.39344 16.4718 4.42623 16.5519C4.45902 16.632 4.56557 16.7841 4.7459 17.0083C4.92623 17.2325 5.13934 17.4007 5.38525 17.5128C5.63115 17.6249 5.96721 17.729 6.39344 17.8251C6.81967 17.9212 7.31148 17.8892 7.86885 17.729V19.4587C7.86885 19.8751 7.63934 20.0512 7.18033 19.9872C5.08197 19.2825 3.36066 18.0413 2.01639 16.2636C0.672131 14.4859 0 12.476 0 10.2338C0 7.41512 1.02459 5.0048 3.07377 3.00288C5.12295 1.00096 7.59836 0 10.5 0Z" fill="#52FBED" />
              </svg>
            </a>
            <a href="" className="icon-wrapper group bg-ternary overflow-hidden h-12 w-12 rounded-full flex justify-center items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9532 8.20657C11.7533 7.94366 11.3786 7.81221 10.829 7.81221C10.1546 7.81221 9.67994 8.01252 9.40515 8.41315C9.13037 8.81377 8.99297 9.37715 8.99297 10.1033V15.5869C8.99297 15.7121 8.9555 15.8122 8.88056 15.8873C8.80562 15.9624 8.7057 16 8.5808 16H5.73302C5.6331 16 5.53942 15.9624 5.45199 15.8873C5.36456 15.8122 5.32084 15.7121 5.32084 15.5869V5.44601C5.32084 5.34585 5.36456 5.25196 5.45199 5.16432C5.53942 5.07668 5.6331 5.03286 5.73302 5.03286H8.50585C8.60578 5.03286 8.68696 5.0579 8.74941 5.10798C8.81187 5.15806 8.85558 5.23318 8.88056 5.33333V5.52113C8.90554 5.57121 8.91803 5.65884 8.91803 5.78404C9.61749 5.10798 10.5667 4.76995 11.7658 4.76995C13.0898 4.76995 14.1265 5.10798 14.8759 5.78404C15.6253 6.46009 16 7.44914 16 8.75117V15.5869C16 15.7121 15.9563 15.8122 15.8689 15.8873C15.7814 15.9624 15.6877 16 15.5878 16H12.6651C12.5652 16 12.4715 15.9624 12.3841 15.8873C12.2966 15.8122 12.2529 15.7121 12.2529 15.5869V9.42723C12.2529 8.87637 12.153 8.46948 11.9532 8.20657ZM3.29742 3.32394C2.92272 3.71205 2.46682 3.9061 1.92974 3.9061C1.39266 3.9061 0.936768 3.71205 0.562061 3.32394C0.187354 2.93584 0 2.47261 0 1.93427C0 1.39593 0.187354 0.938967 0.562061 0.56338C0.936768 0.187793 1.39266 0 1.92974 0C2.46682 0 2.92272 0.187793 3.29742 0.56338C3.67213 0.938967 3.85948 1.39593 3.85948 1.93427C3.85948 2.47261 3.67213 2.93584 3.29742 3.32394ZM3.78454 5.44601V15.5869C3.78454 15.7121 3.74083 15.8122 3.6534 15.8873C3.56596 15.9624 3.47229 16 3.37237 16H0.52459C0.399688 16 0.299766 15.9624 0.224824 15.8873C0.149883 15.8122 0.112412 15.7121 0.112412 15.5869V5.44601C0.112412 5.34585 0.149883 5.25196 0.224824 5.16432C0.299766 5.07668 0.399688 5.03286 0.52459 5.03286H3.37237C3.47229 5.03286 3.56596 5.07668 3.6534 5.16432C3.74083 5.25196 3.78454 5.34585 3.78454 5.44601Z" fill="#52FBED" />
              </svg>
            </a>
            <a href="" className="icon-wrapper group bg-ternary overflow-hidden h-12 w-12 rounded-full flex justify-center items-center">
              <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.3 11.2222H1.7V5H0V11.2222C0 12.2027 0.76245 13 1.7 13H15.3C16.2376 13 17 12.2027 17 11.2222V5H15.3V11.2222Z" fill="#52FBED" />
                <path d="M8.5 10L12 5.83333H9.375V0H7.625V5.83333H5L8.5 10Z" fill="#52FBED" />
              </svg>
            </a>
          </div>
        </div>
        <div className="hidden md:block lg:w-[500px] h-[500px] flex justify-center items-center">
          <Suspense fallback={<div className="text-white text-xs">Loading 3D...</div>}>
            <Spline
              scene="https://prod.spline.design/aAzglDTNZxk0mRoA/scene.splinecode"
            />
          </Suspense>
        </div>
      </div>
      <a href="#skills" className="flex justify-center items-center animate-bounce">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="28" height="28" fill="black" />
          <path d="M4.5 5.25L12 12.75L19.5 5.25M4.5 11.25L12 18.75L19.5 11.25" stroke="#52FBED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section >
  )
}

export default Header