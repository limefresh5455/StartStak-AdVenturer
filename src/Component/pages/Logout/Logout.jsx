import React, {  useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import { useAuth } from '../../../ContextApi/AuthContext/AuthContext';
 
 
 
 

const Logout = () => {
    const {setUsers}=useAuth()
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true);  
    
    useEffect(() => {
        const handleLogout = async () => {
            try { 
                await localStorage.clear(); 
                setUsers(null);
                navigation.replace('Login'); 
            } catch (error) {
                toast.error('An error occurred while logging out.'); 
            } finally {
                setIsLoading(false);  
            }
        };
        handleLogout();
    }, []);

    if (isLoading) {
        return (
          <Loading/>
        );
    }
    return null;  
};

 
export default Logout;
