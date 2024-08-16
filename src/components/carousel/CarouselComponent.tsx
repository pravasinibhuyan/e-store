import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import data from '@/assets/images/baby-cap-black.png';
import data2 from '@/assets/images/baby-onesie-beige-1.png';
import data3 from '@/assets/images/bag-black.png';
import data4 from '@/assets/images/bomber-jacket-army.png';
import data5 from '@/assets/images/t-shirt-spiral-3.png';

const CarouselComponent = () => {
  return (
    <>
      <Box className="slider">
        <Box className="slide-track">
          <Box className="slide">
            <Image
              src={data}
              height="100"
              width="200"
              alt=""
              priority
              className="img"
            />
          </Box>
          <Box className="slide">
            <Image
              src={data2}
              height="100"
              width="200"
              alt=""
              priority
              className="img"
            />
          </Box>
          <Box className="slide">
            <Image
              src={data3}
              height="100"
              width="200"
              alt=""
              priority
              className="img"
            />
          </Box>
          <Box className="slide">
            <Image
              src={data4}
              height="100"
              width="200"
              alt=""
              priority
              className="img"
            />
          </Box>
          <Box className="slide">
            <Image
              src={data5}
              height="100"
              width="200"
              alt=""
              priority
              className="img"
            />
          </Box>{' '}
          <Box className="slide">
            <Image
              src={data5}
              height="100"
              width="200"
              alt=""
              priority
              className="img"
            />
          </Box>{' '}
          <Box className="slide">
            <Image
              src={data5}
              height="100"
              width="200"
              alt=""
              priority
              className="img"
            />
          </Box>{' '}
          <Box className="slide">
            <Image
              src={data5}
              height="100"
              width="200"
              alt=""
              priority
              className="img"
            />
          </Box>{' '}
          <Box className="slide">
            <Image
              src={data5}
              height="100"
              width="200"
              alt=""
              priority
              className="img"
            />
          </Box>{' '}
          <Box className="slide">
            <Image
              src={data5}
              height="100"
              width="200"
              alt=""
              priority
              className="img"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default CarouselComponent;
