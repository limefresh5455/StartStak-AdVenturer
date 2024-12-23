import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logout from './Component/pages/Logout/Logout';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import Loading from './Component/pages/Loading/Loading';
import PageNotFound from './Component/pages/PageNotFound/PageNotFound';
 
 
//Public Route
const Login = lazy(() => import('./Component/Auth/Login/Login'));
const OtpVerification = lazy(() => import('./Component/Auth/OtpVerification/OtpVerification'));
const ForgotPassword = lazy(() => import('./Component/Auth/ForgotPassword/ForgotPassword'));
const ResetPassword = lazy(() => import('./Component/Auth/ResetPassword/ResetPassword'));
//protected Route
const CreateProject = lazy(() => import('./Component/User/CreateProject/CreateProject'));
const ChatBot = lazy(() => import('./Component/User/ChatBot/ChatBot'));
const QuestionDisplay = lazy(() => import('./Component/User/QuestionDisplay/QuestionDisplay'));


function App() {
  


  return (
    <>
      <ToastContainer />
      <Suspense fallback={<Loading />}>
        <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/otpVerification" element={<OtpVerification />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/resetPassword" element={<ResetPassword />} />
              <Route path="/createProject" element={<CreateProject />} />
              <Route path="/chatBot" element={<ProtectedRoutes component={ChatBot} />} />
              <Route path="/questionDisplay" element={<ProtectedRoutes component={QuestionDisplay} />} />
              <Route path="/logout" element={<ProtectedRoutes component={Logout} />} />
              <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
