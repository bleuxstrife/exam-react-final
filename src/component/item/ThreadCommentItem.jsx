import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { postedAt } from '../../utils/date-format';
import UpVoteButton from '../button/UpVoteButton';
import DownVoteButton from '../button/DownVoteButton';

function ThreadCommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  authUser,
  upVote,
  downVote,
  neutralVote,
  threadId,
}) {
  const isUpvote = (authUser !== null) ? upVotesBy.includes(authUser) : false;
  const isDownVote = (authUser !== null) ? downVotesBy.includes(authUser) : false;

  const upVoteHandler = (e) => {
    e.stopPropagation();
    if (isUpvote) {
      neutralVote(threadId, id, true);
      return;
    }
    upVote(threadId, id);
  };

  const downVoteHandler = (e) => {
    e.stopPropagation();
    if (isDownVote) {
      neutralVote(threadId, id, false);
      return;
    }
    downVote(threadId, id);
  };

  return (
    <div className="detail-thread__comment-item">
      <div className="detail-thread__comment-item__header">
        <div className="detail-thread__comment-item__owner">
          <img src={owner.avatar} alt={owner.name} />
          <p>{owner.name}</p>
        </div>
        <p>{postedAt(createdAt)}</p>
      </div>
      <div className="detail-thread__comment-item__body">{parse(content)}</div>
      <div className="detail-thread__comment-item__footer">
        <UpVoteButton
          className="detail-thread__comment-item__upvote-button"
          isUpvote={isUpvote}
          voteCount={upVotesBy.length}
          handler={upVoteHandler}
        />
        <DownVoteButton
          className="detail-thread__comment-item__downvote-button"
          isDownvote={isDownVote}
          voteCount={downVotesBy.length}
          handler={downVoteHandler}
        />
      </div>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadCommentItem.defaultProps = {
  authUser: null,
};

ThreadCommentItem.propTypes = {
  ...commentShape,
  authUser: PropTypes.string,
  threadId: PropTypes.string.isRequired,
};

export { ownerShape, commentShape };

export default ThreadCommentItem;
