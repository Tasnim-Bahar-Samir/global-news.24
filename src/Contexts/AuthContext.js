import React, { createContext, useContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.init';
import { GoogleAuthProvider, signInWithPopup,getAuth, onAuthStateChanged } from "firebase/auth";

export const authContext = createContext();

const auth = getAuth(app);

const AuthContext = ({children}) => {
    const [user,setUser] = useState({})
   
    const googleSingIn = (provider)=>{
        return signInWithPopup(auth,provider)
    }


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
      }) 
      return () => {
        unsubscribe()
      }
    }, [])
    

    const userInfo = {user, googleSingIn}
  return (
    <authContext.Provider value={userInfo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthContext