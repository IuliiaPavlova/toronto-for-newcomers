/* eslint-disable react/jsx-props-no-spreading */

import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }:AppProps) => 
<Component {...pageProps} />;

export default MyApp;
