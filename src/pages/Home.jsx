
import { useFirebase } from "../context/firebase"

// import CardGroup from "react-bootstrap/esm/CardGroup";
import Herosection from "../components/HomePageComponent/Herosection"
import Features from "../components/HomePageComponent/Features";
import Team from "./Team";


// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// //import HomeComponent from './HomeComponent';


const Home = () => {
    const firebase=useFirebase();
    
  

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
    <div  >

    <Herosection/>
    <img src="https://cdn-blog.novoresume.com/articles/cv-vs-resume-what-is-the-difference/bg.png" alt="" />
    <Features/>
    <img src={require("../home.png")} alt="" />
    <Team/>






















        {/* <CardGroup >
      
        { 
            books.map((book)=>{
           return  <BookCard link={`/book/view/${book.id}`} key={book.id} id={book.id}  {...book.data()}/>
            })
        }


        </CardGroup> */}

        {/* <button onClick={handleDownloadPDF}>Download PDF</button> */}
       
    </div>
  )
      }

export default Home