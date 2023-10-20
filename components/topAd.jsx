"use client"
import React from 'react';
import style from './topad.module.css'
import { FaGreaterThan, FaStar } from 'react-icons/fa';
import {ImPriceTags} from 'react-icons/im'
import Image from 'next/image';

const TopAd = () => {
  return (
    <>
    <section className='bg-red dark:bg-black pb-3'>
    <div className='flex text-white bg-blue py-3 justify-between mr-12 ml-12'>
            <div className='flex text-xl pl-2'><ImPriceTags className='text-3xl'/> Flash Sales</div>
            <div className='lg:text-xl text-xl'> Remaining hours:  <span className='lg:text-xl text-xl'>10h:30m:21s</span></div>
            <div className='flex gap-1 pr-2'>View all <FaGreaterThan className='mt-1.5'/></div>
        </div>
        <section className="text-gray-600 body-font mr-12 ml-12 bg-white">
            <div className="container px-18 pt-12 pb-10  justify-center">
            <div className="flex flex-wrap justify-center -m-4 gap-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
 <Image
 width={30}
 height={30}
   className="h-48 w-full object-cover object-end"
   src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
   alt="Home in Countryside"
 />
 <div className="p-6">
   <div className="flex items-baseline dark:text-black">
     <span className="inline-block bg-red text-black py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
       Hot
     </span>
     <div className="ml-2 text-black text-xs uppercase font-semibold tracking-wide">
       1 Short • 2 Sock
     </div>
   </div>
   <h4 className="mt-2 font-semibold text-black text-lg leading-tight truncate">
     Kids_short
   </h4>
   <div className="mt-1 flex justify-between">
     <div className=" flex text-black flex-col">
     <span>$1,900.00</span>
     <span><del>$3,900.00</del></span>
     </div>
     <div><span className="ml-2 text-black text-sm">34 reviews</span></div>
    
     
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
            <span className="block bg-blue   rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">Add Cart
            </span>
          </div> 
         
     </div>
 </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
 
 <Image
 width={30}
 height={30}
   className="h-48 w-full object-cover object-end"
   src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
   alt="Home in Countryside"
 />
 <div className="p-6">
   <div className="flex items-baseline dark:text-black">
     <span className="inline-block bg-red text-black py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
       Hot
     </span>
     <div className="ml-2 text-black text-xs uppercase font-semibold tracking-wide">
       1 Short • 2 Sock
     </div>
   </div>
   <h4 className="mt-2 font-semibold text-black text-lg leading-tight truncate">
     Kids_short
   </h4>
   <div className="mt-1 flex justify-between">
     <div className=" flex text-black flex-col">
     <span>$1,900.00</span>
     <span><del>$3,900.00</del></span>
     </div>
     <div><span className="ml-2 text-black text-sm">34 reviews</span></div>
    
     
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
            <span className="block bg-blue   rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">Add Cart
            </span>
          </div> 
         
     </div>
 </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
 
 <Image
 width={30}
 height={30}
   className="h-48 w-full object-cover object-end"
   src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
   alt="Home in Countryside"
 />
 <div className="p-6">
   <div className="flex items-baseline dark:text-black">
     <span className="inline-block bg-red text-black py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
       Hot
     </span>
     <div className="ml-2 text-black text-xs uppercase font-semibold tracking-wide">
       1 Short • 2 Sock
     </div>
   </div>
   <h4 className="mt-2 font-semibold text-black text-lg leading-tight truncate">
     Kids_short
   </h4>
   <div className="mt-1 flex justify-between">
     <div className=" flex text-black flex-col">
     <span>$1,900.00</span>
     <span><del>$3,900.00</del></span>
     </div>
     <div><span className="ml-2 text-black text-sm">34 reviews</span></div>
    
     
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
            <span className="block bg-blue   rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">Add Cart
            </span>
          </div> 
         
     </div>
 </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
 
 <Image
 width={30}
 height={30}
   className="h-48 w-full object-cover object-end"
   src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
   alt="Home in Countryside"
 />
 <div className="p-6">
   <div className="flex items-baseline dark:text-black">
     <span className="inline-block bg-red text-black py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
       Hot
     </span>
     <div className="ml-2 text-black text-xs uppercase font-semibold tracking-wide">
       1 Short • 2 Sock
     </div>
   </div>
   <h4 className="mt-2 font-semibold text-black text-lg leading-tight truncate">
     Kids_short
   </h4>
   <div className="mt-1 flex justify-between">
     <div className=" flex text-black flex-col">
     <span>$1,900.00</span>
     <span><del>$3,900.00</del></span>
     </div>
     <div><span className="ml-2 text-black text-sm">34 reviews</span></div>
    
     
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
            <span className="block bg-blue   rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center">Add Cart
            </span>
          </div> 
         
     </div>
 </div>
            </div>
            </div>
            </div>
        </section>
    </section>
       
    </>
    
  )
}

export default TopAd