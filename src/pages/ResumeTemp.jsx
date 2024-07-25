
import Temp1 from "../components/ResumeTemp/Temp1";
import Temp2 from "../components/ResumeTemp/Temp2";
// import Temp3 from "../components/ResumeTemp/Temp3";
// import Temp4 from "../components/ResumeTemp/Temp4";
import { useEffect, useState, } from "react"
import { useFirebase } from "../context/firebase"
import { useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";


//import HomeComponent from './HomeComponent';
import  { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';




const ResumeTemp = () => {
  const navigate=useNavigate();
  // const contentRef = useRef();
  const firebase=useFirebase();
  const { param1, param2 } = useParams();


  
  console.log("param1",param1);
  console.log("param2",param2);
const[data,setData]=useState('');

 useEffect(()=>{
     firebase.getDocbyid(param2).then((data=>setData(data.data())));
 },[firebase,param2])
  

 console.log(data);

 const handleEditpdf =()=>{
  
  navigate(`/dashboard/forms/resumetemp/${param1}/${param2}/editpdf`)
 }


 


 

  switch(param1){
    
  
    case':temp1' :
    return (   
        <div>
                   <PDFViewer className="w-full h-screen">
                   <Temp1 data={data}/>
                   </PDFViewer>
                   
                   <button className="bg-pink-300 text-white rounded-lg px-4 py-2  mt-4 self-center">
                   <PDFDownloadLink 
                   
                   document={ <Temp1 data={data}/>
}
                   fileName="resume.pdf"
                   >
                 {({ blob, url, loading, error }) =>
                  loading ? 'Loading document...' : 'Download Resume'
                }
                 </PDFDownloadLink>
                   </button>

          </div>
    )
case':temp2' :
return (   
    <div>
               <PDFViewer className="w-full h-screen">
               <Temp2 data={data}/>
               </PDFViewer>
               
               <button className="bg-pink-300 text-white rounded-lg px-4 py-2  mt-4 self-center">
               <PDFDownloadLink 
               
               document={ <Temp2 data={data}/>
}
               fileName="resume.pdf"
               >
             {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download Resume'
            }
             </PDFDownloadLink>
               </button>

      </div>
           )

      
    
    
  //   case ':temp2':
  //     return <div className="mt-5">
  //   <div ref={contentRef} style={{ width: '210mm', minHeight: '297mm', padding:"5mm", backgroundColor: 'white' }}>
  //        <Temp2 data={data}/>
  //      </div>
  //      <Button className="mb-4 ml-80"  onClick={handleDownloadPDF}>Download PDF</Button>  
  //      </div>

  //   case ':temp3':
  //   return <div className="mt-5">
  //   <div ref={contentRef} style={{ width: '210mm', minHeight: '295mm', backgroundColor: 'white' }}>
  //     <Temp3 data={data}/>
  //       </div>
  //       <Button className="mb-4 ml-80"  onClick={handleDownloadPDF}>Download PDF</Button>  
  //     </div>

  //   case ':temp4':
  //    return <div className="mt-5">
  //   <div ref={contentRef} style={{ width: '210mm', minHeight: '295mm', backgroundColor: 'white' }}>
  // <Temp4 data={data}/>
  //    </div>
  //    <div className="flex justify-center items-center">
  //    <Button className=" m-5 font-semibold text-2xl "  onClick={handleDownloadPDF}>Download PDF</Button>  
  //    </div>
     
  //    </div> 
  default: 
  }


  

}

export default ResumeTemp;