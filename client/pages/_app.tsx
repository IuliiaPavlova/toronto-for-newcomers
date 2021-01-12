/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import React from 'react';
import '../styles/main.scss'
import Layout from '../components/Layout/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 

}

export default MyApp;
