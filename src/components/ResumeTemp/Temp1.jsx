
import "./temp1.css"


const Temp1 = ({data}) => {

  console.log("data",data);

  return (
   

<div className="container1">
  <div className="header">
    <div className="full-name">
      <span className="first-name">{data.name}</span> 
     {/* <span className="last-name">Doe</span> */}
    </div>
    <div className="contact-info">
      <span className="email">Email: </span>
      <span className="email-val">{data.email}</span>
      <span className="separator"></span>
      <span className="phone">Phone: </span>
      <span className="phone-val">{data.contactNum}</span>
    </div>
    
    <div className="about">
      <span className="position">Summary</span>
      <span className="desc">
        {data.summary}
        </span>
    </div>
  </div>
   <div className="details">
    <div className="section">
      <div className="section__title">Experience</div>
      <div className="section__list">
        <div className="section__list-item">
          <div className="left">
            <div className="name">{data.companyName}</div>
            <div className="addr">{data.desiginition}</div>
            <div className="duration">{data.duration}</div>
          </div>
          {/* <div className="right">
            <div className="name">Fr developer</div>
            <div className="desc">did This and that</div>
          </div> */}
        </div>
                <div className="section__list-item">
          {/* <div className="left">
            <div className="name">{data.companyName}</div>
            <div className="addr">{data.desiginition}</div>
            <div className="duration">{data.duration}</div>
          </div> */}
          {/* <div className="right">
            <div className="name">Fr developer</div>
            <div className="desc">did This and that</div>
          </div> */}
        </div>

      </div>
    </div>
    <div className="section">
      <div className="section__title">Education</div>
      <div className="section__list">
        <div className="section__list-item">
          <div className="left">
            <div className="name">{data.collageName}</div>
            <div className="addr">{data.collageDegree}</div>
            <div className="duration">{data.collagePassingYear}</div>
          </div>
          {/* <div className="right">
            <div className="name">Fr developer</div>
            <div className="desc">did This and that</div>
          </div> */}
        </div>
        <div className="section__list-item">
          <div className="left">
            <div className="name">{data.schoolName}</div>
            <div className="addr">{data.schoolDegree}</div>
            <div className="duration">{data.schoolPassingYear}</div>
          </div>
          {/* <div className="right">
            <div className="name">Fr developer</div>
            <div className="desc">did This and that</div>
          </div> */}
        </div>

      </div>
      
  </div>
     <div className="section">
      <div className="section__title">Projects</div> 
       <div className="section__list">
         <div className="section__list-item">
           <div className="name">{data.projectName}</div>
           <div className="text">{data.projectDesc}</div>
         </div>
         
         {/* <div className="section__list-item">
                    <div className="name">{data.projectName}</div>
           <div className="text"><a>{data.projectDesc}</a>
           </div>
         </div> */}
       </div>
    </div>
     <div className="section">
       <div className="section__title">Skills</div>
       <div className="skills">
         <div className="skills__item">
           <div className="left"><div className="name">
             {data.skill}
             </div></div>
           {/* <div className="right">
                          <input  id="ck1" type="checkbox" />

             <label htmlFor="ck1"></label>
                          <input id="ck2" type="checkbox" />

              <label htmlFor="ck2"></label>
                         <input id="ck3" type="checkbox" />

              <label htmlFor="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label htmlFor="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label htmlFor="ck5"></label>

           </div> */}
         </div>
         
       </div>
       <div className="skills__item">
           <div className="left"><div className="name">
             {}</div></div>
           {/* <div className="right">
                          <input  id="ck1" type="checkbox" />

             <label htmlFor="ck1"></label>
                          <input id="ck2" type="checkbox" />

              <label htmlFor="ck2"></label>
                         <input id="ck3" type="checkbox" />

              <label htmlFor="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label htmlFor="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label htmlFor="ck5"></label>

           </div> */}
         </div>
         
       </div>
     <div className="section">
     <div className="section__title">
       Interests
       </div>
       <div className="section__list">
         <div className="section__list-item">
                  {data.interest}
          </div>
       </div>
     </div>
     </div>
  </div>
  

  )
}

export default Temp1