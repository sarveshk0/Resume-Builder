
import Temp1 from "../components/ResumeTemp/Temp1";
import Temp2 from "../components/ResumeTemp/Temp2";
import Temp3 from "../components/ResumeTemp/Temp3";
import Temp4 from "../components/ResumeTemp/Temp4";
import { useEffect, useState } from "react"
import { useFirebase } from "../context/firebase"
import { useParams} from "react-router-dom"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Button from "react-bootstrap/esm/Button";
//import HomeComponent from './HomeComponent';



const ResumeTemp = () => {
  const firebase=useFirebase();
  const { param1, param2 } = useParams();

  
  console.log("param1",param1);
  console.log("param2",param2);
const[data,setData]=useState('');

 useEffect(()=>{
     firebase.getDocbyid(param2).then((data=>setData(data.data())));
 },[firebase,param2])
  

 console.log(data);


  const handleDownloadPDF = () => {
  const input = document.getElementById('pdf-content'); 
  // Specify the id of the element you want to convert to PDF
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png',1.0);

    // Create a new PDF document using jsPDF:
    const pdf = new jsPDF('p', 'mm', 'a4', true);
    pdf.addImage(imgData, 'pdf', 5, 5,240,297);
    pdf.save('downloaded-resume.pdf'); 
    // Specify the name of the downloaded PDF file
  });
};
 


  switch(param1){
    case':temp1' :
    return <div>
              <div id="pdf-content">
                 <Temp1 data={data}/>
               </div>
               
               <Button className="mb-4 ml-80 "  onClick={handleDownloadPDF}>Download PDF</Button>  
           </div>

      
    
    
    case ':temp2':
      return <div>
      <div id="pdf-content">
         <Temp2 data={data}/>
       </div>
       <Button className="mb-4 ml-80"  onClick={handleDownloadPDF}>Download PDF</Button>  
       </div>

    case ':temp3':
    return <div>
    <div id="pdf-content">
      <Temp3 data={data}/>
        </div>
        <Button className="mb-4 ml-80"  onClick={handleDownloadPDF}>Download PDF</Button>  
      </div>

    case ':temp4':
     return <div>
    <div id="pdf-content">
  <Temp4 data={data}/>
     </div>
     <Button className="mb-4 ml-80"  onClick={handleDownloadPDF}>Download PDF</Button>  
     </div>

  }


  // return (
  //     <div>
  //      <div id='pdf-content'>


  //      <Temp1 data={data}/>



  //         </div>
      
  //      {/* <button  onClick={handleDownloadPDF}>Download PDF</button>  */}
  //     </div>
  // )
  
  


}

export default ResumeTemp