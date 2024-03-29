
import {  useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useFirebase } from '../context/firebase';
import{  toast} from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom';










const Forms = () => {
  const firebase=useFirebase();
  const navigate=useNavigate();
  const param1=useParams()
  const cardDetailID=param1.id
  console.log("param",cardDetailID);
  

 const[id,setid]=useState('')



 const[name,setName]=useState("");
    const[email,setEmail] =useState('')
    const [contactNum,setcontactNum]=useState('');
    const[areaName,setareaName]=useState('')
    const[pincode,setPincode]=useState('')
    const[city,setCity]=useState('')
    const[stateName,setStateName]=useState("UP")
    const [summary,setSummary]=useState("Recent Computer Science graduate (3.8 GPA) seeking to use my backend development experience in an entry-level position. Possess 4 months of internship experience building and testing applications for Android, iOS, and Windows. Skilled with C, C++, Java, JavaScript, Python, and Swift.")
    
    const[skill,setSkill]=useState([])
   const[certificate,setCertificate]=useState("")
   const[schoolName,setSchoolName]=useState("")
   const[schoolDegree,setschoolDegree]=useState("")
   const[schoolPassingYear,setschoolPassingYear]=useState("")
   const[collageName,setcollageName]=useState("")
   const[collageDegree,setcollageDegree]=useState("")
   const[collagePassingYear,setcollagePassingYear]=useState("")
   const[interest,setInterest]=useState("")
   const[companyName,setcompanyName]=useState("")
   const[desiginition,setdesiginition]=useState("")
   const[duration,setduration]=useState("")
   const[projectName,setProjectName]=useState("")
   const[projectDesc,setprojectDesc]=useState("")
   const[projectUrl,setprojectUrl]=useState("");

   
   

  

 const handleSubmitData= async (e)=>{
  e.preventDefault();
  const res= await firebase.addResumeData(name,email,contactNum,areaName,pincode,city,stateName,summary,skill,certificate,schoolName,schoolDegree,schoolPassingYear,collageName,
    collageDegree,collagePassingYear,interest,companyName,desiginition,duration,projectName,projectDesc,projectUrl);

  //  console.log("id",res.id);
    if(res){
      setid(res.id);
      toast.success("SuccessFully Data saved")
      navigate(`/dashboard/forms/resumetemp/${cardDetailID}/${res.id}`)
    } 
   }
 






  return (
    <div className=''>
  <div className='min-h-screen w-full flex items-center justify-center p-4'>
  <Form onSubmit={handleSubmitData} >
        <Form.Group  className="mb-3" >
      <Form.Label>Summary</Form.Label>
      <Form.Control as="textarea" onChange={(e)=>setSummary(e.target.value)} value={summary} />
        </Form.Group>
       
     
     
   <div className='flex gap-4 border p-3 '>
   <Form.Group  className="mb-3" controlId="formGroupFullName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" required onChange={(e)=>setName(e.target.value)} value={name}  placeholder="Enter Your Name" />
    </Form.Group>
  
   
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="text"required  onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="enter your email" />
    </Form.Group>
   <Form.Group className="mb-3" controlId="formGroupcontacNum">
      <Form.Label>Contact Number</Form.Label>
      <Form.Control type="number" required  onChange={(e)=>setcontactNum(e.target.value)} value={contactNum} />
    </Form.Group>
   
    </div>

    <div>
    <h4 className='mt-3'>Address</h4>
    <div className='flex gap-3 border p-3'>
    <Form.Group className="mb-3" >
      <Form.Label>H.no/Area/Locality</Form.Label>
      <Form.Control type="text" required  onChange={(e)=>setareaName(e.target.value)} value={areaName} />
      </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>city</Form.Label>
      <Form.Control type="text"required  onChange={(e)=>setCity(e.target.value)} value={city} />
    </Form.Group>


    <Form.Group className="mb-3">
      <Form.Label>Pincode/zip-code</Form.Label>
      <Form.Control type="number" required  onChange={(e)=>setPincode(e.target.value)} value={pincode} />
    </Form.Group>

    <Form.Group className="mb-3" >
      <Form.Label>State Name</Form.Label>
      <Form.Control type="text" required  onChange={(e)=>setStateName(e.target.value)} value={stateName} />
    </Form.Group>
    </div>
  </div>




    <div className='mt-3'>
       <h3>Education</h3>
       <h5>Academics</h5>
       <div className='flex gap-3 border p-3'>
       <Form.Group className="mb-3" >
      <Form.Label>SchoolName</Form.Label>
      <Form.Control type="text" onChange={(e)=>setSchoolName(e.target.value)} value={schoolName}  />
    </Form.Group> 

    <Form.Group className="mb-3" >
      <Form.Label>Schooldegree</Form.Label>
      <Form.Control type="text" onChange={(e)=>setschoolDegree(e.target.value)} value={schoolDegree}  />
    </Form.Group> 

    <Form.Group className="mb-3" >
      <Form.Label>Passing Year</Form.Label>
      <Form.Control type="text" onChange={(e)=>setschoolPassingYear(e.target.value)} value={schoolPassingYear}  />
    </Form.Group> 
       </div>
      
   

   <h5 className='mt-3'>Tehnical/Collage </h5>
   <div className='flex border p-3 gap-3'>
   <Form.Group className="mb-3" >
      <Form.Label>Collage Name</Form.Label>
      <Form.Control type="text" onChange={(e)=>setcollageName(e.target.value)} value={collageName}  />
    </Form.Group> 

    <Form.Group className="mb-3" >
      <Form.Label>Degree</Form.Label>
      <Form.Control type="text" onChange={(e)=>setcollageDegree(e.target.value)} value={collageDegree}  />
    </Form.Group> 

    <Form.Group className="mb-3" >
      <Form.Label>Passing Year</Form.Label>
      <Form.Control type="text" onChange={(e)=>setcollagePassingYear(e.target.value)} value={collagePassingYear}  />
    </Form.Group> 
   </div>
   

    </div>

    <div className='mt-4'>
      <h4 >Experience</h4>
      <div className='p-3 gap-3 flex border'>
      <Form.Group className="mb-3" >
      <Form.Label>Company Name</Form.Label>
      <Form.Control type="text" onChange={(e)=>setcompanyName(e.target.value)} value={companyName}  />
    </Form.Group> 

    <Form.Group className="mb-3" >
      <Form.Label>Desigination</Form.Label>
      <Form.Control type="text" onChange={(e)=>setdesiginition(e.target.value)} value={desiginition}  />
    </Form.Group> 

    <Form.Group className="mb-3" >
      <Form.Label>Duration</Form.Label>
      <Form.Control type="text" onChange={(e)=>setduration(e.target.value)} value={duration}  />
    </Form.Group> 

      </div>
     

    </div>


    <div className='mt-4'>
      <h4 >Project</h4>
      <div className='p-3 border flex gap-3'>
      <Form.Group className="mb-3" >
      <Form.Label>Project Name</Form.Label>
      <Form.Control type="text" onChange={(e)=>setProjectName(e.target.value)} value={projectName}  />
    </Form.Group> 

    <Form.Group className="mb-3" >
      <Form.Label>Project Summary</Form.Label>
      <Form.Control type="text" onChange={(e)=>setprojectDesc(e.target.value)} value={projectDesc}  />
    </Form.Group> 

    <Form.Group className="mb-3" >
      <Form.Label>Project Link</Form.Label>
      <Form.Control type="url" onChange={(e)=>setprojectUrl(e.target.value)} value={projectUrl}  />
    </Form.Group> 
      </div>
   

    </div>


    <Form.Group className="mb-3" >
      <Form.Label>Skill</Form.Label>
      <Form.Control as="textarea" onChange={(e)=>setSkill(e.target.value)} value={skill} placeholder='HTML,CSS,JAVAscript,React' />
    </Form.Group> 


    <Form.Group className="mb-3" >
      <Form.Label>Interests/Hobbies</Form.Label>
      <Form.Control type="text" onChange={(e)=>setInterest(e.target.value)} value={interest}  />
    </Form.Group> 
 
   

    <Form.Group className="mb-3" >
      <Form.Label>Certification</Form.Label>
      <Form.Control as="textarea" onChange={(e)=>setCertificate(e.target.value)} value={certificate} placeholder='Certificatiion done as React Devloper from xyz companay' />
    </Form.Group> 


<div>
 
    <Button  variant="primary" type="submit">
      Save
    </Button>
  </div>

   

  </Form>
  </div>
</div>


  )
}

export default Forms