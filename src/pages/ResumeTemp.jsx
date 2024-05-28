
import Temp1 from "../components/ResumeTemp/Temp1";
import Temp2 from "../components/ResumeTemp/Temp2";
import Temp3 from "../components/ResumeTemp/Temp3";
import Temp4 from "../components/ResumeTemp/Temp4";
import { useEffect, useState, } from "react"
import { useFirebase } from "../context/firebase"
import { useParams} from "react-router-dom"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from "react";
import Button from "react-bootstrap/esm/Button";
//import HomeComponent from './HomeComponent';



const ResumeTemp = () => {
  const contentRef = useRef();
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
  const input = contentRef.current;
  // Specify the id of the element you want to convert to PDF
  html2canvas(input,{scale:2}).then(canvas => {
    const imgData = canvas.toDataURL('image/png');

    // Create a new PDF document using jsPDF:
    const pdf = new jsPDF('portrait', 'mm', 'a4');
    const imgWidth = 210; // A4 width in mm
    const pageHeight=350;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save('resume.pdf');
  });
};
 


  switch(param1){
    case':temp1' :
    return <div className="">
             <div ref={contentRef} style={{ width: '210mm', minHeight: '290mm', padding:0, backgroundColor: 'white' }}>
                 <Temp1 data={data}/>
               </div>
               
               <Button className="mb-4 ml-80 "  onClick={handleDownloadPDF}>Download PDF</Button>  
           </div>

      
    
    
    case ':temp2':
      return <div className="mt-5">
    <div ref={contentRef} style={{ width: '210mm', minHeight: '297mm', padding:"5mm", backgroundColor: 'white' }}>
         <Temp2 data={data}/>
       </div>
       <Button className="mb-4 ml-80"  onClick={handleDownloadPDF}>Download PDF</Button>  
       </div>

    case ':temp3':
    return <div className="mt-5">
    <div ref={contentRef} style={{ width: '210mm', minHeight: '295mm', backgroundColor: 'white' }}>
      <Temp3 data={data}/>
        </div>
        <Button className="mb-4 ml-80"  onClick={handleDownloadPDF}>Download PDF</Button>  
      </div>

    case ':temp4':
     return <div className="mt-5">
    <div ref={contentRef} style={{ width: '210mm', minHeight: '295mm', backgroundColor: 'white' }}>
  <Temp4 data={data}/>
     </div>
     <div className="flex justify-center items-center">
     <Button className=" m-5 font-semibold text-2xl "  onClick={handleDownloadPDF}>Download PDF</Button>  
     </div>
     
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