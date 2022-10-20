import React, { createContext, useContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.init';
import { signInWithPopup,getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export const authContext = createContext();

const auth = getAuth(app);

const AuthContext = ({children}) => {
    const [user,setUser] = useState({})
   
    const googleSingIn = (provider)=>{
        return signInWithPopup(auth,provider)
    }

    const userSignOut = ()=>{
      return signOut(auth)
    }


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
      }) 
      return () => {
        unsubscribe()
      }
    }, [])
    

    const userInfo = {user, googleSingIn,userSignOut}
  return (
    <authContext.Provider value={userInfo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthContext