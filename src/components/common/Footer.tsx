import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/images/sticker.png';
import { useRouter } from 'next/router';

function Footer() {
  const router = useRouter();
  const footerList = [
    { list: 'Home', path: '/' },
    { list: 'About', path: '/about' },
    { list: 'Terms & Conditions', path: '#' },
    { list: 'Privacy Policy', path: '#' },
    { list: 'Faq', path: '#' },
  ];

  const handleRedirect = (path: string) => {
    router.push(path);
  };
  return (
    <Box>
      <Box
        sx={{
          maxWidth: '50rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          margin: 'auto',
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
        >
          <Image
            src={logo}
            alt="nft-logo"
            style={{ width: '38px', height: '54px', objectFit: 'cover' }}
            priority
          />
          <Typography
            variant="body1"
            sx={{
              margin: '0.5rem',
              display: { xs: 'block', sm: 'none', lg: 'block' },
            }}
          >
            STORE
          </Typography>
        </Box>
        <List
          sx={{
            color: 'grey',
          }}
        >
          {footerList.map((item) => (
            <ListItem key={item.list}>
              <ListItemText
                primary={item.list}
                sx={{
                  cursor: 'pointer',
                  '& .MuiTypography-root:hover': {
                    textDecoration: 'underline',
                  },
                }}
                onClick={() => handleRedirect(item.path)}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />
      <Box sx={{ padding: '2rem 0', maxWidth: '50rem', margin: 'auto' }}>
        <Typography variant="subtitle1" color="grey" sx={{ textAlign: 'left' }}>
          © 2024 STORE, All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
