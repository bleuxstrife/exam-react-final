import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardShape } from '../item/LeaderboardItem';
import { ListContainer } from '../../styled/container';
import { PLabel } from '../../styled/label';
import baseColor from '../../../utils/base-color';
import { LeaderBHeader } from '../../styled/leader-board';

function LeaderboardList({ leaderboards }) {
  if (leaderboards.length === 0) {
    return (
      <ListContainer>
        <PLabel textAlign="center" color={baseColor.onBackgroundGrey}>
          Tidak ada data
        </PLabel>
      </ListContainer>
    );
  }

  return (
    <ListContainer withPadding={false} display="flex" gap="16px" flexDirection="column">
      <LeaderBHeader>
        <PLabel flex="1 1">Pengguna</PLabel>
        <PLabel>Skor</PLabel>
      </LeaderBHeader>
      {
            leaderboards.map((item) => <LeaderboardItem key={item.user.id} {...item} />)
      }
    </ListContainer>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardShape)).isRequired,
};

export default LeaderboardList;
