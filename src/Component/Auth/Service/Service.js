import axiosInstance from "../../../Interceptor/Interceptor";

 



export const signUpService= async(userDetails)=>{
    try{
    const res = await axiosInstance.post(`/api/auth/register`,userDetails)
    return res;
} catch (error) {
    console.log('Error fetching signUpService:', error);
    throw error; 
  }
}

export const LoginService= async(userDetails)=>{
    try{
    const res = await axiosInstance.post(`/api/auth/login`,userDetails)
    return res;
} catch (error) {
    console.log('Error fetching LoginService:', error);
    throw error; 
  }
}


export const FotgotPasswordService= async(userDetails)=>{
  try{
  const res = await axiosInstance.post(`/api/auth/fotgotPassword`,userDetails)
  return res;
} catch (error) {
  console.log('Error fetching FotgotPasswordService:', error);
  throw error; 
}
}

export const OtpVerifyService= async(userDetails)=>{
  try{
  const res = await axiosInstance.post(`/api/auth/OtpVerify`,userDetails)
  return res;
} catch (error) {
  console.log('Error fetching OtpVerifyService:', error);
  throw error; 
}
}



export const ResetPasswordService= async(userDetails)=>{
  try{
  const res = await axiosInstance.post(`/api/auth/ResetPassword`,userDetails)
  return res;
} catch (error) {
  console.log('Error fetching ResetPasswordService:', error);
  throw error; 
}
}
