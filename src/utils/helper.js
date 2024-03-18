function upVoteHelper({ target, userId }) {
  const downVotes = target.downVotesBy.includes(userId)
    ? target.downVotesBy.filter((id) => id !== userId)
    : target.downVotesBy;
  const downVotesChecked = target.upVotesBy.includes(userId)
    ? target.downVotesBy.concat([userId])
    : downVotes;
  return {
    ...target,
    upVotesBy: target.upVotesBy.includes(userId)
      ? target.upVotesBy.filter((id) => id !== userId)
      : target.upVotesBy.concat([userId]),
    downVotesBy: downVotesChecked,
  };
}

function downVoteHelper({ target, userId }) {
  const upVotes = target.upVotesBy.includes(userId)
    ? target.upVotesBy.filter((id) => id !== userId)
    : target.upVotesBy;
  const upVotesChecked = target.downVotesBy.includes(userId)
    ? target.upVotesBy.concat([userId])
    : upVotes;
  return {
    ...target,
    downVotesBy: target.downVotesBy.includes(userId)
      ? target.downVotesBy.filter((id) => id !== userId)
      : target.downVotesBy.concat([userId]),
    upVotesBy: upVotesChecked,
  };
}

function neutralVoteHelper({ target, userId, fromUpVote }) {
  const downVotesDefault = target.downVotesBy;
  const downVotesBy = target.downVotesBy.includes(userId)
    ? target.downVotesBy.filter((id) => id !== userId)
    : target.downVotesBy.concat([userId]);
  const upVotesDefault = target.upVotesBy;
  const upVotesBy = target.upVotesBy.includes(userId)
    ? target.upVotesBy.filter((id) => id !== userId)
    : target.upVotesBy.concat([userId]);
  return {
    ...target,
    downVotesBy: !fromUpVote
      ? downVotesBy
      : downVotesDefault,
    upVotesBy: fromUpVote
      ? upVotesBy
      : upVotesDefault,
  };
}

export {
  upVoteHelper,
  downVoteHelper,
  neutralVoteHelper,
};
