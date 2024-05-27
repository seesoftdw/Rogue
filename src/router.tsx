// src/router.tsx
import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout';
import ArtistProfile from './pages/Profile/ArtistProfile';

const Playlist = lazy(() => import('./pages/ArtistPage'));
const Home = lazy(() => import('./pages/Home'));

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
    ],
  },
]);

export default AppRouter;