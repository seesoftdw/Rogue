// src/App.tsx
import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import AppRouter from './routes/router';
import CircularProgress from '@mui/material/CircularProgress';

const App: React.FC = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <RouterProvider router={AppRouter} />
    </Suspense>
  );
};

export default App;