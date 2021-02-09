/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import React from 'react';
import '../styles/main.scss'
import Layout from '../components/Layout/Layout';
import { useStore } from '../store/store';
import { Provider } from 'react-redux';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>

    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  ) 

}

export default MyApp;
