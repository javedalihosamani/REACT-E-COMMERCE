import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const SecureRoute = () => {
    const context = useContext(AuthContext);

    
  return (
    <>
        {
            context.loginStatus ? <Outlet/> : <Navigate to={'/login'}/>
        }
    </>
  )
}

export default SecureRoute