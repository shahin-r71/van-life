import { initializeApp } from "firebase/app"; 
import { getFirestore,collection, getDocs, doc,getDoc, query, where } from "firebase/firestore";
// import { getFirestore} from "firebase/firestore/lite";
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword,signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwwP-yndlfEiMO4qC42cao6gSk5-Hzwho",
  authDomain: "vanlife-7b846.firebaseapp.com",
  projectId: "vanlife-7b846",
  storageBucket: "vanlife-7b846.appspot.com",
  messagingSenderId: "654084100612",
  appId: "1:654084100612:web:166d384d2755a127bd9b51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore(app);
const  vansRef=collection(db,"vans");

export async function getVans(){
    const snapshot= await getDocs(vansRef);
    const vans= snapshot.docs.map((van)=>({
        ...van.data(),
        id:van.id
    }))
    return vans;
}

export async function getVan(id){
    const docRef=doc(db,"vans",id);
    const snapshot= await getDoc(docRef);
    const van= {
        ...snapshot.data(),
        id:Number(id)
    };
    // console.log(van);
    return van;
}

export async function getHostVans(){
    const q=query(vansRef,where("hostId","==",123));
    const snapshot= await getDocs(q);
    //console.log(snapshot.docs.data());
    const vans= snapshot.docs.map((van)=>({
        ...van.data(),
        id:van.id
    }))
    return vans;
}

const auth = getAuth();
export async function loginUser(creds) {
    const  {email, password} = creds;
    try{
        const userData= await signInWithEmailAndPassword(auth, email, password)
        const user= userData.user;
        return user;

    }catch(error){
        throw error;
    }

}

export async function signupUser(user){
    const {email,password}=user;

    try{
        const userData= await createUserWithEmailAndPassword(auth, email, password)
        const user= userData.user;
        return user;
    }catch(error){
        throw error
    }
}

export async function logoutUser(){
    try{
        const signoutUser= await signOut(auth);
        console.log(signoutUser)
    }catch(error){
        throw error
    }

}

export function isLoggedIn(){
    const user = auth.currentUser;

    if (user) {
        return user;
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    // ...
    } else {
        return null;
    // No user is signed in.
    }

}
