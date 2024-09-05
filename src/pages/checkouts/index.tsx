import { Box } from '@mui/material';
import CartLayout from '@/layouts/CartLayout';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import BreadcrumbButton from '@/components/cart/BreadcrumbButton';
import CartList from '@/components/cart/CartList';
import TotalSummaryCard from '@/components/cart/TotalSummaryCard';

const Index = () => {
  return (
    <Box
      sx={{
        width: '90%',
        maxWidth: '1000px',
        margin: '1rem auto',
      }}
    >
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
    </Box>
  );
};

export default Index;

Index.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Store | Checkout</title>
      </Head>
      <CartLayout>{page}</CartLayout>;
    </>
  );
};
