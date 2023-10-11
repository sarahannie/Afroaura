'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import style from'./banner.module.css'
import { FcBarChart } from 'react-icons/fc';

export default function Banner() {
  return (
    
    <Carousel leftControl={false}
      rightControl={false}  className={style.ban} indicators={false}  >
        <div>
        <header className={"block overflow-hidden bg-[#020d24] bg-cover bg-center"} style={{backgroundImage: "url('https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a77_Group%2047929.svg')"}}>
  {/* <!-- Container --> */}
  <div className={"mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"}>
    {/* <!-- Component --> */}
    <div className={"grid grid-cols-1 items-center gap-8 md:gap-16 lg:grid-cols-2 lg:gap-24"}>
      {/* <!-- Hero Heading --> */}
      <div className={"flex flex-col items-start"}>
        <div className={"mb-5"}>
          <h1 className={"text-4xl font-bold text-white md:text-6xl"}>Let Fashion Speaks...</h1>
        </div>
        <div className="mb-7">
          <div className="mx-auto w-full max-w-lg">
            <p className="text-[#7c8aaa]">Afroaura gives the best and latest fashion when it comes to clothing. </p>
          </div>
        </div>
        {/* <!-- Button Wrap --> */}
        <div className="flex flex-wrap items-center gap-4">
          <a href="#" className="rounded-[60px] bg-[#2d6ae0] px-6 py-4 text-center font-bold text-white transition hover:bg-[#081631]">Get Started</a>
          <a href="#" className="flex flex-row items-center rounded-[60px] bg-[#081631] px-6 py-4 font-bold text-white">
            <div className="mr-2 flex w-5 flex-col items-center">
              <FcBarChart />
            </div>
            <p>Buy Now</p>
          </a>
        </div>
      </div>
      {/* <!-- Hero Image --> */}
      <div>
        <Image width={300} height={300} src="/img/header1.png" alt="" className="inline-block" />
      </div>
    </div>
  </div>
</header>
        </div>
      
        <div>
        <header className="block overflow-hidden bg-[#020d24] bg-cover bg-center" style={{backgroundImage: "url('https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a77_Group%2047929.svg')"}}>
  {/* <!-- Container --> */}
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* <!-- Component --> */}
    <div className="grid grid-cols-1 items-center gap-8 md:gap-16 lg:grid-cols-2 lg:gap-24">
      {/* <!-- Hero Heading --> */}
      <div className="flex flex-col items-start">
        <div className="mb-5">
          <h1 className="text-4xl font-bold text-white md:text-6xl">50% On All First Orders</h1>
        </div>
        <div className="mb-7">
          <div className="mx-auto w-full max-w-lg">
            <p className="text-[#7c8aaa]">Afroaura gives the best and latest fashion when it comes to clothing. </p>
          </div>
        </div>
        {/* <!-- Button Wrap --> */}
        <div className="flex flex-wrap items-center gap-4">
          <a href="#" className="rounded-[60px] bg-[#2d6ae0] px-6 py-4 text-center font-bold text-white transition hover:bg-[#081631]">Get Started</a>
          <a href="#" className="flex flex-row items-center rounded-[60px] bg-[#081631] px-6 py-4 font-bold text-white">
            <div className="mr-2 flex w-5 flex-col items-center">
              <FcBarChart />
            </div>
            <p>Buy Now</p>
          </a>
        </div>
      </div>
      {/* <!-- Hero Image --> */}
      <div>
        <Image width={300} height={300} src="/img/hder.png" alt="" className="inline-block" />
      </div>
    </div>
  </div>
</header>
        </div>

        <div>
        <header className="block overflow-hidden bg-[#020d24] bg-cover bg-center" style={{backgroundImage: "url('https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a77_Group%2047929.svg')"}}>
  {/* <!-- Container --> */}
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* <!-- Component --> */}
    <div className="grid grid-cols-1 items-center gap-8 md:gap-16 lg:grid-cols-2 lg:gap-24">
      {/* <!-- Hero Heading --> */}
      <div className="flex flex-col items-start">
        <div className="mb-5">
          <h1 className="text-4xl font-bold text-white md:text-6xl"> Let Be your Plug</h1>
        </div>
        <div className="mb-7">
          <div className="mx-auto w-full max-w-lg">
            <p className="text-[#7c8aaa]">Afroaura gives the best and latest fashion when it comes to clothing. </p>
          </div>
        </div>
        {/* <!-- Button Wrap --> */}
        <div className="flex flex-wrap items-center gap-4">
          <a href="#" className="rounded-[60px] bg-[#2d6ae0] px-6 py-4 text-center font-bold text-white transition hover:bg-[#081631]">Get Started</a>
          <a href="#" className="flex flex-row items-center rounded-[60px] bg-[#081631] px-6 py-4 font-bold text-white">
            <div className="mr-2 flex w-5 flex-col items-center">
              <FcBarChart />
            </div>
            <p>Buy Now</p>
          </a>
        </div>
      </div>
      {/* <!-- Hero Image --> */}
      <div>
        <Image width={300} height={300} src="/img/header2.png" alt="" className="inline-block" />
      </div>
    </div>
  </div>
</header>
        </div>

        <div>
        <header className="block overflow-hidden bg-[#020d24] bg-cover bg-center" style={{backgroundImage: "url('https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a77_Group%2047929.svg')"}}>
  {/* <!-- Container --> */}
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* <!-- Component --> */}
    <div className="grid grid-cols-1 items-center gap-8 md:gap-16 lg:grid-cols-2 lg:gap-24">
      {/* <!-- Hero Heading --> */}
      <div className="flex flex-col items-start">
        <div className="mb-5">
          <h1 className="text-4xl font-bold text-white md:text-6xl">Fashion Market</h1>
        </div>
        <div className="mb-7">
          <div className="mx-auto w-full max-w-lg">
            <p className="text-[#7c8aaa]">Afroaura gives the best and latest fashion when it comes to clothing. </p>
          </div>
        </div>
        {/* <!-- Button Wrap --> */}
        <div className="flex flex-wrap items-center gap-4">
          <a href="#" className="rounded-[60px] bg-[#2d6ae0] px-6 py-4 text-center font-bold text-white transition hover:bg-[#081631]">Get Started</a>
          <a href="#" className="flex flex-row items-center rounded-[60px] bg-[#081631] px-6 py-4 font-bold text-white">
            <div className="mr-2 flex w-5 flex-col items-center">
              <FcBarChart />
            </div>
            <p>Buy Now</p>
          </a>
        </div>
      </div>
      {/* <!-- Hero Image --> */}
      <div>
        <Image width={300} height={300} src="/img/header3.png" alt="" className="inline-block" />
      </div>
    </div>
  </div>
</header>
        </div>
 
    </Carousel>
  )
}


