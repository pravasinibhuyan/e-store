import FormTextInput from '@/components/common/FormTextInput';
import { Box, Button, Typography } from '@mui/material';
import Head from 'next/head';
import { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import loginBanner from '@/assets/people.jpg';
import loginBanner2 from '@/assets/Fotos.jpeg';

export default function Login() {
  const [isEmail, setIsEmail] = useState(true);

  const emailText = 'Continue with Email';
  const mobileText = 'Continue with Mobile Number';
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {};

  return (
    <Box
      sx={{
        width: '100%',
        margin: 'auto',
        display: 'flex',
        height: '100vh',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '60%' },
          backgroundImage: `url(${loginBanner.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100%',
        }}
      ></Box>
      <Box
        sx={{
          width: { xs: '100%', md: '40%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px',
          backgroundImage: `url(${loginBanner2.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100%',
        }}
      >
        <Box sx={{ width: '100%', padding: { xs: '2rem', md: '3rem' } }}>
          <Typography
            sx={{ marginBottom: '2rem', textAlign: 'center' }}
            variant="h6"
          >
            Login
            <Typography variant="caption" sx={{ margin: '0 0.5rem' }}>
              or
            </Typography>
            Signup
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '1rem 0',
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontSize: { xs: '12px', md: '15px' } }}
            >
              *{isEmail ? emailText : mobileText}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: { xs: '12px', md: '15px' },
                fontWeight: 'normal',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
              onClick={() => setIsEmail(!isEmail)}
            >
              {isEmail ? mobileText : emailText}
            </Typography>
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            {isEmail ? (
              <FormTextInput
                name="email"
                type="text"
                placeholder="Enter Email"
                control={control}
                errors={errors}
                rules={{
                  required: `Please enter your email address`,
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'Please enter a valid email',
                  },
                }}
              />
            ) : (
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
            )}
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                padding: '0.7rem 0',
                fontSize: '15px',
              }}
            >
              Continue
            </Button>
          </form>
        </Box>
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
