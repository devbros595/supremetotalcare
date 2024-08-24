import React from 'react'
import MyCarousel from '../Components/Slide/Slider'
import Popular from '../Components/Popular/Popular'
import NewCollections from '../Components/NewCollection/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter';

export default function Shop() {
  return (
    <div>
        <MyCarousel/>
        <Popular/>
        <NewCollections/>
        <NewsLetter/>
    </div>
    
  )
}
