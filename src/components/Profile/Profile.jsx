import PropTypes from 'prop-types';

import {
  ProfileDiv,
  Description,
  Avatar,
  StatsData,
  StatsDataItem,
  TitleStatsDataItem,
  ValueStatsDataItem,
  Name,
  Tag,
  Location,
} from '../Profile/Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <ProfileDiv>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsData>
        <StatsDataItem>
          <TitleStatsDataItem>Followers</TitleStatsDataItem>
          <ValueStatsDataItem>{followers}</ValueStatsDataItem>
        </StatsDataItem>
        <StatsDataItem>
          <TitleStatsDataItem>Views</TitleStatsDataItem>
          <ValueStatsDataItem>{views}</ValueStatsDataItem>
        </StatsDataItem>
        <StatsDataItem>
          <TitleStatsDataItem>Likes</TitleStatsDataItem>
          <ValueStatsDataItem>{likes}</ValueStatsDataItem>
        </StatsDataItem>
      </StatsData>
    </ProfileDiv>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
