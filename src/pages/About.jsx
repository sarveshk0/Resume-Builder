import React from 'react'
import Herosection from '../components/HomePageComponent/Herosection'
import Features from '../components/HomePageComponent/Features.jsx'
const About = () => {
  return (
    <div>
            <Features/>
      
     <img src="https://cdn-blog.novoresume.com/articles/cv-vs-resume-what-is-the-difference/bg.png" alt="" /> 
     <Herosection/>
        <img src={require("../home.png")} alt="" />
    
    </div>
  )
}

export default About