import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { parseCookies, destroyCookie } from 'nookies';
import firebase, { uiConfig } from '../lib/firebase';
import Logo from '../components/Logo';

import { auth } from '../lib/firebase-admin';

// Configure FirebaseUI.

function SignInScreen() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <Logo className="mb-7" />
      <div className="bg-budget-blue-800 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">

        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

      </div>
    </div>
  );
}

export default SignInScreen;

export async function getServerSideProps(ctx) {
  const appRedirect = { redirect: { destination: '/app', permanent: false }, props: {} };
  const pass = { props: {} };
  const { token } = parseCookies(ctx);
  if (!token) {
    return pass;
  }

  let decodedToken;
  try {
    decodedToken = await auth.verifyIdToken(token);
    if (!decodedToken || !decodedToken.uid) {
      destroyCookie('token');
      return pass;
    }
    return appRedirect;
  } catch (error) {
    // TODO handlle firebase admin errors in more detail
    return pass;
  }
}
