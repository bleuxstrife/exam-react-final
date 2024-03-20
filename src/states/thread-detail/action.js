import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD: 'RECEIVE_THREADS_DETAIL',
  CLEAR_THREAD: 'CLEAR_THREAD',
  ADD_THREAD_COMMENT: 'ADD_THREAD_COMMENT',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD_DETAIL',
  NEUTRALIZE_VOTE_THREAD: 'NEUTRALIZE_VOTE_THREAD_DETAIL',
  UP_VOTE_COMMENT: 'UP_VOTE_THREAD_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_THREAD_COMMENT',
  NEUTRALIZE_VOTE_COMMENT: 'NEUTRALIZE_VOTE_THREAD_COMMENT',
};

function receiveThreadDetailActionCreator(thread) {
  return {
    type: ActionType.RECEIVE_THREAD,
    payload: {
      thread,
    },
  };
}

function clearThreadActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD,
    payload: {
      thread: null,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_THREAD_COMMENT,
    payload: {
      comment,
    },
  };
}

function upVoteThreadActionCreator({ userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      userId,
    },
  };
}

function downVoteThreadActionCreator({ userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      userId,
    },
  };
}

function neutralizeVoteThreadActionCreator({ userId, fromUpVote }) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_THREAD,
    payload: {
      userId,
      fromUpVote,
    },
  };
}

function upVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralizeVoteCommentActionCreator({
  commentId, userId, fromUpVote,
}) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
      fromUpVote,
    },
  };
}

function asyncClearThreadDetail() {
  return async (dispatch) => {
    dispatch(clearThreadActionCreator());
  };
}

function asyncThreadDetail({ id, errorCallback }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.getDetailThread({ id });
      dispatch(receiveThreadDetailActionCreator(thread));
    } catch (error) {
      alert(error.message);
      errorCallback();
    }
    dispatch(hideLoading());
  };
}

function asyncAddComent({ id, content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.addCommentThread({ id, content });
      dispatch(addCommentActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteDetail({ id }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, thread } = getState();
    const backupThread = { ...thread };
    dispatch(upVoteThreadActionCreator({ userId: authUser.id }));

    try {
      await api.upVoteThread({ id });
    } catch (error) {
      alert(error.message);
      dispatch(receiveThreadDetailActionCreator(backupThread));
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteDetail({ id }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, thread } = getState();
    const backupThread = { ...thread };
    dispatch(downVoteThreadActionCreator({ userId: authUser.id }));

    try {
      await api.downVoteThread({ id });
    } catch (error) {
      alert(error.message);
      dispatch(receiveThreadDetailActionCreator(backupThread));
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralVoteDetail({ id, fromUpVote }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(neutralizeVoteThreadActionCreator({ userId: authUser.id, fromUpVote }));

    try {
      await api.neutralVoteThread({ id });
    } catch (error) {
      alert(error.message);
      dispatch(neutralizeVoteThreadActionCreator(
        { userId: authUser.id, fromUpVote },
      ));
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteComment({ id, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, thread } = getState();
    const backupThread = { ...thread };
    dispatch(upVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.upVoteThreadComment({ id, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(receiveThreadDetailActionCreator(backupThread));
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteComment({ id, commentId }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, thread } = getState();
    const backupThread = { ...thread };
    dispatch(downVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.downVoteThreadComment({ id, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(receiveThreadDetailActionCreator(backupThread));
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralVoteComment({ id, commentId, fromUpVote }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(neutralizeVoteCommentActionCreator({ commentId, userId: authUser.id, fromUpVote }));

    try {
      await api.neutralVoteThreadComment({ id, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(neutralizeVoteCommentActionCreator({ commentId, userId: authUser.id, fromUpVote }));
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadActionCreator,
  addCommentActionCreator,
  upVoteThreadActionCreator,
  upVoteCommentActionCreator,
  downVoteThreadActionCreator,
  downVoteCommentActionCreator,
  neutralizeVoteThreadActionCreator,
  neutralizeVoteCommentActionCreator,
  asyncClearThreadDetail,
  asyncThreadDetail,
  asyncAddComent,
  asyncUpVoteDetail,
  asyncDownVoteDetail,
  asyncNeutralVoteDetail,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralVoteComment,
};
