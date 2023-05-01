import PropTypes from 'prop-types';
import { Card, Img, Name, Status } from './FriendListCard.styled';

const FriendListCard = ({ avatar, name, isOnline }) => {
  return (
    <Card>
      <Status isOnline={isOnline}> </Status>
      <Img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Card>
  );
};

// const FriendListCard = ({ props }) => {
//   return (
//     <Card key={props.id}>
//       <Status isOnline={props.isOnline}> </Status>
//       <Img src={props.avatar} alt="User avatar" width="48" />
//       <Name>{props.name}</Name>
//     </Card>
//   );
// };

export default FriendListCard;

FriendListCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
