import { Box } from '@mui/material';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import CustomBreadcrumbs from '../common/Breadcrumbs';

const Layout: React.FC = () => (
  <Box>
    <CustomBreadcrumbs />
    <Outlet />
  </Box>
);

export default Layout;
