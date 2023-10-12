import React from 'react'
import Cards from "@/components/card";
import Banner from "@/components/banner";
import FeatureProduct from "@/components/featureProduct";
import Category from "@/components/category";
import TopAd from "@/components/topAd";
const Home = () => {
  return (
    <>
    <Banner/>
    <FeatureProduct />
    <Category />
    <TopAd />
		<Cards />
		
    </>
  )
}

export default Home