import React from 'react';
import 'styles/globals.css';
import { NavBar } from 'components';
import { Footer } from 'sections';
import 'font-awesome/css/font-awesome.min.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Substrate | your digital garden</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}

export default MyApp;
