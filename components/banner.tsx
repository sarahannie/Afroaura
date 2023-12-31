"use client";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import style from "./banner.module.css";
import { FcBarChart } from "react-icons/fc";

export default function Banner() {
  return (
    <Carousel
      autoPlay
      showStatus={false}
      showArrows={false}
      className={`${style.ban} bg-red`}
      showIndicators={false}
      showThumbs={false}
      dynamicHeight={false}
    >
      <div>
        <header className={"block overflow-hidden bg-blue bg-cover  bg-center "}>
          {/* <!-- Container --> */}
          <div
            className={
              "mx-auto  w-full max-w-7xl px-5 py-2 md:px-10 md:py-24 lg:py-7"
            }
          >
            {/* <!-- Component --> */}
            <div
              className={
                "grid grid-cols-1 items-center gap-8 md:gap-16 lg:grid-cols-2 lg:gap-24"
              }
            >
              {/* <!-- Hero Heading --> */}
              <div className={"flex flex-col  item-center"}>
                <div className={"mb-5"}>
                  <h1 className={"text-4xl font-bold text-white md:text-6xl"}>
                    Fashion Speaks...
                  </h1>
                </div>
                <div className="mb-7">
                  <div className="mx-auto w-full max-w-lg">
                    <p className="text-white">
                      Afroaura gives the best and latest fashion when it comes
                      to clothing.{" "}
                    </p>
                  </div>
                </div>
                {/* <!-- Button Wrap --> */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#"
                    className="rounded-[60px] bg-white px-6 py-4 text-center font-bold text-[#7f0577] transition hover:bg-[#081631]"
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="flex flex-row items-center rounded-[60px] border-2 border-white text-white  px-6 py-4 font-bold text-white"
                  >
                    <div className="mr-2 flex w-5 flex-col items-center">
                      <FcBarChart />
                    </div>
                    <p>Buy Now</p>
                  </a>
                </div>
              </div>
              {/* <!-- Hero Image --> */}
              <div>
                <Image
                  width={300}
                  height={300}
                  src="/img/header1.png"
                  alt=""
                  placeholder="blur"
                  blurDataURL="/img/header1_blur.png"
                  className="inline-block"
                />
              </div>
            </div>
          </div>
        </header>
      </div>

      <div>
        <header className="block overflow-hidden bg-blue bg-cover bg-center">
          {/* <!-- Container --> */}
          <div className="mx-auto w-full max-w-7xl px-5 py-2 md:px-10 md:py-14 lg:py-5">
            {/* <!-- Component --> */}
            <section className="px-3 py-1  lg:py-1">
              <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                <div className="order-2 lg:order-1 flex flex-col text-white justify-center items-center">
                  <p className="text-4xl font-bold md:text-7xl text-orange-600">
                    25% OFF
                  </p>
                  <p className="text-4xl text-neutral-100 font-bold md:text-7xl">
                    SUMMER SALE
                  </p>
                  <p className="mt-2 text-sm text-neutral-100 md:text-lg">
                    For limited time only!
                  </p>
                  <button className="text-lg md:text-2xl font-bold rounded-[60px] bg-white text-blue py-3 px-7 mt-10 hover:bg-zinc-800">
                    Shop Now
                  </button>
                </div>
                <div className="order-2 lg:order-2">
                  <Image
                    width={800}
                    height={500}
                    className="h-80 w-80  lg:w-[850px] lg:h-[450px] inline-block "
                    src="/img/hder.png"
                    alt=""
                    placeholder="blur"
                    blurDataURL="/img/hder.png"
                  />
                </div>
              </div>
            </section>
          </div>
        </header>
      </div>

      <div>
        <header
          className="block overflow-hidden bg-blue bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a77_Group%2047929.svg')",
          }}
        >
          {/* <!-- Container --> */}
          <div className="mx-auto w-full max-w-7xl px-5 py-2 md:px-10 md:py-24 lg:py-7">
            {/* <!-- Component --> */}
            <div className="grid grid-cols-1 items-center gap-8 md:gap-16 lg:grid-cols-2 lg:gap-24">
              {/* <!-- Hero Heading --> */}
              <div className="flex flex-col  item-center">
                <div className="mb-5">
                  <h1 className="text-4xl font-bold text-white md:text-6xl">
                    {" "}
                    Let Be your Plug
                  </h1>
                </div>
                <div className="mb-7">
                  <div className="mx-auto w-full max-w-lg">
                    <p className="text-white">
                      Afroaura gives the best and latest fashion when it comes
                      to clothing.{" "}
                    </p>
                  </div>
                </div>
                {/* <!-- Button Wrap --> */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#"
                    className="rounded-[60px] bg-white px-6 py-4 text-center font-bold text-blue transition hover:bg-[#081631]"
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="flex flex-row items-center rounded-[60px] border-2 border-white text-white px-6 py-4 font-bold text-white"
                  >
                    <div className="mr-2 flex w-5 flex-col items-center">
                      <FcBarChart />
                    </div>
                    <p>Buy Now</p>
                  </a>
                </div>
              </div>
              {/* <!-- Hero Image --> */}
              <div>
                <Image
                  width={300}
                  height={300}
                  src="/img/header2.png"
                  placeholder="blur"
                  alt=""
                  className="inline-block"
                  blurDataURL="/img/header2.png"
                />
              </div>
            </div>
          </div>
        </header>
      </div>

      <div>
        <header className="block overflow-hidden bg-blue bg-cover bg-center">
          {/* <!-- Container --> */}
          <div className="mx-auto w-full max-w-7xl px-5 py-1 md:px-10 md:py-24 lg:py-7">
            {/* <!-- Component --> */}
            <div className="grid grid-cols-1 items-center gap-8 md:gap-16 lg:grid-cols-2 lg:gap-24">
              {/* <!-- Hero Heading --> */}
              <div className="flex flex-col item-center">
                <div className="mb-5">
                  <h1 className="text-4xl font-bold text-white  md:text-6xl">
                    Fashion Market
                  </h1>
                </div>
                <div className="mb-7">
                  <div className="mx-auto w-full max-w-lg">
                    <p className="text-white">
                      Afroaura gives the best and latest fashion when it comes
                      to clothing.{" "}
                    </p>
                  </div>
                </div>
                {/* <!-- Button Wrap --> */}
                <div className="flex flex-wrap item-center justify-center gap-4">
                  <a
                    href="#"
                    className="rounded-[60px] bg-white px-6 py-4 text-center font-bold text-blue transition hover:bg-[#081631]"
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="flex flex-row items-center rounded-[60px] border-2 border-white text-white px-6 py-4 font-bold text-white"
                  >
                    <div className="mr-2 flex w-5 flex-col items-center">
                      <FcBarChart />
                    </div>
                    <p>Buy Now</p>
                  </a>
                </div>
              </div>
              {/* <!-- Hero Image --> */}
              <div>
                <Image
                  width={300}
                  height={300}
                  src="/img/header3.png"
                  alt=""
                  placeholder="blur"
                  className="inline-block"
                  blurDataURL="/img/header3.png"
                />
              </div>
            </div>
          </div>
        </header>
      </div>
    </Carousel>
  );
}
