import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { userShape } from './LeaderboardItem';
import { postedAt } from '../../../utils/date-format';
import UpVoteButton from '../button/UpVoteButton';
import DownVoteButton from '../button/DownVoteButton';
import {
  ThreadBody,
  ThreadComment,
  ThreadContainer,
  ThreadFooter,
  ThreadHeader,
  ThreadTitle,
} from '../../styled/thread';
import { CategoryLabel, CustomLink, PLabel } from '../../styled/label';
import CommentIcon from '../icon/CommentIcon';

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
    <ThreadContainer>
      <ThreadHeader>
        <ThreadTitle>
          <CustomLink textDecoration="none" to={`/threads/${id}`}>
            {title || 'Tidak ada judul'}
          </CustomLink>
        </ThreadTitle>
        <CategoryLabel>
          #
          {category}
        </CategoryLabel>
      </ThreadHeader>
      <ThreadBody>{parse(body)}</ThreadBody>
      <ThreadFooter>
        <UpVoteButton
          isUpvote={isUpvote}
          voteCount={upVotesBy.length}
          handler={upVoteHandler}
        />
        <DownVoteButton
          isDownvote={isDownVote}
          voteCount={downVotesBy.length}
          handler={downVoteHandler}
        />
        <ThreadComment>
          <CommentIcon />
          {totalComments}
        </ThreadComment>
        <PLabel>
          Dibuat oleh&nbsp;
          <strong>{user.name}</strong>
        </PLabel>
        <PLabel>{postedAt(createdAt)}</PLabel>
      </ThreadFooter>
    </ThreadContainer>
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
