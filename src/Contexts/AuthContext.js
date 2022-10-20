import React, { createContext } from 'react'

export const authContext = createContext();
const AuthContext = ({children}) => {

    const user = {name:'jamal'}
    const userInfo = {user}
  return (
    <authContext.Provider value={userInfo}>
        {children}
    </authContext.Provider>
  )
}

export default AuthContext