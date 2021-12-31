import React from 'react';
import '../styles/output.css';
import 'animate.css';
import PropTypes from 'prop-types';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
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
