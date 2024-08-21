import { Box, Grid, Paper, styled } from '@mui/material';
import React from 'react';
import CustomButton from '@/components/common/CustomButton';
import Image from 'next/image';
import banner1 from '@/assets/images/t-shirt-circles-black.png';
import banner2 from '@/assets/images/bag-black.png';
import banner3 from '@/assets/images/cup-black.png';
import { useRouter } from 'next/router';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HomeBanner = () => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/product/${id}`);
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          width: '100%',
          maxWidth: '1500px',
          margin: '1rem auto',
        }}
      >
        <Grid item xs={12} md={8}>
          <Item
            sx={{
              height: '100%',
              boxShadow: 'none',
              position: 'relative',
            }}
            className="custom-border"
            onClick={() => handleClick(1)}
          >
            <Image
              src={banner1}
              alt=""
              priority
              style={{ width: '100%', height: '600px', objectFit: 'contain' }}
              className="image-zoom"
            />
            <Box
              sx={{
                position: 'absolute',
                zIndex: 999,
                top: '50%',
                left: '3rem',
              }}
            >
              <CustomButton title="" price="" />
            </Box>
          </Item>
        </Grid>
        <Grid container item xs={12} md={4} spacing={2}>
          <Grid item xs={12}>
            <Item
              className="custom-border"
              sx={{ boxShadow: 'none', height: '100%' }}
              onClick={() => handleClick(2)}
            >
              <Image
                src={banner2}
                alt=""
                priority
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'contain',
                }}
                className="image-zoom"
              />
              <CustomButton title="" price="" />
            </Item>
          </Grid>
          <Grid item xs={12} md={12}>
            <Item
              className="custom-border"
              sx={{ boxShadow: 'none', height: '100%' }}
              onClick={() => handleClick(3)}
            >
              <Image
                src={banner3}
                alt=""
                priority
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'contain',
                }}
                className="image-zoom"
              />
              <CustomButton title="" price="" />
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeBanner;
