import React from 'react';
import { useAuth } from '../ContextApi/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../Component/pages/Loading/Loading';
 
 
 
const ProtectedRoutes = ({ component: Component, ...rest }) => {
    const { users,loading } = useAuth();
    const navigate=useNavigate();
     
    if (loading) {
        return <Loading/>; 
    }
     
    if (!users) {
        return  (navigate('/'));
    }

    return <Component {...rest} />;
};

export default ProtectedRoutes;
