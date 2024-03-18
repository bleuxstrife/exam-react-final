import React from 'react';
import PropTypes from 'prop-types';
import { AiFillDislike, AiOutlineDislike } from 'react-icons/ai';

function DownVoteButton({
  isDownvote, className, voteCount, handler,
}) {
  return (
    <button type="button" className={className} onClick={handler}>
      {isDownvote ? <AiFillDislike /> : <AiOutlineDislike />}
      {voteCount}
    </button>
  );
}

DownVoteButton.propTypes = {
  isDownvote: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};

export default DownVoteButton;
