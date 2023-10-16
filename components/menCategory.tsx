"use client"
import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const MenCategory = () => {
    const list = [
        {
          title: "KIDS_socks",
          img: "https://images.pexels.com/photos/1620788/pexels-photo-1620788.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: "$5.50",
        },
        {
          title: "Kids_short",
          img: "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: "$3.00",
        },
        {
          title: "Kid_shoes",
          img: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: "$10.00",
        },
        {
          title: "Kids_clothes",
          img: "https://images.pexels.com/photos/6567714/pexels-photo-6567714.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: "$5.30",
        },
       
      ];
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-18 pt-[60px] pb-10 mx-auto justify-center">
    <div className="flex flex-wrap  justify-between  mb-8">
    <h3 className="ml-10 text-3xl font-bold leading-none md:text-3xl dark:text-white">
      Men Category
    </h3>
    </div>
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 pt-1 px-6 justify-center gap-12">
    {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0 ">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[240px] hover:scale-[1.1] transition-transform"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-center">
            
            <p className="text-default-500"><b>{item.title}</b></p>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
  </section>
  )
}

export default MenCategory