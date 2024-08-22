import MainLayout from '@/layouts/MainLayout';
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  styled,
} from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import banner3 from '@/assets/images/cup-black.png';
import banner4 from '@/assets/images/cup-white.png';
import SizeColorButton from '@/components/product/SizeColorButton';
import AddIcon from '@mui/icons-material/Add';
import RelatedProduct from '@/components/product/RelatedProduct';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const variantSize = ['6 x 8', '7 x 9', '9 x 10', '8 x 11'];
const variantColor = ['Black', 'white'];

const Product = () => {
  return (
    <Box sx={{ maxWidth: '1500px', margin: '1rem auto', padding: '0 2rem' }}>
      <Grid
        container
        sx={{
          width: '100%',
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
            }}
          >
            <Image
              src={banner3}
              alt=""
              priority
              style={{ width: '100%', height: '500px', objectFit: 'contain' }}
            />
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
              }}
            >
              <Box
                className="custom-border"
                sx={{
                  width: '78px',
                  height: '78px',
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: '0.5rem',
                }}
              >
                <Image
                  src={banner4}
                  alt="variant"
                  className="image-zoom"
                  priority
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Box
                className="custom-border"
                sx={{
                  width: '78px',
                  height: '78px',
                  border: '1px solid',
                  borderColor: 'primary.main !important',
                  borderRadius: '0.5rem',
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
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="h3" fontWeight="500">
              Store Cup
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
              $12.00 USD
            </Button>
            <Divider />
            <Box sx={{ margin: '1rem 0' }}>
              <SizeColorButton title="COLOR" variant={variantColor} />
            </Box>
            <Box sx={{ margin: '1rem 0' }}>
              <SizeColorButton title="SIZE" variant={variantSize} />
            </Box>
            <Box sx={{ margin: '1rem 0' }}>
              <Typography variant="caption">
                12oz double wall ceramic body with a padded bottom.
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              disabled
              sx={{
                textTransform: 'capitalize',
                width: '100%',
                borderRadius: '30px',
                padding: '1rem',
                fontSize: '1rem',
                fontWeight: 'normal',
                '&.MuiButtonBase-root.MuiButton-root.Mui-disabled': {
                  backgroundColor: '#7ca1f3',
                  color: '#fff',
                },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
      <RelatedProduct />
    </Box>
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
