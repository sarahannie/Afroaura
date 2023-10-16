"use client"
import React, { useEffect } from "react"
import Glide, { Options } from "@glidejs/glide";
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

export default function CarouselIndicatorsControlsInside() {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Carousel with indicators & controls inside --> */}
      <div className="glide-03 relative w-full mb-6">
      <div className="flex flex-wrap  justify-between  mb-8">
          <h3 className="ml-10 text-3xl font-bold leading-none md:text-3xl">
            $5000 Products
          </h3>
        </div>
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden mr-[5rem] ml-[5rem]" data-glide-el="track">
            
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform]  relative flex w-full overflow-hidden p-0">
            
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
   
   <Image
    height={18}
    width={18}
     className="h-48 w-full object-cover object-end"
     src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
     alt="Home in Countryside"
   />
   <div className="p-6">
     <div className="flex items-baseline">
       <span className="inline-block bg-[#D1E4FC] text-black py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
         Hot
       </span>
       <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
         1 Short • 2 Sock
       </div>
     </div>
     <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
       Kids_short
     </h4>
     <div className="mt-1 flex justify-between">
       <div className=" flex flex-col">
       <span>$1,900.00</span>
       <span><del>$3,900.00</del></span>
       </div>
       <div><span className="ml-2 text-gray-600 text-sm">34 reviews</span></div>
      
       
     </div>
     <div className="mt-2 flex text-[#020d24] font-semibold justify-between ">
       <div className=" flex  ">
         <span className='flex mt-2'>
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar /> 
         </span>
        </div>
          <div>
            <span className="block bg-primary  rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">Add Cart
            </span>
          </div> 
         
     </div>
   </div>
            </div>
            
            
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
   
   <Image
    height={18}
    width={18}
     className="h-48 w-full object-cover object-end"
     src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
     alt="Home in Countryside"
   />
   <div className="p-6">
     <div className="flex items-baseline">
       <span className="inline-block bg-[#D1E4FC] text-black py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
         Hot
       </span>
       <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
         1 Short • 2 Sock
       </div>
     </div>
     <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
       Kids_short
     </h4>
     <div className="mt-1 flex justify-between">
       <div className=" flex flex-col">
       <span>$1,900.00</span>
       <span><del>$3,900.00</del></span>
       </div>
       <div><span className="ml-2 text-gray-600 text-sm">34 reviews</span></div>
      
       
     </div>
     <div className="mt-2 flex text-[#020d24] font-semibold justify-between ">
       <div className=" flex  ">
         <span className='flex mt-2'>
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar /> 
         </span>
        </div>
          <div>
            <span className="block bg-primary  rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">Add Cart
            </span>
          </div> 
         
     </div>
   </div>
            </div>
            
            
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
   
   <Image
    height={18}
    width={18}
     className="h-48 w-full object-cover object-end"
     src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
     alt="Home in Countryside"
   />
   <div className="p-6">
     <div className="flex items-baseline">
       <span className="inline-block bg-[#D1E4FC] text-black py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
         Hot
       </span>
       <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
         1 Short • 2 Sock
       </div>
     </div>
     <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
       Kids_short
     </h4>
     <div className="mt-1 flex justify-between">
       <div className=" flex flex-col">
       <span>$1,900.00</span>
       <span><del>$3,900.00</del></span>
       </div>
       <div><span className="ml-2 text-gray-600 text-sm">34 reviews</span></div>
      
       
     </div>
     <div className="mt-2 flex text-[#020d24] font-semibold justify-between ">
       <div className=" flex  ">
         <span className='flex mt-2'>
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar /> 
         </span>
        </div>
          <div>
            <span className="block bg-primary  rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">Add Cart
            </span>
          </div> 
         
     </div>
   </div>
            </div>
            
            
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
   
   <Image
    height={18}
    width={18}
     className="h-48 w-full object-cover object-end"
     src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
     alt="Home in Countryside"
   />
   <div className="p-6">
     <div className="flex items-baseline">
       <span className="inline-block bg-[#D1E4FC] text-black py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
         Hot
       </span>
       <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
         1 Short • 2 Sock
       </div>
     </div>
     <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
       Kids_short
     </h4>
     <div className="mt-1 flex justify-between">
       <div className=" flex flex-col">
       <span>$1,900.00</span>
       <span><del>$3,900.00</del></span>
       </div>
       <div><span className="ml-2 text-gray-600 text-sm">34 reviews</span></div>
      
       
     </div>
     <div className="mt-2 flex text-[#020d24] font-semibold justify-between ">
       <div className=" flex  ">
         <span className='flex mt-2'>
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar /> 
         </span>
        </div>
          <div>
            <span className="block bg-primary  rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">Add Cart
            </span>
          </div> 
         
     </div>
   </div>
            </div>
            
            
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
   
   <Image
    height={18}
    width={18}
     className="h-48 w-full object-cover object-end"
     src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
     alt="Home in Countryside"
   />
   <div className="p-6">
     <div className="flex items-baseline">
       <span className="inline-block bg-[#D1E4FC] text-black py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
         Hot
       </span>
       <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
         1 Short • 2 Sock
       </div>
     </div>
     <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
       Kids_short
     </h4>
     <div className="mt-1 flex justify-between">
       <div className=" flex flex-col">
       <span>$1,900.00</span>
       <span><del>$3,900.00</del></span>
       </div>
       <div><span className="ml-2 text-gray-600 text-sm">34 reviews</span></div>
      
       
     </div>
     <div className="mt-2 flex text-[#020d24] font-semibold justify-between ">
       <div className=" flex  ">
         <span className='flex mt-2'>
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar />
           <FaStar /> 
         </span>
        </div>
          <div>
            <span className="block bg-primary  rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">Add Cart
            </span>
          </div> 
         
     </div>
   </div>
            </div>
            
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with indicators & controls inside --> */}
    </>
  )
}