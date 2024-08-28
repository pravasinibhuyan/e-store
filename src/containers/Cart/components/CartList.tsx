import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import banner3 from '@/assets/images/cup-black.png';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import React from 'react';

const CartList = () => {
  return (
    <Box sx={{ width: { xs: '100%', md: '60%' } }}>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: '#fff',
          justifyContent: 'space-between',
          alignContent: 'center',
          padding: '1rem',
          height: 'fit-content',
          marginBottom: '1rem',
        }}
        className="custom-border"
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          <Typography variant="body2" fontWeight="500">
            $12.00 USD
          </Typography>
          <Box sx={{ border: '1px solid lightgrey', borderRadius: '20px' }}>
            <IconButton sx={{ padding: '6px' }}>
              <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography
              variant="caption"
              sx={{ margin: '0 0.5rem', fontSize: '0.9rem' }}
            >
              1
            </Typography>
            <IconButton sx={{ padding: '6px' }}>
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: '#fff',
          justifyContent: 'space-between',
          alignContent: 'center',
          padding: '1rem',
          height: 'fit-content',
          marginBottom: '1rem',
        }}
        className="custom-border"
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          <Typography variant="body2" fontWeight="500">
            $12.00 USD
          </Typography>
          <Box sx={{ border: '1px solid lightgrey', borderRadius: '20px' }}>
            <IconButton sx={{ padding: '6px' }}>
              <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography
              variant="caption"
              sx={{ margin: '0 0.5rem', fontSize: '0.9rem' }}
            >
              1
            </Typography>
            <IconButton sx={{ padding: '6px' }}>
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: '#fff',
          justifyContent: 'space-between',
          alignContent: 'center',
          padding: '1rem',
          height: 'fit-content',
          marginBottom: '1rem',
        }}
        className="custom-border"
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          <Typography variant="body2" fontWeight="500">
            $12.00 USD
          </Typography>
          <Box sx={{ border: '1px solid lightgrey', borderRadius: '20px' }}>
            <IconButton sx={{ padding: '6px' }}>
              <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography
              variant="caption"
              sx={{ margin: '0 0.5rem', fontSize: '0.9rem' }}
            >
              1
            </Typography>
            <IconButton sx={{ padding: '6px' }}>
              <AddIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartList;
