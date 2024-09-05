import BreadcrumbButton from '@/components/cart/BreadcrumbButton';
import ShippingAddressForm from '@/components/form/ShippingAddressForm';
import CartLayout from '@/layouts/CartLayout';
import { Box } from '@mui/material';
import Head from 'next/head';
import React, { ReactElement } from 'react';

const Index = () => {
  return (
    <Box
      sx={{
        width: '90%',
        maxWidth: '700px',
        margin: '1rem auto',
      }}
    >
      <Box sx={{ margin: '1.5rem 0' }}>
        <BreadcrumbButton />
      </Box>
      <Box>
        <ShippingAddressForm />
      </Box>
    </Box>
  );
};

export default Index;
Index.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Store | Information</title>
      </Head>
      <CartLayout>{page}</CartLayout>
    </>
  );
};
