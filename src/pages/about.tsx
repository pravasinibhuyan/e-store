import MainLayout from '@/layouts/MainLayout';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import Head from 'next/head';
import { ReactElement } from 'react';

const About = () => {
  return (
    <Box sx={{ maxWidth: '42rem', margin: 'auto', paddingTop: '5rem' }}>
      <Box>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          About
        </Typography>
        <Typography variant="subtitle1">
          This website is built with Next.js Commerce, which is a ecommerce
          template for creating a headless Shopify storefront.
        </Typography>
        <Typography variant="caption">
          Support for real-world commerce features including:
        </Typography>
        <List
          sx={{
            listStyle: 'disc',
            padding: '2rem',
            '& .MuiListItem-root': {
              padding: '10px 0',
            },
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="A" />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="List" />
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <ListItemText primary="Item" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
export default About;

About.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Store | About</title>
      </Head>
      <MainLayout>{page}</MainLayout>
    </>
  );
};
