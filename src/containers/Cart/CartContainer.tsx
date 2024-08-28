import { Box } from '@mui/material';
import React from 'react';
import BreadcrumbButton from './components/BreadcrumbButton';
import CartList from './components/CartList';
import TotalSummaryCard from './components/TotalSummaryCard';

const CartContainer = () => {
  return (
    <>
      <Box sx={{ margin: '1.5rem 0' }}>
        <BreadcrumbButton />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          gap: '2rem',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <CartList />
        <TotalSummaryCard />
      </Box>
    </>
  );
};

export default CartContainer;
