import { describe, it, expect } from 'vitest';
import leaderboardReducer from './reducer';

const mockLeaderBoards = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 10,
  },
  {
    user: {
      id: 'users-2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg',
    },
    score: 5,
  },
];

describe('leaderboardReducer', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = leaderboardReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the leaderboards when given by RECEIVE_LEADER_BOARD action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_LEADER_BOARD',
      payload: {
        leaderboards: mockLeaderBoards,
      },
    };
    // action
    const nextState = leaderboardReducer(initialState, action);
    // assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
