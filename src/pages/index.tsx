import Head from 'next/head';
import { ReactElement } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Typography } from '@mui/material';
import { USERS } from '@/services/queryURLs';
export default function Home() {
  return (
    <>
      <Typography variant="h5" color="text.primary">
        hello world | home page
        {/* <CarouselComponent /> */}
      </Typography>
    </>
  );
}

Home.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>App | Store</title>
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
