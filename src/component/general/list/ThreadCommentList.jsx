import React from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem, { commentShape } from '../item/ThreadCommentItem';
import { ListContainer } from '../../styled/container';
import { PLabel } from '../../styled/label';
import baseColor from '../../../utils/base-color';

function ThreadCommentList({
  comments, upVote, downVote, neutralVote, authUser, threadId,
}) {
  if (comments.length === 0) {
    return (
      <ListContainer marginTop="8px">
        <PLabel textAlign="center" color={baseColor.onBackgroundGrey}>
          Tidak ada data komentar
        </PLabel>
      </ListContainer>
    );
  }

  return (
    <ListContainer marginTop="8px">
      {
        comments.map((item) => (
          <ThreadCommentItem
            key={item.id}
            authUser={authUser}
            upVote={upVote}
            downVote={downVote}
            neutralVote={neutralVote}
            threadId={threadId}
            {...item}
          />
        ))
      }
    </ListContainer>
  );
}
ThreadCommentList.defaultProps = {
  authUser: null,
};

ThreadCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  authUser: PropTypes.string,
  threadId: PropTypes.string.isRequired,
};

export default ThreadCommentList;
