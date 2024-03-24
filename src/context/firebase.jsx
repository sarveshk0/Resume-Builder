import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";

import {getAuth,createUserWithEmailAndPassword,
    signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth"
import {getFirestore,addDoc,collection ,doc,getDoc} from "firebase/firestore"
import { getStorage} from "firebase/storage";

import {toast } from 'react-toastify';


const FirebaseContext=createContext(null);
const firebaseConfig = {
    apiKey: "AIzaSyC0D3VpwnD-KK_VwkerDlEV9NDHkcJhihI",
    authDomain: "resume-builder-c06c8.firebaseapp.com",
    projectId: "resume-builder-c06c8",
    storageBucket: "resume-builder-c06c8.appspot.com",
    messagingSenderId: "966551245471",
    appId: "1:966551245471:web:91592f1f930772696788aa"
  };
  
  const FirebaseApp = initializeApp(firebaseConfig);
 const firebaseAuth= getAuth(FirebaseApp);
 
 const firestore=getFirestore(FirebaseApp);
// const storage = getStorage(FirebaseApp);

  const provider=new GoogleAuthProvider(FirebaseApp)

export const useFirebase=()=>useContext(FirebaseContext);



 export const FirebaseProvider=(props)=>{
    const[user,SetUser]=useState(null)
    const [docRefid,setdocRefid]=useState('')

    useEffect(()=>{
     onAuthStateChanged(firebaseAuth,(user)=>{
        if(user) SetUser(user);
        else  SetUser(null);
     })
    },[])

    
    const userCreation=(email,password)=>{
        createUserWithEmailAndPassword(firebaseAuth,email, password);
     }

     const loginuser=(email,password)=>{
        signInWithEmailAndPassword(firebaseAuth,email,password)
     }

     const SigninWithGoogle=()=>{
        signInWithPopup(firebaseAuth,provider)
     }


     const signOutwithcurrentUser=()=>{
      signOut(firebaseAuth).then(()=>toast.success("succesfully signOut"))
     }


    

     // Add a new document with a generated id.
     const addResumeData=async(name,email,contactNum,areaName,pincode,city,stateName,summary,skill,certificate,schoolName,schoolDegree,schoolPassingYear,collageName,
        collageDegree,collagePassingYear,interest,companyName,desiginition,duration,projectName,projectDesc,projectUrl)=>{
        const docRef = await addDoc(collection(firestore, "resume_data"),{
            
            name,
            email,
            contactNum,
            areaName,
            pincode,
            city,
            stateName,
            summary,
            skill,
            certificate,
            schoolName,
            schoolDegree,
            schoolPassingYear,
            collageName,
            collageDegree,
            collagePassingYear,
            interest,
            companyName,
            desiginition,
            duration,
            projectName,
            projectDesc,
            projectUrl,
          userid:user.uid,
           
           });
        console.log("docref id",docRef.id);
     return docRef;
     }

     
    


    const getDocbyid =async(id)=>{
        const docRef=doc(firestore,"resume_data",id);
        const result=await getDoc(docRef);
        return result;
        
     }



     const isloggedin=user?true:false;


    return(
    
        <FirebaseContext.Provider  value={{userCreation,loginuser,SigninWithGoogle,signOutwithcurrentUser,isloggedin,user,addResumeData,getDocbyid,}} >
            {props.children}
        </FirebaseContext.Provider>
    )
}