import PropTypes from 'prop-types';
import FriendListCard from './FriendListCard';

import { ListFriend } from './FriendList.styled';

// const FriendList = ({ friends }) => (
//   <ListFriend>
//     {friends.map(friend => (
//       <FriendListCard friend={friend} />
//     ))}
//   </ListFriend>
// );

const FriendList = ({ friends }) => (
  <ListFriend>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListCard
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ListFriend>
);

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
