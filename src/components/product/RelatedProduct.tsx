import { Box, Typography } from '@mui/material';
import React from 'react';
import { sliderItem } from '../Data';
import Image from 'next/image';
import CustomButton from '../common/CustomButton';

const RelatedProduct = () => {
  return (
    <>
      <Box sx={{ margin: '2rem 0' }}>
        <Typography variant="h5" fontWeight="bold">
          Related Products
        </Typography>
        <Box
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', md: '1500px' },
            overflowX: 'scroll',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            padding: '1rem 0',
          }}
        >
          {sliderItem.map((item) => (
            <Box
              className="custom-border"
              sx={{ position: 'relative' }}
              key={item.id}
            >
              <Image
                src={item.image}
                height="300"
                width="300"
                alt=""
                priority
                className="img image-zoom"
              />
              <Box
                sx={{
                  position: 'absolute',
                  zIndex: 999,
                  bottom: '0.5rem',
                  left: '1rem',
                }}
              >
                <CustomButton title="" price="" />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default RelatedProduct;
