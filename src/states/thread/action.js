import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  NEUTRALIZE_VOTE_THREAD: 'NEUTRALIZE_VOTE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function upVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralizeVoteThreadActionCreator({ threadId, userId, fromUpVote }) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_THREAD,
    payload: {
      threadId,
      userId,
      fromUpVote,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function asyncUpVote({ id }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threads } = getState();
    const backupThreads = [...threads];
    dispatch(upVoteThreadActionCreator({ threadId: id, userId: authUser.id }));

    try {
      await api.upVoteThread({ id });
    } catch (error) {
      alert(error.message);
      dispatch(receiveThreadsActionCreator(backupThreads));
    }
    dispatch(hideLoading());
  };
}

function asyncDownVote({ id }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, threads } = getState();
    const backupThreads = [...threads];
    dispatch(downVoteThreadActionCreator({ threadId: id, userId: authUser.id }));

    try {
      await api.downVoteThread({ id });
    } catch (error) {
      alert(error.message);
      dispatch(receiveThreadsActionCreator(backupThreads));
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralVote({ id, fromUpVote }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(neutralizeVoteThreadActionCreator({ threadId: id, userId: authUser.id, fromUpVote }));

    try {
      await api.neutralVoteThread({ id });
    } catch (error) {
      alert(error.message);
      dispatch(neutralizeVoteThreadActionCreator(
        { threadId: id, userId: authUser.id, fromUpVote },
      ));
    }
    dispatch(hideLoading());
  };
}

function asyncAddThread({
  title, body, category, callback,
}) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.addThread({ title, body, category });
      callback();
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  asyncAddThread,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  neutralizeVoteThreadActionCreator,
  asyncDownVote,
  asyncUpVote,
  asyncNeutralVote,
};
