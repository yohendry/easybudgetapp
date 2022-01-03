import React from 'react';
import '../styles/output.css';
import 'animate.css';
import PropTypes from 'prop-types';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { AppProvider } from '../contexts/app';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

function EasyBudgetApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="EasyBudget personal finances made easy"
        description="manage your personal finances in a easy wasy"
        openGraph={{
          type: 'website',
          url: 'https://easybusget.app',
          site_name: 'EasyBudget',
          title: 'EasyBudget personal finances made easy',
          description: 'manage your personal finances in a easy wasy',

          images: [
            {
              url: `https://ik.imagekit.io/uvgmgdwe4zho/tr:w-800,h-600:pr-true:ar-1200-600/logo.png`,
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
        }}
      />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  );
}

EasyBudgetApp.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.instanceOf(React.Component).isRequired,
    PropTypes.func.isRequired,
  ]).isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
  router: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default EasyBudgetApp;
