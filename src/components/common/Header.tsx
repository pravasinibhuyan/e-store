import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '@/assets/images/sticker.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Search = styled('div')(({ theme }) => ({
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '600px',
  border: '0.3px solid lightgrey',
  borderRadius: '5px',
  backgroundColor: '#fff',
  [theme.breakpoints.down('md')]: {
    width: 'auto',
  },
  '& .MuiInputBase-input': {
    color: '#000',
    fontSize: '15px',
    width: '100%',
    padding: '8px',
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
  },
}));

function Header() {
  const router = useRouter();
  return (
    <>
      <AppBar
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
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: 'block', sm: 'none', padding: '0' } }}
            >
              <MenuIcon />
            </IconButton>
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
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 'bold',
                    margin: '0.5rem',
                    display: { xs: 'block', sm: 'none', lg: 'block' },
                  }}
                >
                  STORE
                </Typography>
              </Box>
              <Box
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '20px',
                  color: 'grey',
                }}
              >
                <Typography variant="subtitle2">All</Typography>
                <Typography variant="subtitle2">Shirts</Typography>
                <Typography variant="subtitle2">Shoes</Typography>
              </Box>
            </Box>
            <Search>
              <StyledInputBase
                placeholder="Search for products..."
                inputProps={{ 'aria-label': 'search' }}
                endAdornment={
                  <SearchIcon
                    fontSize="small"
                    sx={{ color: 'grey', margin: '0 5px' }}
                  />
                }
              />
            </Search>
            <Box
              sx={{
                width: '100px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <IconButton
                sx={{
                  border: '0.5px solid',
                  borderColor: 'lightgrey',
                  borderRadius: ' 5px',
                  padding: '10px',
                }}
              >
                <ShoppingCartOutlinedIcon fontSize="small" />
              </IconButton>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
}

export default Header;
