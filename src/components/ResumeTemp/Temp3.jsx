import "./temp3.css"

const Temp3 = ({data}) => {
  console.log("data",data);
  return (

    <div className="container">
      <div className="header">
        {/* <div className="img-area">
            <img src="https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        </div> */}
        <h1>Resume</h1>
        <h3>{data.summary}</h3>

      </div>

      <div className="main">
        <div className="left">
          <h2>Personal Information</h2>
          <p><strong>Name:</strong> {data.name}</p>
        
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.contactNum}</p>
          <h2>Skills</h2>
          <ul>
            <li>{data.skill[0]}</li>
            <li>{data.skill[1]}</li>
            <li>{data.skill[2]}</li>
            <li>{data.skill[3]}</li>
            
          </ul>
          <h2>Education</h2>
          <h3>{data.schoolDegree}</h3>
          <p>{data.schoolName}, {data.schoolPassingYear}</p> 
          <h3>{data.collageDegree}</h3>
          <p>{data.collageName}, {data.collagePassingYear}</p>
        </div>
        
        <div className="right">
          <h2>Work Experience</h2>
          <h3>{data.companyName}</h3>
          <p><strong>Position:</strong> {data.desiginition}</p>
          <p><strong>Duration:</strong> {data.duration}</p>
          {/* <ul>
            <li>Developed and maintained web applications using React, Node.js, and SQL</li>
            <li>Implemented responsive design using CSS flexbox and media queries</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software products</li>
          </ul>  */}
          <h3>Projects</h3>
          <p>{data.projectDesc}</p>
          <p>{data.projectUrl}</p>
          {/* <ul>
            <li>Created and maintained websites using HTML, CSS, and JavaScript</li>
            <li>Optimized website performance and user experience using best practices</li>
            <li>Worked with clients to understand their needs and deliver custom solutions</li>
          </ul> */}

         <h2>Hobbies/Interests</h2>
         <p>{data.interests}</p>
         
         <h2>Certifications</h2>
         <p>{data.certifications}</p>

        </div>
      </div>
    </div> 




   

  )
}

export default Temp3