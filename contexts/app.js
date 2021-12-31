import React, { useContext, useState, useEffect } from 'react';
import firebase from '../lib/firebase'
import nookies from 'nookies'
export const AppContext = React.createContext({
  isSidebarOpen: false
});

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, 'token', '', { path: '/' });
      } else {
        const token = await user.getIdToken();
        setUser(user);
        nookies.set(undefined, 'token', token, { path: '/' });
      }
    });
  }, []);
  return <AppContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, user }}>{children}</AppContext.Provider>;
};
