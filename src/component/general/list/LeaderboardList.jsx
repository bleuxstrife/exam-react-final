import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardShape } from '../item/LeaderboardItem';

function LeaderboardList({ leaderboards }) {
  if (leaderboards.length === 0) {
    return (
      <div className="leaderboard-list-empty">
        <p>Tidak ada data</p>
      </div>
    );
  }

  return (
    <div className="leaderboard-list">
      <header>
        <p className="leaderboard-list__user-label">Pengguna</p>
        <p>Skor</p>
      </header>
      {
            leaderboards.map((item) => <LeaderboardItem key={item.user.id} {...item} />)
      }
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardShape)).isRequired,
};

export default LeaderboardList;
