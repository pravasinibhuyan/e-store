import { Box, Button, Divider, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const TotalSummaryCard = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        width: { xs: '100%', md: '40%' },
        padding: '1rem',
        height: 'fit-content',
      }}
      className="custom-border "
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '1rem',
        }}
      >
        <Typography variant="body2" color="secondary.main">
          Taxes
        </Typography>
        <Typography variant="body1" fontWeight="400">
          $12.00 USD
        </Typography>
      </Box>
      <Divider sx={{ borderColor: 'rgb(151 148 146 / 12%)' }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '1rem',
        }}
      >
        <Typography variant="body2" color="secondary.main">
          Shipping
        </Typography>
        <Typography variant="body1" fontWeight="400">
          0
        </Typography>
      </Box>
      <Divider sx={{ borderColor: 'rgb(151 148 146 / 12%)' }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '1rem',
        }}
      >
        <Typography variant="body2" color="secondary.main">
          Total
        </Typography>
        <Typography variant="body1" fontWeight="400">
          $12.00 USD
        </Typography>
      </Box>
      <Divider sx={{ borderColor: 'rgb(151 148 146 / 12%)' }} />

      <Button
        variant="contained"
        onClick={() => router.push('/checkouts/information')}
        // disabled
        sx={{
          textTransform: 'none',
          backgroundColor: '#3870eb',
          width: '100%',
          borderRadius: '30px',
          padding: '0.6rem',
          marginTop: '1.5rem',
          fontSize: '1rem',
          fontWeight: 'normal',
        }}
      >
        Proceed to Checkout
      </Button>
    </Box>
  );
};

export default TotalSummaryCard;
