import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadShape } from '../item/ThreadItem';
import { ListContainer } from '../../styled/container';
import { PLabel } from '../../styled/label';
import baseColor from '../../../utils/base-color';

function ThreadList({
  threads, upVote, downVote, neutralVote,
}) {
  if (threads.length === 0) {
    return (
      <ListContainer>
        <PLabel textAlign="center" color={baseColor.onBackgroundGrey}>
          Tidak ada data
        </PLabel>
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      {
            threads.map((item) => (
              <ThreadItem
                key={item.id}
                upVote={upVote}
                downVote={downVote}
                neutralVote={neutralVote}
                {...item}
              />
            ))
        }
    </ListContainer>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default ThreadList;
