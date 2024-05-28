// src/router.tsx
import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/common/layout';
import ArtistProfile from '../pages/auth/Profile/ArtistProfile';
import Resetpasswordd from '../pages/un_auth/ResetPasswordConfirmation';

const Playlist = lazy(() => import('../pages/auth/ArtistPage'));
const Home = lazy(() => import('../pages/auth/Home'));
const SigninPage = lazy(() => import('../pages/un_auth/SignInPage'));
const CreateAnAccount = lazy (() =>import('../pages/un_auth/CreateAnAccount'));
const TermsofServices = lazy (()=> import ('../pages/un_auth/TermsofServices'))
const ResetYourPassword = lazy (() => import ('../pages/un_auth/ResetYourPassword'));
const ResetPasswordConfirmation = lazy (() => import ('../pages/un_auth/ResetPasswordConfirmation'))

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'Artists',
        children: [
          {
            index: true,
            element: <Playlist />,
          },
          {
            path:'/Artists/Profile',
            element:<ArtistProfile />
          }
        ],
      },
      {
        path: 'signin',
        element: <SigninPage />
      },
      {
        path : 'signup',
        element : <CreateAnAccount/>
      },
      {
        path : 'termsofservices',
        element : <TermsofServices/>
      },
      {
        path :'resetyourpassword',
        element : <ResetYourPassword/>
      },
      {
        path :'resetPasswordConfirmation',
        element : <ResetPasswordConfirmation/>
      },
    ],
  },
]);

export default AppRouter;
