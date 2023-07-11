import { Profile } from 'components/profile/SocialProfile';
import Statistics from 'components/statistics/Statistics';
import { Friendslist } from 'components/friendslist/FriendList';
import { TransactionHistory } from 'components/transaction/TransactionHistory';

import user from 'components/profile/user.json';
import data from 'components/statistics/data.json';
import friends from 'components/friendslist/friends.json';
import transactions from 'components/transaction/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      {/* React homework template */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friendslist friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
