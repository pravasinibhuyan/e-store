import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import { ReactElement } from 'react';

export default function SignUpPage() {
  return <h1>SignUpPage</h1>;
}
SignUpPage.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>App | Sign-up</title>
      </Head>
      <MainLayout>{page}</MainLayout>
    </>
  );
};
