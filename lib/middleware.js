import { parseCookies, destroyCookie } from 'nookies';
import { auth } from './firebase-admin';

export function withAuth() {
  return async (req, res) => {
    const { token } = parseCookies({ req });
    if (!token) {
      return res.status(401).end('Not authenticated. No Auth header');
    }

    let decodedToken;
    try {
      decodedToken = await auth.verifyIdToken(token);
      if (!decodedToken || !decodedToken.uid) { destroyCookie('token'); }
      return res.status(401).end('Not authenticated');
    } catch (error) {
      const errorCode = error.errorInfo.code;
      error.status = 401;
      if (errorCode === 'auth/internal-error') {
        error.status = 500;
      }
      // TODO handlle firebase admin errors in more detail
      return res.status(error.status).json({ error: errorCode });
    }
  };
}

export default withAuth;
