import React from 'react';
import PropTypes from 'prop-types';
import { AiFillDislike, AiOutlineDislike } from 'react-icons/ai';
import StyledIcon from '../../styled/icon.tsx';
import { VoteButton } from '../../styled/button';

function DownVoteButton({
  isDownvote, voteCount, handler, iconSize,
}) {
  return (
    <VoteButton type="button" onClick={handler}>
      <StyledIcon iconSize={iconSize}>
        {isDownvote ? <AiFillDislike /> : <AiOutlineDislike />}
      </StyledIcon>
      {voteCount}
    </VoteButton>
  );
}

DownVoteButton.defaultProps = {
  iconSize: '18px',
};

DownVoteButton.propTypes = {
  isDownvote: PropTypes.bool.isRequired,
  voteCount: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
  iconSize: PropTypes.string,
};

export default DownVoteButton;
