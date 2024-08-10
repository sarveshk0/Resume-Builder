import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, addDoc, collection, doc, getDoc } from "firebase/firestore";
import { toast } from 'react-toastify';

const FirebaseContext = createContext(null);
const firebaseConfig = {
    apiKey: "AIzaSyC0D3VpwnD-KK_VwkerDlEV9NDHkcJhihI",
    authDomain: "resume-builder-c06c8.firebaseapp.com",
    projectId: "resume-builder-c06c8",
    storageBucket: "resume-builder-c06c8.appspot.com",
    messagingSenderId: "966551245471",
    appId: "1:966551245471:web:91592f1f930772696788aa"
};

const FirebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(FirebaseApp);
const firestore = getFirestore(FirebaseApp);
const provider = new GoogleAuthProvider();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
    const [user, SetUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            SetUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const userCreation = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
            toast.success("User created successfully");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const loginuser = async (email, password) => {
        try {
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const SigninWithGoogle = async () => {
        try {
            await signInWithPopup(firebaseAuth, provider);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const signOutwithcurrentUser = async () => {
        try {
            await signOut(firebaseAuth);
            toast.success("Successfully signed out");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const addResumeData = async (name, email, contactNum, linkedIn, areaName, pincode, city, stateName, summary, skill, certificate, schoolName, schoolDegree, schoolPassingYear, collageName, collageDegree, collagePassingYear, interest, companyName, desiginition, duration, projectName, projectDesc, projectUrl) => {
        try {
            const docRef = await addDoc(collection(firestore, "resume_data"), {
                name,
                email,
                contactNum,
                linkedIn,
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
                userid: user.uid,
            });
            console.log("Document reference ID:", docRef.id);
            return docRef;
        } catch (error) {
            toast.error(error.message);
        }
    };

    const getDocbyid = async (id) => {
        try {
            const docRef = doc(firestore, "resume_data", id);
            const result = await getDoc(docRef);
            return result;
        } catch (error) {
            toast.error(error.message);
        }
    };

    const isloggedin = user ? true : false;

    return (
        <FirebaseContext.Provider value={{ userCreation, loginuser, SigninWithGoogle, signOutwithcurrentUser, isloggedin, user, addResumeData, getDocbyid, loading }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};
