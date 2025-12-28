import React from 'react'
import Team from '../../molecules/AboutUs/Team'
import OurValues from '../../molecules/AboutUs/OurValues'
import { LayoutTextFlipHeroSection } from '../../molecules/AboutUs/HeroSection'
import MissionVision from '../../molecules/AboutUs/mission'
import Section from '../../atom/Section'

function AboutUsTemplete (){
  return (
    <>
    <LayoutTextFlipHeroSection />
    {/* <div className="lg:[5.25rem] overflow-hidden pl-[1.5rem]"> */}
     {/* <Section crosses className="!px-0 !py-10"> */}
    <MissionVision />
    {/* </Section> */}
    {/* </div> */}
    <div className="lg:[5.25rem] overflow-hidden pl-[1.5rem]">
    <Section crosses className="!px-0 !py-10">
    <Team/>
    </Section>
    </div>
    <OurValues />
    </>
  )
}

export default AboutUsTemplete