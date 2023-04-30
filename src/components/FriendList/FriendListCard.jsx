import PropTypes from 'prop-types';
import { Card, Img, Name, Status } from './FriendListCard.styled';

const FriendListCard = ({ avatar, name, isOnline, id }) => {
  return (
    <Card key={id}>
      <Status isOnline={isOnline}> </Status>
      <Img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Card>
  );
};

export default FriendListCard;

FriendListCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
