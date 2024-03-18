import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadShape } from '../item/ThreadItem';

function ThreadList({
  threads, upVote, downVote, neutralVote,
}) {
  if (threads.length === 0) {
    return (
      <div className="thread-list__empty">
        <p>Tidak ada data</p>
      </div>
    );
  }

  return (
    <div className="thread-list">
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
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default ThreadList;
