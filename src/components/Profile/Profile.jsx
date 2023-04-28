import PropTypes from 'prop-types';

import {
  ProfileDiv,
  Description,
  Avatar,
  StatsData,
  StatsDataItem,
  TitleStatsDataItem,
  ValueStatsDataItem,
} from '../Profile/Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  return (
    <ProfileDiv>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
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
}

// export default function Profile({ username, tag, location, avatar, stats }) {
//   const { followers, views, likes } = stats;
//   return (
//     <ProfileDiv className="profile">
//       <div className="description">
//         <img src={avatar} alt="User avatar" className="avatar" />
//         <p className="name">{username}</p>
//         <p className="tag">{tag}</p>
//         <p className="location">{location}</p>
//       </div>

//       <ul className="stats">
//         <li>
//           <span className="label">Followers</span>
//           <span className="quantity">{followers}</span>
//         </li>
//         <li>
//           <span className="label">Views</span>
//           <span className="quantity">{views}</span>
//         </li>
//         <li>
//           <span className="label">Likes</span>
//           <span className="quantity">{likes}</span>
//         </li>
//       </ul>
//     </ProfileDiv>
//   );
// }

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
