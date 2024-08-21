import MainLayout from '@/layouts/MainLayout';
import { Box, Grid, Paper, Typography, styled } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import banner3 from '@/assets/images/cup-black.png';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Product = () => {
  // const router = useRouter();

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          width: '100%',
          maxWidth: '1500px',
          margin: '1rem auto',
          backgroundColor: '#fff',
          padding: '2rem',
        }}
        className="no-hover-border"
      >
        <Grid item xs={12} md={8}>
          <Item
            sx={{
              height: '100%',
              boxShadow: 'none',
              position: 'relative',
            }}

            // onClick={() => handleClick(1)}
          >
            <Image
              src={banner3}
              alt=""
              priority
              style={{ width: '100%', height: '500px', objectFit: 'contain' }}
            />
            <Box
              sx={{
                position: 'absolute',
                zIndex: 999,
                top: '50%',
                left: '3rem',
              }}
            >
              {/* <CustomButton title="" price="" /> */}
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h3" fontWeight="500">
              Store Cup
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Product;

Product.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Store | Product</title>
      </Head>
      <MainLayout>{page}</MainLayout>
    </>
  );
};
