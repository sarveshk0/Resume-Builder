import React from 'react'
import "./Temp4.css"
const Temp4 = ({data}) => {
    console.log("data",data);
  return (
  
    <section className="main-section">
        <div className="left-part">
            {/* <div className="photo-container">
                <img src="profile.jpg" alt=""/>
            </div> */}
            <div className="contact-container">
                <h2 className="title">Contact Me</h2>
                <div className="contact-list">
                    <div className="icon-container">
                        <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="contact-text">
                        <p>{data.areaname},</p>
                    </div>
                </div>
                <div className="contact-list">
                    <div className="icon-container">
                        <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="contact-text">
                        <p>{data.email}</p>
                    </div>
                </div>
                <div className="contact-list">
                    <div className="icon-container">
                        <i className="bi bi-laptop"></i>
                    </div>
                    <div className="contact-text">
                        <p>www.reallygreatsite.com</p>
                    </div>
                </div>
                <div className="contact-list">
                    <div className="icon-container">
                        <i className="bi bi-linkedin"></i>
                    </div>
                    <div className="contact-text">
                        <p>@reallygreatsite</p>
                    </div>
                </div>
            </div>

            <div className="education-container">
                <h2 className="title">Education</h2>
                <div className="course">
                    <h2 className="education-title">Course Studied</h2>
                    <h5 className="college-name">University/College Details</h5>
                    <p className="education-date">2006 - 2008</p>
                </div>
                <div className="course">
                    <h2 className="education-title">Course Studied</h2>
                    <h5 className="college-name">University/College Details</h5>
                    <p className="education-date">2006 - 2008</p>
                </div>
                <div className="course">
                    <h2 className="education-title">Course Studied</h2>
                    <h5 className="college-name">University/College Details</h5>
                    <p className="education-date">2006 - 2008</p>
                </div>
            </div>

            <div className="skills-container">
                <h2 className="title">Skills</h2>
                <div className="skill">
                    <div className="left-skill">
                        <p>Skill Name 01</p>
                    </div>
                    {/* <div className="right-skill">
                        <div className="outer-layer">
                            <div className="inner-layer" style={{width:"60vw"}}></div>
                        </div>
                    </div> */}
                </div>
         </div>
               
            </div>
        


        <div className="right-part">
            <div className="banner">
                <h1 className="firstname">Mariana</h1>
                <h1 className="lastname">Anderson</h1>
                <p className="position">Marketing Manager</p>
            </div>

            <div className="work-container ">
                <h2 className="title text-left">work experience</h2>
                <div className="work">
                    <div className="job-date">
                        <p className="job">Job position here</p>
                        <p className="date">2019 - 2022</p>
                    </div>
                    <h2 className="company-name">Company Name l Location</h2>
                    <p className="work-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in
                        lorem
                        at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum
                        elit at
                        dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor,
                        hendrerit faucibus eros nibh ut nunc. Proin luctus urna i</p>
                </div>

                <div className="work">
                    <div className="job-date">
                        <p className="job">Job position here</p>
                        <p className="date">2019 - 2022</p>
                    </div>
                    <h2 className="company-name">Company Name l Location</h2>
                    <p className="work-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in
                        lorem
                        at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum
                        elit at
                        dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor,
                        hendrerit faucibus eros nibh ut nunc. Proin luctus urna i</p>
                </div>
                <div className="work">
                    <div className="job-date">
                        <p className="job">Job position here</p>
                        <p className="date">2019 - 2022</p>
                    </div>
                    <h2 className="company-name">Company Name l Location</h2>
                    <p className="work-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in
                        lorem
                        at laoreet. Donec hendrerit libero eget est tempor, quis tempus arcu elementum. In elementum
                        elit at
                        dui tristique feugiat. Mauris convallis, mi at mattis malesuada, neque nulla volutpat dolor,
                        hendrerit faucibus eros nibh ut nunc. Proin luctus urna i</p>
                </div>
            </div>

            <div className="references-container">
                <h2 className="title text-left">Certification</h2>
              
            </div>
        </div>
    </section>

  )
}

export default Temp4