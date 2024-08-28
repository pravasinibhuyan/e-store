import CartLayout from '@/layouts/CartLayout';
import { Typography } from '@mui/material';
import Head from 'next/head';
import React, { ReactElement } from 'react';

const Index = () => {
  return (
    <div>
      <Typography variant="h5">Information</Typography>
    </div>
  );
};

export default Index;
Index.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Store | Information</title>
      </Head>
      <CartLayout>{page}</CartLayout>;
    </>
  );
};
