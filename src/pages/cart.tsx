import { Box, Button, IconButton, Typography } from '@mui/material';
import CartLayout from '@/layouts/CartLayout';
import Head from 'next/head';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import banner3 from '@/assets/images/cup-black.png';

const Cart = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1000px',
        backgroundColor: '#fff',
        margin: '1rem auto',
        padding: '2rem',
      }}
      className="no-hover-border"
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
          borderBottom: '0.5px solid',
          borderColor: '#d4d4d4',
          padding: '1rem',
        }}
      >
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Box
            className="custom-border"
            sx={{
              width: '100px',
              height: '100px',
              border: '1px solid',
              borderColor: 'primary.main !important',
              borderRadius: '0.5rem',
              backgroundColor: '#d4d4d4',
              position: 'relative',
            }}
          >
            <Image
              src={banner3}
              alt="variant"
              className="image-zoom"
              priority
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
            <IconButton
              sx={{
                backgroundColor: '#737373',
                padding: '0.2rem',
                position: 'absolute',
                left: '-0.5rem',
                top: '-0.7rem',
              }}
            >
              <CloseIcon fontSize="small" sx={{ color: '#fff' }} />
            </IconButton>
          </Box>
          <Typography variant="body1" fontWeight="500">
            Store Cup
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" fontWeight="500">
            $12.00 USD
          </Typography>
          <Button
            sx={{
              backgroundColor: 'primary.main',
              color: '#fff',
              padding: '5px 10px',
              borderRadius: '20px',
              fontWeight: 'normal',
              margin: '1rem 0',
            }}
          >
            - 1 +
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;

Cart.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Store | Cart</title>
      </Head>
      <CartLayout>{page}</CartLayout>;
    </>
  );
};
