import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../../utils/date-format';
import { commentShape, ownerShape } from '../item/ThreadCommentItem';
import ThreadCommentList from '../list/ThreadCommentList';
import ThreadCommentInput from '../input/ThreadCommentInput';
import UpVoteButton from '../button/UpVoteButton';
import DownVoteButton from '../button/DownVoteButton';

function ThreadDetail({
  id, title, body, category, createdAt, owner, upVotesBy, downVotesBy,
  comments, authUser, upVote, downVote, neutralVote, addComment,
  upVoteComment, downVoteComment, neutralVoteComment,
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
    <div>
      <div className="detail-thread__header">
        <h2 className="detail-thread__title">{title}</h2>
        <p className="detail-thread__category">
          #
          {category}
        </p>
      </div>
      <div className="detail-thread__sub-info">
        <p>{showFormattedDate(createdAt)}</p>
        <p>
          Dibuat oleh&nbsp;
          <strong>{owner.name}</strong>
        </p>
      </div>
      <div className="detail-thread__body">{parse(body)}</div>
      <div className="detail-thread__footer">
        <p>
          <strong>Anda Suka Diskusi Ini ? :</strong>
        </p>
        <UpVoteButton
          iconSize={20}
          isUpvote={isUpvote}
          voteCount={upVotesBy.length}
          handler={upVoteHandler}
        />
        <DownVoteButton
          iconSize={20}
          isDownvote={isDownVote}
          voteCount={downVotesBy.length}
          handler={downVoteHandler}
        />
      </div>
      {authUser && <ThreadCommentInput submitHandler={addComment} />}
      <div className="detail-thread__comment">
        <p className="detail-thread__comment-header">
          <strong>
            Komentar (
            {comments.length}
            )
          </strong>
        </p>
        <ThreadCommentList
          comments={comments}
          threadId={id}
          upVote={upVoteComment}
          downVote={downVoteComment}
          neutralVote={neutralVoteComment}
          authUser={authUser}
        />
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
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  authUser: PropTypes.string,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  neutralVoteComment: PropTypes.func.isRequired,
};

ThreadDetail.defaultProps = {
  ...threadShape,
  authUser: null,
};

ThreadDetail.propTypes = threadShape;

export default ThreadDetail;
