import React from 'react';
import PropTypes from 'prop-types';
import { AiFillDislike, AiOutlineDislike } from 'react-icons/ai';
import StyledIcon from '../../styled/icon.tsx';
import { ThreadVoteButton } from '../../styled/thread';

function DownVoteButton({
  isDownvote, voteCount, handler, iconSize,
}) {
  return (
    <ThreadVoteButton type="button" onClick={handler}>
      <StyledIcon iconSize={iconSize}>
        {isDownvote ? <AiFillDislike /> : <AiOutlineDislike />}
      </StyledIcon>
      {voteCount}
    </ThreadVoteButton>
  );
}

DownVoteButton.defaultProps = {
  iconSize: 18,
};

DownVoteButton.propTypes = {
  isDownvote: PropTypes.bool.isRequired,
  voteCount: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
  iconSize: PropTypes.number,
};

export default DownVoteButton;
