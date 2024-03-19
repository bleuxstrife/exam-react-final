import React from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem, { commentShape } from '../item/ThreadCommentItem';

function ThreadCommentList({
  comments, upVote, downVote, neutralVote, authUser, threadId,
}) {
  if (comments.length === 0) {
    return (
      <div className="detail-thread__comment-list__empty">
        <p>Tidak ada komentar</p>
      </div>
    );
  }

  return (
    <div className="detail-thread__comment-list">
      {
        comments.map((item) => (
          <ThreadCommentItem
            key={item.id}
            authUser={authUser}
            upVote={upVote}
            downVote={downVote}
            neutralVote={neutralVote}
            threadId={threadId}
            {...item}
          />
        ))
      }
    </div>
  );
}
ThreadCommentList.defaultProps = {
  authUser: null,
};

ThreadCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  authUser: PropTypes.string,
  threadId: PropTypes.string.isRequired,
};

export default ThreadCommentList;
