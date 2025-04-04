import React from 'react'
import banner from "./Assets/banner.png"

function HeroBanner() {
  return (
    <>
    <section className="image w-full">
        <img src={banner} alt="" className="image" />
    </section>
    </>
  )
}

export default HeroBanner