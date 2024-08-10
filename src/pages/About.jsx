import React from 'react'
import Herosection from '../components/HomePageComponent/Herosection'
import Features from '../components/HomePageComponent/Features.jsx'

const About = () => {
  return (
    <div>
      <section>
        <Features />
      </section>

      <section>
        <img 
          src="https://cdn-blog.novoresume.com/articles/cv-vs-resume-what-is-the-difference/bg.png" 
          alt="Background" 
          style={{ width: '100%', height: 'auto' }} 
        />
      </section>

      <section>
        <Herosection />
      </section>

      <section>
        <img 
          src={require("../home.png")} 
          alt="Home" 
          style={{ width: '100%', height: 'auto' }} 
        />
      </section>
    </div>
  )
}

export default About
