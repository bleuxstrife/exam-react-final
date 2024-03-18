import { ActionType } from './action';

function leaderboardReducer(leaderboards = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADER_BOARD:
      return action.payload.leaderboards;
    default:
      return leaderboards;
  }
}

export default leaderboardReducer;
