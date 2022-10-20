import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Contexts/AuthContext'

const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(authContext)
    if(loading){
        return <div>loading...</div>
    }

    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
  return children;
}

export default PrivateRoutes