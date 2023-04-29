import FriendListCard from './FriendListCard';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => FriendListCard(friend))}
    </ul>
  );
};

export default FriendList;
