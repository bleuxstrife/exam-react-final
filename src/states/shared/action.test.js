/**
 * Test Scenario
 *
 * - asyncPopulateThreadAndUser thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  describe, beforeEach, afterEach, it, vi, expect,
} from 'vitest';
import api from '../../utils/api';
import { asyncPopulateThreadAndUser } from './action';
import { receiveUsersActionCreator } from '../user/action';
import { receiveThreadsActionCreator } from '../thread/action';

const mockUsers = [
  {
    id: 'user-SUQwguLousiQvuvh',
    name: 'Reno Rizky',
    email: 'renokun21@gmail.com',
    avatar: 'https://ui-avatars.com/api/?name=Reno Rizky&background=random',
  },
];

const mockThreads = [
  {
    id: 'thread-Np47p4jhUXYhrhRn',
    title: 'Bagaimana pengalamanmu belajar Redux?',
    body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
    category: 'redux',
    createdAt: '2023-05-29T07:55:52.266Z',
    ownerId: 'user-mQhLzINW_w5TxxYf',
    totalComments: 0,
    upVotesBy: [
      'user-QmVd2x5737H4kPCn',
      'user-FpM5ALFAwULcsbV4',
    ],
    downVotesBy: [],
  },
];

const mockError = new Error('Error, something went wrong');

describe('asyncPopulateThreadAndUser thunk', () => {
  beforeEach(() => {
    api._getAllThread = api.getAllThread;
    api._getAllUser = api.getAllUser;
  });

  afterEach(() => {
    api.getAllThread = api._getAllThread;
    api.getAllUser = api._getAllUser;

    // delete backup data
    delete api._getAllThread;
    delete api._getAllUser;
  });

  it('should dispatch action correctly data fetching success', async () => {
    // arrange
    // stub implementation
    api.getAllUser = () => Promise.resolve(mockUsers);
    api.getAllThread = () => Promise.resolve(mockThreads);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncPopulateThreadAndUser()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(mockUsers));
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(mockThreads));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getAllUser = () => Promise.reject(mockError);
    api.getAllThread = () => Promise.reject(mockError);

    // mock dispatch
    const dispatch = vi.fn();

    // mock alert
    window.alert = vi.fn();

    // action
    await asyncPopulateThreadAndUser()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(mockError.message);
  });
});
