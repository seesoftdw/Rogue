// src/router.tsx
import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/common/layout';
import ArtistProfile from '../pages/auth/Profile/ArtistProfile';

const Playlist = lazy(() => import('../pages/auth/ArtistPage'));
const Home = lazy(() => import('../pages/auth/Home'));
const SigninPage = lazy(() => import('../pages/auth/Un_auth/SignInPage'));
const CreateAnAccount = lazy (() =>import('../pages/auth/Un_auth/CreateAnAccount'));
const TermsofServices = lazy (()=> import ('../pages/auth/Un_auth/TermsofServices'))
const ResetYourPassword = lazy (() => import ('../pages/auth/Un_auth/ResetYourPassword'));
const Resetpassword = lazy (() => import ('../pages/auth/Un_auth/ResetPassword'))

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
        path: 'signIn',
        element: <SigninPage />
      },
      {
        path : 'createanaccount',
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
        path : 'resetpassword',
        element : <Resetpassword/>
      }

    ],
  },
]);

export default AppRouter;
