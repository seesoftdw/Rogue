// src/router.tsx
import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout';

const Playlist = lazy(() => import('./pages/ArtistPage'));
const Home = lazy(() => import('./pages/Home'));
const ReleasesPage = lazy(() => import('./pages/ReleasesPage'));
const PlaylistPage = lazy(() => import('./pages/PlaylistPage'));

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
        ],
      },
      {
        path: 'All-Releases',
        element: <ReleasesPage />
      },
      {
        path: 'All-Playlists',
        element: <PlaylistPage />
      }
    ],
  },
]);

export default AppRouter;
