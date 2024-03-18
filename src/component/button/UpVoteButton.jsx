import React from 'react';
import PropTypes from 'prop-types';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

function UpVoteButton({
  isUpvote, className, voteCount, handler,
}) {
  return (
    <button type="button" className={className} onClick={handler}>
      {isUpvote ? <AiFillLike /> : <AiOutlineLike />}
      {voteCount}
    </button>
  );
}

UpVoteButton.propTypes = {
  isUpvote: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};

export default UpVoteButton;
