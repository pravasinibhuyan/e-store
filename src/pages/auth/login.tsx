import FormTextInput from '@/components/common/FormTextInput';
import { Box, Button, Typography } from '@mui/material';
import Head from 'next/head';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {};

  // const handleNumberChange = (e: any) => {
  //   // Remove non-numeric characters
  //   const cleanedValue = e.target.value.replace(/\D/g, '');

  //   console.log(cleanedValue);
  // };
  return (
    <Box
      sx={{
        width: '90%',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: ' 100vh',
      }}
    >
      <Box sx={{ backgroundColor: '#fff', padding: '6rem 4rem' }}>
        <Typography sx={{ textAlign: 'center' }} variant="h6">
          Login <Typography variant="caption">or</Typography> Signup
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              mt: 3,
              fontSize: '15px',
            }}
          >
            Continue
          </Button>
        </form>
      </Box>
    </Box>
  );
}

Login.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>App | Login</title>
      </Head>
      {page}
    </>
  );
};
