import { projectFeatureList, usedFeatureList } from '@/components/Data';
import AboutList from '@/components/about/AboutList';
import MainLayout from '@/layouts/MainLayout';
import { Box, Typography } from '@mui/material';
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
          This website is built with Next.js, which is a ecommerce template for
          creating a headless Shopify storefront.
        </Typography>
        <AboutList
          listItem={projectFeatureList}
          title={' Support for real-world commerce features including'}
        />
        <AboutList
          listItem={usedFeatureList}
          title={'Highlight Next.js features including'}
        />
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
