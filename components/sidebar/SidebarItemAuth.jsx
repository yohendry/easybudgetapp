import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import SidebarItem from './SidebarItem';
import firebase from '../../lib/firebase';
import { signOutIcon } from './icons';

function SidebarItemAuth() {
  const router = useRouter();
  const [user] = useAuthState(firebase.auth());

  return user ? (
    <SidebarItem
      label="Sign Out"
      color="budget-orange"
      svgIcon={signOutIcon}
      onClick={() => {
        signOut(firebase.auth()).then(() => {
          router.push('/sign-in');
        });
      }}
    />
  ) : (
    <SidebarItem label="Sign In" color="budget-green" svgIcon={signOutIcon} href="/auth" />
  );
}

export default SidebarItemAuth;
