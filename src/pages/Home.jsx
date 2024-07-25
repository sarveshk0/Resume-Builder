
// import { useFirebase } from "../context/firebase"

// import CardGroup from "react-bootstrap/esm/CardGroup";
import Herosection from "../components/HomePageComponent/Herosection"
import Features from "../components/HomePageComponent/Features";
import Login from "../components/Login";


// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// //import HomeComponent from './HomeComponent';


const Home = () => {
    // const firebase=useFirebase();
    
  

//  useEffect(()=>{
//   if(firebase.isloggedin) 
//     firebase.addListBook().then((books)=>setBooks(books.docs))
 
//  },[firebase])


//  const handleDownloadPDF = () => {
//   const input = document.getElementById('pdf-content'); 
//   // Specify the id of the element you want to convert to PDF
//   html2canvas(input).then((canvas) => {
//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF();
//     pdf.addImage(imgData, 'PNG', 0, 0);
//     pdf.save('downloaded-file.pdf'); 
//     // Specify the name of the downloaded PDF file
//   });
// };






 
  return (
    <div className=" bg-blue-950 w-full   flex flex-col md:flex-row items-center justify-between "  >
     <Herosection/>
      <Login/>



</div>
  )
      }

export default Home