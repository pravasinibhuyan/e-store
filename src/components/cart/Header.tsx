import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import logo from '@/assets/images/sticker.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import secureLogo from '@/assets/sprite-secure.png';

function Header() {
  const router = useRouter();
  return (
    <>
      <AppBar
        position="static"
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '76px',
          minHeight: '56px',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          color: '#000',
        }}
      >
        <Box className="custom-container">
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'space-between' },
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  marginRight: { xs: '0', sm: '1rem', md: '2rem' },
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
                onClick={() => router.push('/')}
              >
                <Image
                  src={logo}
                  alt="nft-logo"
                  style={{ width: '38px', height: '54px', objectFit: 'cover' }}
                  priority
                />
              </Box>
            </Box>
            <Box
              sx={{
                cursor: 'pointer',
                display: { xs: 'none', sm: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5rem',
                position: 'relative',
                '&.MuiBox-root::after': {
                  borderBottom: '1px solid',
                  borderBottomStyle: 'dashed',
                  content: '""',
                  width: '100%',
                  height: '1px',
                  position: 'absolute',
                },
              }}
            >
              <Typography
                variant="caption"
                color="#14cda8"
                sx={{
                  position: 'relative',
                  zIndex: '99',
                  backgroundColor: 'rgba(250, 250, 250, 1)',
                  padding: '0.5rem',
                }}
              >
                CART
              </Typography>
              <Typography
                variant="caption"
                color="grey"
                sx={{
                  position: 'relative',
                  backgroundColor: 'rgba(250, 250, 250, 1)',
                  zIndex: '99',
                  padding: '0.5rem',
                }}
              >
                ADDRESS
              </Typography>
              <Typography
                variant="caption"
                color="grey"
                sx={{
                  position: 'relative',
                  zIndex: '99',
                  backgroundColor: 'rgba(250, 250, 250, 1)',
                  padding: '0.5rem',
                }}
              >
                PAYMENT
              </Typography>
            </Box>
            <Box
              sx={{
                cursor: 'pointer',
                display: { xs: 'none', sm: 'flex' },
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '0.2rem',
              }}
            >
              <Image
                src={secureLogo}
                alt="secure-logo"
                priority
                style={{
                  width: '25px',
                  height: '25px',
                  objectFit: 'contain',
                }}
              />
              <Typography variant="caption" color="grey">
                100% SECURE
              </Typography>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
}

export default Header;
