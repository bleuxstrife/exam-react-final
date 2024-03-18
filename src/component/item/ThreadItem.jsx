import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { SlActionUndo } from 'react-icons/sl';
import { userShape } from './LeaderboardItem';
import { postedAt } from '../../utils/date-format';
import UpVoteButton from '../button/UpVoteButton';
import DownVoteButton from '../button/DownVoteButton';

function ThreadItem({
  id, title, body, category, createdAt,
  totalComments, upVotesBy, downVotesBy,
  user, authUser, upVote, downVote, neutralVote,
}) {
  const isUpvote = (authUser !== null) ? upVotesBy.includes(authUser) : false;
  const isDownVote = (authUser !== null) ? downVotesBy.includes(authUser) : false;

  const upVoteHandler = (e) => {
    e.stopPropagation();
    if (isUpvote) {
      neutralVote(id, true);
      return;
    }
    upVote(id);
  };

  const downVoteHandler = (e) => {
    e.stopPropagation();
    if (isDownVote) {
      neutralVote(id, false);
      return;
    }
    downVote(id);
  };

  return (
    <div className="thread-item">
      <div className="thread-item__header">
        <h3 className="thread-item__title"><Link to={`/threads/${id}`}>{title || 'Tidak ada judul'}</Link></h3>
        <p className="thread-item__category">
          #
          {category}
        </p>
      </div>
      <div className="thread-item__body">{parse(body)}</div>
      <div className="thread-item__footer">
        <UpVoteButton
          isUpvote={isUpvote}
          className="thread-upvote__button"
          voteCount={upVotesBy.length}
          handler={upVoteHandler}
        />
        <DownVoteButton
          isDownvote={isDownVote}
          className="thread-downvote__button"
          voteCount={downVotesBy.length}
          handler={downVoteHandler}
        />
        <div className="thread-item__total-comments">
          <SlActionUndo />
          {totalComments}
        </div>
        <p>
          Dibuat oleh&nbsp;
          <strong>{user.name}</strong>
        </p>
        <p>{postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

const threadShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string,
};

ThreadItem.defaultProps = {
  ...threadShape,
  authUser: null,
};

ThreadItem.propTypes = {
  ...threadShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export { threadShape };

export default ThreadItem;
