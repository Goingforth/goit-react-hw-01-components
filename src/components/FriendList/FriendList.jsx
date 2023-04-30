import FriendListCard from './FriendListCard';
import { ListFriend } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <ListFriend>{friends.map(friend => FriendListCard(friend))}</ListFriend>
  );
};

export default FriendList;
