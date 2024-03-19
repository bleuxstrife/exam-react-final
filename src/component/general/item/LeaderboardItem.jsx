import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ user, score }) {
  return (
    <div className="leaderboard-item">
      <div className="leaderboard-item__user-info">
        <img src={user.avatar} alt={user.name} />
        <p>{user.name}</p>
      </div>
      <p className="leaderboard-item__score">{score}</p>
    </div>
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
