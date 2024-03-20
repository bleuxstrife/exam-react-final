import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  asyncAddComent,
  asyncClearThreadDetail,
  asyncDownVoteComment,
  asyncDownVoteDetail,
  asyncNeutralVoteComment,
  asyncNeutralVoteDetail,
  asyncThreadDetail,
  asyncUpVoteComment,
  asyncUpVoteDetail,
} from '../states/thread-detail/action';
import ThreadDetail from '../component/general/detail/ThreadDetail';
import { PageContainer } from '../component/styled/container';

function ThreadDetailPage() {
  const { id } = useParams('id');
  const thread = useSelector((state) => state.thread);
  const authUser = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const errorString = 'Harus login terlebih dahulu';

  React.useEffect(() => {
    dispatch(asyncClearThreadDetail());
    dispatch(asyncThreadDetail({ id }));
  }, [id, dispatch]);

  if (thread === null) {
    return null;
  }

  const upVote = (threadId) => {
    if (authUser === null) {
      alert(errorString);
      return;
    }
    dispatch(asyncUpVoteDetail({ id: threadId }));
  };

  const downVote = (threadId) => {
    if (authUser === null) {
      alert(errorString);
      return;
    }
    dispatch(asyncDownVoteDetail({ id: threadId }));
  };

  const neutralVote = (threadId, fromUpVote) => {
    if (authUser === null) {
      alert(errorString);
      return;
    }
    dispatch(asyncNeutralVoteDetail({ id: threadId, fromUpVote }));
  };

  const upVoteComment = (threadId, commentId) => {
    if (authUser === null) {
      alert(errorString);
      return;
    }
    dispatch(asyncUpVoteComment({ id: threadId, commentId }));
  };

  const downVoteComment = (threadId, commentId) => {
    if (authUser === null) {
      alert(errorString);
      return;
    }
    dispatch(asyncDownVoteComment({ id: threadId, commentId }));
  };

  const neutralVoteComment = (threadId, commentId, fromUpVote) => {
    if (authUser === null) {
      alert(errorString);
      return;
    }
    dispatch(asyncNeutralVoteComment({ id: threadId, commentId, fromUpVote }));
  };

  const addComment = ({ content }) => {
    dispatch(asyncAddComent({ id, content }));
  };

  const threadDetail = {
    ...thread, authUser: authUser?.id,
  };

  return (
    <PageContainer>
      <ThreadDetail
        upVote={upVote}
        downVote={downVote}
        neutralVote={neutralVote}
        addComment={addComment}
        upVoteComment={upVoteComment}
        downVoteComment={downVoteComment}
        neutralVoteComment={neutralVoteComment}
        {...threadDetail}
      />
    </PageContainer>
  );
}

export default ThreadDetailPage;
