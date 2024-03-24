import React from 'react'
import "./styles.scss"
const Temp2 = ({data}) => {
  console.log("data",data);
  return (
    <div className=''>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
<div className="resume-wrapper ml-32 w-[900px]   ">
	<section className="profile section-padding text-black">
		<div className="container ">
			<div className="picture-resume-wrapper">
        {/* <div className="picture-resume">
        <span><img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" alt="" /></span>
        <svg version="1.1" viewBox="0 0 350 350">
  
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
    </filter>
  </defs>
  
  
<g filter="url(#goo)" >  
  
  <circle id="main_circle" className="st0" cx="171.5" cy="175.6" r="130"/>
  
  <circle id="circle" className="bubble0 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" className="bubble1 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" className="bubble2 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" className="bubble3 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" className="bubble4 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" className="bubble5 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" className="bubble6 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" className="bubble7 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" className="bubble8 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" className="bubble9 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" className="bubble10 st1" cx="171.5" cy="175.6" r="122.7"/>

</g>  
</svg>
      </div> */}
         <div className="clearfix"></div>
 </div>
      <div className="name-wrapper">
        <h1>{data.name} </h1>
      </div>
      <div className="clearfix"></div>
      <div className="contact-info clearfix">
      	<ul className="list-titles">
      		<li>Contact </li>
      		<li>Email</li>
          <li>address</li>
      		

      	</ul>
        <ul className="list-content ">
        	<li>{data.contactNum}</li>
        	<li>{data.email}</li> 
           <li>{data.areaName},{data.city}</li>
           <li>{data.pincode},{data.stateName}</li>
        </ul>
      </div>
      <div className="contact-presentation"> 
      	<p><span className="bold text-black font-semibold underline">About Me:</span> {data.summary} </p>
      </div>
      <div className="contact-social clearfix">
      	<ul className="list-titles">
      		<li>Twitter </li>
      		<li>linkedin </li>
      	
      	</ul>
        <ul className="list-content"> 
      		<li><a href="">{data.twitter}</a></li>
      		<li><a href="">{data.linkedin}</a></li> 
      		
      	</ul>
      </div>
		</div>
	</section>
 
  <section className="experience section-padding  ">
  	<div className="container">
    <h3 className="experience-title ">Academics</h3>
    <div className="experience-title pr-64 ">{data.schoolDegree}, {data.schoolName}, {data.schoolPassingYear}</div>

    <h3 className="experience-title">collage/Technical</h3>
    <div className="experience-title pr-60">{data.collageDegree}, {data.collageName}, {data.collagePassingYear}</div>
        
  	
    <div className='job-wrapper clearfix mt-4 text-gray-200'>
        <h3 className="experience-title ">Experience</h3><br />
           <p className=''>Company-{data.companyName}</p>
           <p>Desigintion:{data.desiginition}</p>
           <p>Duration:{data.duration}</p>
        </div>
      
      
        
       
        
      
      
        
        <div className='job-wrapper clearfix text-gray-200'>
        <h3 className="experience-title ">Project</h3><br />
           <p className=''>{data.projectDesc}</p>
           <p>Project Link: <a href="">{data.projectUrl}</a></p>
        </div>
        
        
      </div>
      
      <div className="section-wrapper clearfix">
      	<h3 className="section-title">Skills</h3>  
        	<ul>
        		<li className="skill  text-gray-200">{data.skill}</li>
        		{/* <li className="skill-">{data.skill[2]}/ {data.skill[3]} / {data.skill[4]}/{data.skill[4]}</li> */}
        		
            
        	</ul>
        
      </div>
      
      
      <div className="section-wrapper clearfix">
        <h3 className="section-title">Interest</h3>  
        <p className=' text-gray-200'>{data.interest}</p>
      </div>

      <div className="section-wrapper clearfix text-gray-200">
        <h3 className="section-title">Certification</h3>  
        <p className=' text-gray-200'>{data.certificate}</p>
      </div>
       
       
      
  	
  </section>
  
  <div className="clearfix"></div>
</div>
    </div>
  )
}

export default Temp2
  
