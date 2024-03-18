import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateLeaderboard } from '../states/leader-board/action';
import LeaderboardList from '../component/list/LeaderboardList';

function LeaderboardPage() {
  const leaderboards = useSelector((states) => states.leaderboards);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncPopulateLeaderboard());
  }, [dispatch]);

  return (
    <section className="leaderboard-page">
      <h2>Klasemen Pengguna Aktif</h2>
      <LeaderboardList leaderboards={leaderboards} />
    </section>
  );
}

export default LeaderboardPage;
