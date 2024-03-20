import React from 'react';
import PropTypes from 'prop-types';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import StyledIcon from '../../styled/icon.tsx';
import { VoteButton } from '../../styled/button';

function UpVoteButton({
  isUpvote, voteCount, handler, iconSize,
}) {
  return (
    <VoteButton type="button" onClick={handler}>
      <StyledIcon iconSize={iconSize}>
        {isUpvote ? <AiFillLike /> : <AiOutlineLike />}
      </StyledIcon>
      {voteCount}
    </VoteButton>
  );
}

UpVoteButton.defaultProps = {
  iconSize: '18px',
};

UpVoteButton.propTypes = {
  isUpvote: PropTypes.bool.isRequired,
  voteCount: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
  iconSize: PropTypes.string,
};

export default UpVoteButton;
