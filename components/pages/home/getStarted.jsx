import React from 'react';
import { useRouter } from 'next/router';

function getStarted({ variant = 'budget-green' }) {
  const router = useRouter();
  return (
    <button
      type="button"
      className={`bg-${variant}-500 text-white rounded-full px-6 py-3 hover:bg-${variant}-800 shadow-lg
    shadow-primary/50`}
      onClick={() => { router.push('/app'); }}
    >
      Get Started
    </button>
  );
}

export default getStarted;
