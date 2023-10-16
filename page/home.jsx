"use client"
import Cards from "@/components/card";
import Banner from "@/components/banner";
import FeatureProduct from "@/components/featureProduct";
import Category from "@/components/category";
import TopAd from "@/components/topAd";
// import Brand  from "@/components/brand";
import Productad  from "@/components/productad";
import Product from "@/components/product";
import KidCategory from "@/components/kidCategory";
import KidSale from "@/components/kidsale";
import WomenCategory from "@/components/womenCategory";
import WomenSale from "@/components/womensale";
import Featured from "@/components/featured";
import MenCategory from "@/components/menCategory";
import MenSale from "@/components/mensale";
import Footer from "@/components/footer";
import Newletter from "@/components/newletter";
const Home = () => {
  return (
    <>
    <Banner/>
    <FeatureProduct />
    <Category />
    <TopAd />
    {/* <Brand /> */}
		<Productad />
    <Product />
    <KidCategory />
    <KidSale />
    <WomenCategory />
    <WomenSale />
    <Featured />
    <MenCategory/>
    <MenSale />
    <Newletter />
    <Footer />
    </>
  )
}

export default Home