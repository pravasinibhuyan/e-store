import { Box } from '@mui/material';
import CartLayout from '@/layouts/CartLayout';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import CartContainer from '@/containers/Cart/CartContainer';

const Index = () => {
  return (
    <Box
      sx={{
        width: '90%',
        maxWidth: '1000px',
        margin: '1rem auto',
      }}
    >
      <CartContainer />
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
