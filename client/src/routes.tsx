import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from './features/auth/login/LoginForm'; 
import RegisterForm from './features/auth/register/RegisterForm'; 
import SendResetPasswordUrlForm from './features/auth/send-reset-password-url/SendResetPasswordUrlForm'; 
import ResetPasswordForm from './features/auth/reset-password/ResetPasswordForm';
import HomePage from "./pages/home/HomePage";
import ProtectedRoute from 'src/outils/ProtectedRoute';
import ProfilePage from 'src/pages/profile/ProfilePage';
import CarForm from 'src/features/car-form/CarForm'
import CarDetails from 'src/features/car-details/CarDetails'
import ChatsPage from 'src/pages/chats/ChatsPage'
import ChatboxPage from 'src/pages/chatbox/ChatboxPage'
import SearchPage from 'src/pages/search/SearchPage'
import Favorites from "./features/favorites/Favorites";

export const AppRoutes = () => (
  <Router>
    <Routes>
      {/* AUTH */}
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/send-reset-password" element={<SendResetPasswordUrlForm />} />
      <Route path="/reset-password/:token/:email" element={<ResetPasswordForm />} />
      {/* END OF AUTH */}
      
      {/* CAR CREATION */}
      <Route 
       path="/create"
       element={
           <CarForm /> 
       }
      /> 
      {/* END OF CAR CREATION */}
      
      {/* SEARCH PAGE */}
      <Route 
       path="/search/:query"
       element={
       <SearchPage />
       }
      />
      {/* END OF SEARCH PAGE */}

      {/* APP ROUTES */}
      <Route 
        path='/' 
        element={ 
            <HomePage /> 
        }
      /> 
      
      <Route 
        path='/profile/:id' 
        element={<ProtectedRoute> <ProfilePage /> </ProtectedRoute>} 
      />
      
      <Route 
        path='/car/:id'
        element={<CarDetails/>}
      /> 

      <Route 
       path='/favorites'
       element={
       <Favorites />
      }

      />
      
      <Route 
        path='/chats'
        element={<ChatsPage />}
      />
      
      <Route 
        path='/chatbox'
        element={<ChatboxPage />}
      /> 
      {/* END OF APP ROUTES */}
    </Routes>
  </Router> 
)