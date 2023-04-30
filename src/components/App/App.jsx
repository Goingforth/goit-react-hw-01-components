// import HomeworkTask from './HomeworkTask';
// import homework from '../data/homework';

import Profile from '../Profile/Profile';
import user from '../../data/user';

import Statistics from '../Statistics/Statistics';
import data from '../../data/data';

import FriendList from '../FriendList/FriendList';
import friends from '../../data/friends';

import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../data/transactions';

export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    //   React homework template
    // </div>
    <div>
      {/* <HomeworkTask task1={homework} /> */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
