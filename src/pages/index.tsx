import { ReactElement } from 'react';
import { Box } from '@mui/material';
import { USERS } from '@/services/queryURLs';
import Head from 'next/head';
import MainLayout from '@/layouts/MainLayout';
import CarouselComponent from '@/components/carousel/CarouselComponent';
import HomeBanner from '@/components/home/HomeBanner';

export default function Home() {
  return (
    <>
      <Box sx={{ margin: '1rem 0' }}>
        <HomeBanner />
        <CarouselComponent />
      </Box>
    </>
  );
}

Home.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Store</title>
      </Head>
      <MainLayout>{page}</MainLayout>
    </>
  );
};
export async function getStaticProps() {
  const res = await fetch(USERS);
  const users = await res.json();
  return {
    props: { users },
  };
}
