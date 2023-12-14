import React from 'react'
import Carousel from '../Components/Carousel'
import Popular from '../Components/Popular'
import NewCollection from '../Components/NewCollection'
import NewsLetter from '../Components/NewsLetter'

function Shop() {
  return (
    <div>
      <Carousel />
      <Popular/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop