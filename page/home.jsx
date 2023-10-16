"use client"
import Cards from "@/components/card";
import Banner from "@/components/banner";
import FeatureProduct from "@/components/featureProduct";
import Category from "@/components/category";
import TopAd from "@/components/topAd";
// import Brand  from "@/components/brand";
import Productad  from "@/components/productad";
const Home = () => {
  return (
    <>
    <Banner/>
    <FeatureProduct />
    <Category />
    <TopAd />
    {/* <Brand /> */}
		<Productad />
    </>
  )
}

export default Home