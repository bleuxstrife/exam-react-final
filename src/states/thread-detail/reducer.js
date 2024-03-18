import {
  downVoteHelper,
  neutralVoteHelper,
  upVoteHelper,
} from '../../utils/helper';
import { ActionType } from './action';

function threadDetailReducer(thread = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD:
      return action.payload.thread;
    case ActionType.CLEAR_THREAD:
      return null;
    case ActionType.ADD_THREAD_COMMENT:
      return { ...thread, comments: [action.payload.comment, ...thread.comments] };
    case ActionType.UP_VOTE_THREAD:
      return upVoteHelper({ target: thread, userId: action.payload.userId });
    case ActionType.DOWN_VOTE_THREAD:
      return downVoteHelper({ target: thread, userId: action.payload.userId });
    case ActionType.NEUTRALIZE_VOTE_THREAD:
      return neutralVoteHelper(
        { target: thread, userId: action.payload.userId, fromUpVote: action.payload.fromUpVote },
      );
    case ActionType.UP_VOTE_COMMENT:
      return {
        ...thread,
        comments: thread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return upVoteHelper({ target: comment, userId: action.payload.userId });
          }
          return comment;
        }),
      };
    case ActionType.DOWN_VOTE_COMMENT:
      return {
        ...thread,
        comments: thread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return downVoteHelper({ target: comment, userId: action.payload.userId });
          }
          return comment;
        }),
      };
    case ActionType.NEUTRALIZE_VOTE_COMMENT:
      return {
        ...thread,
        comments: thread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return neutralVoteHelper(
              {
                target: comment,
                userId: action.payload.userId,
                fromUpVote: action.payload.fromUpVote,
              },
            );
          }
          return comment;
        }),
      };
    default:
      return thread;
  }
}

export default threadDetailReducer;
