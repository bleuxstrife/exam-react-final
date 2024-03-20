import React from 'react';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../../utils/date-format';
import { commentShape, ownerShape } from '../item/ThreadCommentItem';
import ThreadCommentList from '../list/ThreadCommentList';
import ThreadCommentInput from '../input/ThreadCommentInput';
import UpVoteButton from '../button/UpVoteButton';
import DownVoteButton from '../button/DownVoteButton';
import {
  ThreadBody,
  ThreadCommentDetail,
  ThreadFooter,
  ThreadHeader,
  ThreadSubInfo,
  ThreadTitleH2,
} from '../../styled/thread';
import { CategoryLabel, PLabel } from '../../styled/label';

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
      <ThreadHeader>
        <ThreadTitleH2>{title}</ThreadTitleH2>
        <CategoryLabel fontSize="18px">
          #
          {category}
        </CategoryLabel>
      </ThreadHeader>
      <ThreadSubInfo>
        <PLabel>{showFormattedDate(createdAt)}</PLabel>
        <PLabel>
          Dibuat oleh&nbsp;
          <strong>{owner.name}</strong>
        </PLabel>
      </ThreadSubInfo>
      <ThreadBody isShort={false}>{parse(body)}</ThreadBody>
      <ThreadFooter marginTop="32px">
        <PLabel textTransform="uppercase">
          <strong>Anda Suka Diskusi Ini ? :</strong>
        </PLabel>
        <UpVoteButton
          iconSize="20px"
          isUpvote={isUpvote}
          voteCount={upVotesBy.length}
          handler={upVoteHandler}
        />
        <DownVoteButton
          iconSize="20px"
          isDownvote={isDownVote}
          voteCount={downVotesBy.length}
          handler={downVoteHandler}
        />
      </ThreadFooter>
      {authUser && <ThreadCommentInput submitHandler={addComment} />}
      <ThreadCommentDetail>
        <PLabel textTransform="uppercase">
          <strong>
            Komentar (
            {comments.length}
            )
          </strong>
        </PLabel>
        <ThreadCommentList
          comments={comments}
          threadId={id}
          upVote={upVoteComment}
          downVote={downVoteComment}
          neutralVote={neutralVoteComment}
          authUser={authUser}
        />
      </ThreadCommentDetail>
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
