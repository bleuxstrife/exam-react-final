import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateLeaderboard } from '../states/leader-board/action';
import LeaderboardList from '../component/general/list/LeaderboardList';
import { PageContainer } from '../component/styled/container';
import { H2Label } from '../component/styled/label';

function LeaderboardPage() {
  const leaderboards = useSelector((states) => states.leaderboards);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncPopulateLeaderboard());
  }, [dispatch]);

  return (
    <PageContainer>
      <H2Label>Klasemen Pengguna Aktif</H2Label>
      <LeaderboardList leaderboards={leaderboards} />
    </PageContainer>
  );
}

export default LeaderboardPage;
