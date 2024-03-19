import React from 'react';
import PropTypes from 'prop-types';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { ThreadVoteButton } from '../../styled/thread';
import StyledIcon from '../../styled/icon.tsx';

function UpVoteButton({
  isUpvote, voteCount, handler, iconSize,
}) {
  return (
    <ThreadVoteButton type="button" onClick={handler}>
      <StyledIcon iconSize={iconSize}>
        {isUpvote ? <AiFillLike /> : <AiOutlineLike />}
      </StyledIcon>
      {voteCount}
    </ThreadVoteButton>
  );
}

UpVoteButton.defaultProps = {
  iconSize: 18,
};

UpVoteButton.propTypes = {
  isUpvote: PropTypes.bool.isRequired,
  voteCount: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
  iconSize: PropTypes.number,
};

export default UpVoteButton;
