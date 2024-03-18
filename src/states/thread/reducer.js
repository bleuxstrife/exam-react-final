import { downVoteHelper, neutralVoteHelper, upVoteHelper } from '../../utils/helper';
import { ActionType } from './action';

function threadReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.UP_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return upVoteHelper({ target: thread, userId: action.payload.userId });
        }
        return thread;
      });
    case ActionType.DOWN_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return downVoteHelper({ target: thread, userId: action.payload.userId });
        }
        return thread;
      });
    case ActionType.NEUTRALIZE_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return neutralVoteHelper(
            {
              target: thread,
              userId: action.payload.userId,
              fromUpVote: action.payload.fromUpVote,
            },
          );
        }
        return thread;
      });
    default:
      return threads;
  }
}

export default threadReducer;
