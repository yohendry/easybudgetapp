import React from 'react';
import { parseCookies, destroyCookie } from 'nookies';
import { propUser, propAccount } from '../../../propTypes';
import AppLayout from '../../../components/layout/AppLayout';
import TransitionsTable from '../../../components/transactions/table';

import { auth } from '../../../lib/firebase-admin';

const accounts = [
  {
    name: 'Saving account', working_balance: 3000, cleared_balance: -2500, uncleared_balance: 1500, uid: '1',
  },
  {
    name: 'Wallet', working_balance: -150, cleared_balance: 150, uncleared_balance: 1500, uid: '2',
  },
];

function Account({ user, account }) {
  return (
    <AppLayout user={user}>
      <div className="flex flex-col gap-7 flex-1">
        <div className="rounded overflow-hidden shadow-sm bg-white p-6">
          <div className="font-bold text-3xl">
            { account.name}
          </div>
          <div className="pt-4 flex gap-4">
            <div>
              <div className={`text-2xl ${account.uncleared_balance > 0 ? 'text-budget-green-500' : 'text-budget-orange-300'}`}>{account.uncleared_balance.toFixed(2)}</div>
              <div className="text-sm text-gray-400">Uncleared balance</div>
            </div>
            <div>
              <div className={`text-2xl ${account.cleared_balance > 0 ? 'text-budget-green-500' : 'text-budget-orange-300'}`}>{account.cleared_balance.toFixed(2)}</div>
              <div className="text-sm text-gray-400">Cleared balance</div>
            </div>
            <div>
              <div className={`text-2xl ${account.working_balance > 0 ? 'text-budget-green-500' : 'text-budget-orange-300'}`}>{account.working_balance.toFixed(2)}</div>
              <div className="text-sm text-gray-400">Working balance</div>
            </div>

          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg bg-white flex-1 p-6">
          <div className="font-bold text-xl mb-2">
            Transactions
          </div>
          <div className="overflow-auto">

            <TransitionsTable />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

Account.propTypes = {
  user: propUser.isRequired,
  account: propAccount.isRequired,
};

export default Account;

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

    const { params } = ctx;
    const account = accounts.find((acc) => acc.uid === params.id);
    if (!account) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        user: decodedToken,
        account,
      },
    };
  } catch (error) {
    // TODO handle firebase admin errors in more detail
    return loginRedirect;
  }
}
