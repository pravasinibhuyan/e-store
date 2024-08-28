import { Breadcrumbs, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from 'next/router';
import React from 'react';

const BreadcrumbButton = () => {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  const breadcrumbs = [
    <Typography
      key="1"
      variant="caption"
      sx={{
        color: `${router.pathname.includes('checkouts') ? '#14cda8' : 'secondary.main'}`,
      }}
      onClick={() => handleClick('/checkouts')}
    >
      CART
    </Typography>,
    <Typography
      key="2"
      variant="caption"
      sx={{
        color: `${router.pathname.includes('information') ? '#14cda8' : 'secondary.main'}`,
      }}
      onClick={() => handleClick('/checkouts/information')}
    >
      INFORMATION
    </Typography>,
    <Typography
      key="3"
      variant="caption"
      sx={{
        color: 'secondary.main',
      }}
    >
      PAYMENT
    </Typography>,
  ];

  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
        sx={{
          cursor: 'pointer',
          '& .MuiBreadcrumbs-separator': {
            margin: '0',
          },
        }}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </>
  );
};

export default BreadcrumbButton;
