/**
* Test Scenario
*
* - threadReducer function
*  - should return the initial state when given by unknown action
*  - should return the threads when given by RECEIVE_THREADS action
*  - should return the threads with the new thread when given by ADD_THREAD action
*  - should return the threads with the up vote thread when given by UP_VOTE_THREAD action
*  - should return the threads with the down vote thread when given by DOWN_VOTE_THREAD action
*  - should return the threads with no down vote thread when given by NEUTRALIZE_VOTE_THREAD action
*/

import { describe, it, expect } from 'vitest';
import threadReducer from './reducer';

const threadId = 'thread-Np47p4jhUXYhrhRn';
const userId = 'user-SUQwguLousiQvuvh';
const fromUpVote = false;

const mockThreads = [
  {
    id: 'thread-Np47p4jhUXYhrhRn',
    title: 'Bagaimana pengalamanmu belajar Redux?',
    body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
    category: 'redux',
    createdAt: '2023-05-29T07:55:52.266Z',
    ownerId: 'user-mQhLzINW_w5TxxYf',
    totalComments: 0,
    upVotesBy: [],
    downVotesBy: [],
  },
];

const mockThreadsWithDownVote = [
  {
    id: 'thread-Np47p4jhUXYhrhRn',
    title: 'Bagaimana pengalamanmu belajar Redux?',
    body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
    category: 'redux',
    createdAt: '2023-05-29T07:55:52.266Z',
    ownerId: 'user-mQhLzINW_w5TxxYf',
    totalComments: 0,
    upVotesBy: [],
    downVotesBy: [
      'user-SUQwguLousiQvuvh',
    ],
  },
];

const mockThread = {
  id: 'thread-etadVImBWJ4Y3aJg',
  title: 'test',
  body: 'test',
  ownerId: 'user-SUQwguLousiQvuvh',
  category: 'test',
  createdAt: '2024-03-21T03:00:33.914Z',
  totalComments: 0,
  upVotesBy: [],
  downVotesBy: [],
};

describe('threadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = threadReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: mockThreads,
      },
    };
    // action
    const nextState = threadReducer(initialState, action);
    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    // arrange
    const initialState = mockThreads;
    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: mockThread,
      },
    };
    // action
    const nextState = threadReducer(initialState, action);
    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the thread with the up vote thread when given by UP_VOTE_THREAD action', () => {
    // arrange
    const initialState = mockThreads;
    const action = {
      type: 'UP_VOTE_THREAD',
      payload: {
        threadId,
        userId,
      },
    };
    // action
    const nextState = threadReducer(initialState, action);
    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the thread with the down vote thread when given by DOWN_VOTE_THREAD action', () => {
    // arrange
    const initialState = mockThreads;
    const action = {
      type: 'DOWN_VOTE_THREAD',
      payload: {
        threadId,
        userId,
      },
    };
    // action
    const nextState = threadReducer(initialState, action);
    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the thread with no down vote thread when given by NEUTRALIZE_VOTE_THREAD action', () => {
    // arrange
    const initialState = mockThreadsWithDownVote;
    const action = {
      type: 'NEUTRALIZE_VOTE_THREAD',
      payload: {
        threadId,
        userId,
        fromUpVote,
      },
    };
    // action
    const nextState = threadReducer(initialState, action);
    // assert
    expect(nextState).toEqual([{
      ...initialState[0],
      downVotesBy: [],
    }]);
  });
});
