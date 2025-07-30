import React from 'react'
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
            <Spline scene="https://prod.spline.design/N5X401CJ5nHmaHuW/scene.splinecode" />
        </div>

        <div className="z-10 absolute flex flex-col gap-2 text-center text-white">
            <h1 className="text-6xl font-bold p-3">Arjun Magar</h1>
            <p className="text-4xl">Web Developer</p>
        </div>
    </div>
  )
}

export default Hero