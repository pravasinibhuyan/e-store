import { Button, Typography } from '@mui/material';
import React from 'react';

interface CustomButtonProps {
  title: string;
  price: string;
}

const CustomButton = ({}: CustomButtonProps) => {
  return (
    <Button
      variant="outlined"
      className="custom-border"
      sx={{
        borderRadius: '20px !important',
        padding: '5px 8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        gap: '1rem',
      }}
    >
      <Typography variant="caption" color="#000" fontWeight="bold">
        Outlined
      </Typography>
      <Typography
        variant="caption"
        fontWeight="bold"
        sx={{
          backgroundColor: 'primary.main',
          color: '#fff',
          padding: '5px 10px',
          borderRadius: '20px',
        }}
      >
        $50.00
      </Typography>
    </Button>
  );
};

export default CustomButton;
