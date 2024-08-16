import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import { ReactElement } from 'react';

export default function SignInPage() {
  return <h2>Sign In page</h2>;
}

SignInPage.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>App | Sign-in</title>
      </Head>
      <MainLayout>{page}</MainLayout>
    </>
  );
};
