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
  return (
    <Box
      sx={{
        width: '90%',
        maxWidth: '1500px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: ' 100vh',
      }}
    >
      <Box sx={{ backgroundColor: '#fff' }}>
        <Typography>Login or Signup</Typography>
        <form style={{ width: '70%' }} onSubmit={handleSubmit(onSubmit)}>
          <FormTextInput
            name="email"
            placeholder="Mobile Number"
            control={control}
            errors={errors}
            rules={{
              required: 'Please enter a valid mobile number(10 digits)',
            }}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              mt: 3,
              fontSize: '15px',
              textTransform: 'capitalize',
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
