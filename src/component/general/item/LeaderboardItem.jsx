import React from 'react';
import PropTypes from 'prop-types';
import { LeaderBContainer, LeaderBImg, LeaderBUserInfo } from '../../styled/leader-board';
import { PLabel } from '../../styled/label';

function LeaderboardItem({ user, score }) {
  return (
    <LeaderBContainer>
      <LeaderBUserInfo>
        <LeaderBImg src={user.avatar} alt={user.name} />
        <PLabel fontSize="18px">{user.name}</PLabel>
      </LeaderBUserInfo>
      <PLabel fontSize="23px">{score}</PLabel>
    </LeaderBContainer>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const leaderboardShape = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

export { userShape, leaderboardShape };

export default LeaderboardItem;
