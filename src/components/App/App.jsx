import HomeworkTask from 'components/HomeworkTask/HomeworkTask';

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
    <div>
      <HomeworkTask task="1. Профиль социальной сети" />

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <HomeworkTask task="2. Секция статистики" />

      <Statistics title="Upload stats" stats={data} />

      <HomeworkTask task="2.1. Секция статистики без пропа title" />

      <Statistics stats={data} />

      <HomeworkTask task="3. Список друзей" />

      <FriendList friends={friends} />

      <HomeworkTask task="4. История транзакций" />

      <TransactionHistory items={transactions} />
    </div>
  );
};
