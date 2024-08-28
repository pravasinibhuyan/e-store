import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import ProductContainer from '@/containers/Product/ProductContainer';

const Product = () => {
  return <ProductContainer />;
};

export default Product;

Product.getLayout = (page: ReactElement) => {
  return (
    <>
      <Head>
        <title>Store | Product</title>
      </Head>
      <MainLayout>{page}</MainLayout>
    </>
  );
};
