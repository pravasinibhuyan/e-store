import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { sliderItem } from '@/components/Data';
import CustomButton from '@/components/common/CustomButton';

const CarouselComponent = () => {
  return (
    <>
      <Box className="slider">
        <Box className="slide-track">
          {sliderItem.map((item) => (
            <Box
              className="slide custom-effect-border"
              sx={{ position: 'relative' }}
              key={item.id}
            >
              <Image
                src={item.image}
                height="100"
                width="400"
                alt="banner"
                priority
                className="img image-zoom"
              />
              <Box
                sx={{
                  position: 'absolute',
                  zIndex: 999,
                  bottom: '1rem',
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
export default CarouselComponent;
