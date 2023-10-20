"use client"
import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const Category = () => {
    const list = [
        {
          title: "KIDS",
          img: "https://images.pexels.com/photos/1620788/pexels-photo-1620788.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: "$5.50",
        },
        {
          title: "WOMAN",
          img: "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: "$3.00",
        },
        {
          title: "MAN",
          img: "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: "$10.00",
        },
        {
          title: "lOCAL_WEAR",
          img: "https://images.pexels.com/photos/6567714/pexels-photo-6567714.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: "$5.30",
        },
        {
          title: "HAIR",
          img: "https://images.pexels.com/photos/1661837/pexels-photo-1661837.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: "$15.70",
        },
        {
          title: "SHOES",
          img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: "$8.00",
        },
        {
          title: "Wrist-watch",
          img: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: "$7.50",
        },
        {
          title: "Nails",
          img: "https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg?auto=compress&cs=tinysrgb&w=600",
          price: "$12.20",
        },
      ];
  return (
    <section className="text-gray-600 body-font bg-red ">
    <div className="container  pt-[20px] pb-10  justify-center mr-22 ">
    <div className="flex flex-wrap  justify-between ml-10 py-3 bg-red1 ml-12 mr-12">
    <h3 className="ml-10 text-3xl font-bold leading-none md:text-3xl">
      Category
    </h3>
    </div>
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-4 py-4 px-6 justify-center gap-12 ml-12 mr-12 bg-white">
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

export default Category