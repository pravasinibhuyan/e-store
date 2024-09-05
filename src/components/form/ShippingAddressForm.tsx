import {
  Box,
  Button,
  Grid,
  IconButton,
  InputLabel,
  Typography,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import FormTextInput from '../common/FormTextInput';
import FormSelectInput from '../common/FormSelectInput';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';

export default function ShippingAddressForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {};

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel
              sx={{ fontWeight: '500', color: '#000', fontSize: '1.2rem' }}
            >
              Contact
            </InputLabel>
          </Grid>
          <Grid item xs={12}>
            <FormTextInput
              name="number"
              placeholder="Mobile Number"
              control={control}
              errors={errors}
              type="number"
              rules={{
                required: `Please enter a valid mobile number(10 digits)`,
                maxLength: {
                  value: 10,
                  message: 'Enter a valid number',
                },
                minLength: {
                  value: 10,
                  message: 'Enter a valid  number',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel
              sx={{ fontWeight: '500', color: '#000', fontSize: '1.2rem' }}
            >
              Shipping Address
            </InputLabel>
          </Grid>
          <Grid item xs={6}>
            <FormTextInput
              name="firstName"
              type="text"
              placeholder="First name"
              control={control}
              errors={errors}
              rules={{
                required: `Please enter your first name`,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <FormTextInput
              name="lastName"
              type="text"
              placeholder="Last name"
              control={control}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextInput
              name="address"
              type="text"
              placeholder="Address"
              control={control}
              errors={errors}
              rules={{
                required: `Please enter your address`,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <FormSelectInput
              name="country"
              type="text"
              control={control}
              errors={errors}
              rules={{
                required: `Please enter your country`,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <FormTextInput
              name="state"
              type="text"
              placeholder="State"
              control={control}
              errors={errors}
              rules={{
                required: `Please enter your state`,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <FormTextInput
              name="city"
              type="text"
              placeholder="City"
              control={control}
              errors={errors}
              rules={{
                required: `Please enter your city`,
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <FormTextInput
              name="zipcode"
              type="text"
              placeholder="Zipcode"
              control={control}
              errors={errors}
              rules={{
                required: `Please enter your zipcode`,
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconButton>
                <ArrowBackIosNewIcon
                  sx={{ fontSize: '0.9rem', color: 'primary.main' }}
                />
              </IconButton>
              <Link href="/checkouts" style={{ textDecoration: 'none' }}>
                <Typography variant="body1" color="primary.main">
                  Return to Cart
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                padding: '1.2rem 0',
                width: '220px',
                textTransform: 'capitalize',
                fontSize: '15px',
              }}
            >
              Continue to payment
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
