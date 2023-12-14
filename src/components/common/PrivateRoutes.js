import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";

function PrivateRoutes() {
    const[user, loading ,error] = useAuthState(auth);
    
    if(loading) {
        return <p>Loading...</p>
    } else if (!user || error) {
        return <Navigate to={"/"} replace />;
    } else {
        return <Outlet />;
    }
};

export default PrivateRoutes