import React from 'react';
import { parseCookies, destroyCookie } from 'nookies';
import PropTypes from 'prop-types';
import AppLayout from '../../components/layout/AppLayout';

import { auth } from '../../lib/firebase-admin';

function App({ user }) {
  return <AppLayout user={user}><div>Test</div></AppLayout>;
}

App.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;

export async function getServerSideProps(ctx) {
  const loginRedirect = {
    redirect: {
      destination: '/sign-in', permanent: false,
    },
    props: {},
  };
  const { token } = parseCookies(ctx);
  if (!token) {
    return loginRedirect;
  }

  let decodedToken;
  try {
    decodedToken = await auth.verifyIdToken(token);
    if (!decodedToken || !decodedToken.uid) {
      destroyCookie('token');
      return loginRedirect;
    }
    return { props: { user: decodedToken } };
  } catch (error) {
    // TODO handle firebase admin errors in more detail
    return loginRedirect;
  }
}
