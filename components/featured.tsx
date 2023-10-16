import React from 'react'
import { FaPlaneArrival, FaShippingFast } from 'react-icons/fa'
import { MdProductionQuantityLimits, MdSentimentSatisfiedAlt } from 'react-icons/md'

const Featured = () => {
  return (
    <div>
        <section>
  {/* Container */}
  <div className="py-10 md:py-14 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10 dark:bg-gray-900 dark:text-white">
    {/* Component */}
    <div className="mx-auto flex-col flex max-w-3xl items-center text-center">
      <h4 className="font-bold pb-5 text-2xl md:text-4xl">
        We provide the best customer experiences
      </h4>
    </div>
    <div className="grid w-full max-[991px]:grid-flow-row max-[991px]:place-content-center max-[479px]:justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-0">
      <div className="grid-cols-1 grid justify-items-center gap-6 border-r-[1px] bg-white px-10 py-4 max-[767px]:p-8 max-[767px]:[border-right-style:none] rounded-md">
        <MdProductionQuantityLimits className="inline-block h-16"/>
        <p className="text-xl font-semibold">Original Products</p>
        <p className="text-center text-[#636262] text-sm sm:text-sm">
        We ensure money-back guarantee if the product is counterfeit
        </p>
      </div>
      <div className="grid-cols-1 grid justify-items-center gap-6 border-r-[1px] bg-white px-10 py-4 max-[767px]:p-8 max-[767px]:[border-right-style:none] rounded-md">
        <MdSentimentSatisfiedAlt className="inline-block h-16"/>
        <p className="text-xl font-semibold">Satisfaction Guarantee</p>
        <p className="text-center text-[#636262] text-sm sm:text-sm">
        We ensure money-back guarantee if the product is counterfeit
        </p>
      </div>
      <div className="grid-cols-1 grid justify-items-center gap-6 border-r-[1px] bg-white px-10 py-4 max-[767px]:p-8 max-[767px]:[border-right-style:none] rounded-md">
      <FaPlaneArrival className="inline-block h-16"/>
        <p className="text-xl font-semibold">New Arrival Everyday</p>
        <p className="text-center text-[#636262] text-sm sm:text-sm">
        We ensure money-back guarantee if the product is counterfeit
        </p>
      </div>
      <div className="grid-cols-1 grid justify-items-center gap-6 bg-white px-10 py-4 max-[767px]:p-8 max-[767px]:[border-right-style:none] rounded-md">
      <FaShippingFast/>
        <p className="text-xl font-semibold">Fast & Free Shipping</p>
        <p className="text-center text-[#636262] text-sm sm:text-sm">
        We ensure money-back guarantee if the product is counterfeit
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Featured