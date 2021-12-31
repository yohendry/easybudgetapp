import React from 'react';
import { parseCookies, destroyCookie } from 'nookies';
import PropTypes from 'prop-types';
import AppLayout from '../../components/layout/AppLayout';

import { auth } from '../../lib/firebase-admin';

function Accounts({ user }) {
  return (
    <AppLayout user={user}>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 ">
        {[1, 2, 3, 4, 5].map((i) => (
          <div className="rounded overflow-hidden shadow-lg bg-white" key={i}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                The Coldest Sunset
                {' '}
                { i}
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">320</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">-530</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">-200</span>
            </div>
          </div>
        ))}
      </div>

    </AppLayout>
  );
}

Accounts.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default Accounts;

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
