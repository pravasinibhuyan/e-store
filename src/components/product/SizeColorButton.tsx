import { Button, Typography } from '@mui/material';
import React from 'react';

interface SizeColorButtonProps {
  title: string;
  variant: string[];
}

const SizeColorButton = ({
  title = '',
  variant = [],
}: SizeColorButtonProps) => {
  return (
    <>
      <Typography variant="body2">{title}</Typography>

      {variant.map((item) => (
        <Button
          key={item}
          sx={{
            backgroundColor: '#f5f5f5',
            color: '#000',
            padding: '2px',
            borderRadius: '20px !important',
            textTransform: 'capitalize',
            fontWeight: 'normal',
            margin: '1rem 0.5rem 0.4rem 0rem',
            fontSize: '12px',
          }}
          className="no-hover-border"
        >
          {item}
        </Button>
      ))}
    </>
  );
};

export default SizeColorButton;
