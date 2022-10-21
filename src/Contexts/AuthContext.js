import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.init';
import { signInWithPopup,getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const authContext = createContext();

const auth = getAuth(app);

const AuthContext = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
   
    const googleSingIn = (provider)=>{
        return signInWithPopup(auth,provider)
    }

    const emailSignUp = (email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const emailSignIn = (email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)
    }

    const userProfileUpdate = (profile)=>{
      return updateProfile(auth.currentUser,profile)
    }

    const userSignOut = ()=>{
      return signOut(auth)
    }


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
      }) 
      return () => {
        unsubscribe()
      }
    }, [])
    

    const userInfo = {user, googleSingIn,userSignOut,emailSignUp,emailSignIn,userProfileUpdate,loading}
  return (
    <authContext.Provider value={userInfo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthContext