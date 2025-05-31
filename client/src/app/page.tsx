import React from 'react'
import Navbar from './Components/Navbar'
import HomeHero from './Components/HomeHero'
import About from './Components/About'
import Experience from './Components/Experience'
import TechnicalSkills from './Components/Skills'

const page = () => {
  return (
    <>
    <Navbar/>
    <HomeHero/>
    <About/>
    <Experience/>
    <TechnicalSkills/>
    </>
  )
}

export default page