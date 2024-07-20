import React from 'react'
import MyCarousel from '../Components/Slide/Slider'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollection/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import ShopByCategory from '../Components/ShopByCategory/ShopByCategory'

export default function Shop() {
  return (
    <div>
        <MyCarousel/>
        <ShopByCategory/>
        <Popular/>
        {/* <Offers/> */}
        <NewCollections/>
        <NewsLetter/>
    </div>
    
  )
}
