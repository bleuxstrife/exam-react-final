/**
 * Test Scenario
 *
 * - asyncDownVote thunk
 *  - should dispatch action correctly when down voting success
 *  - should dispatch action and call alert correctly when down voting failed
 *
 * - asyncUpVote thunk
 *  - should dispatch action correctly when up voting success
 *  - should dispatch action and call alert correctly when up voting failed
 *
 * - asyncNeutralVote thunk
 *  - should dispatch action correctly when neutral down voting success
 *  - should dispatch action and call alert correctly when neutral down voting failed
 *
 * - asyncAddThread thunk
 *  - should dispatch action correctly when add new thread success
 *  - should dispatch action and call alert correctly when add new thread failed
 *
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  describe, beforeEach, afterEach, it, vi, expect,
} from 'vitest';
import api from '../../utils/api';
import {
  asyncUpVote,
  asyncDownVote,
  downVoteThreadActionCreator,
  receiveThreadsActionCreator,
  upVoteThreadActionCreator,
  asyncNeutralVote,
  neutralizeVoteThreadActionCreator,
  asyncAddThread,
  addThreadActionCreator,
} from './action';

const id = 'thread-91KocEqYPRz68MhD';
const userId = 'user-SUQwguLousiQvuvh';
const fromUpVote = false;
const title = 'Test Title';
const category = 'Test Category';
const body = 'Test Body';
const callback = () => {};

const mockAuthUser = {
  id: 'user-SUQwguLousiQvuvh',
  name: 'Reno Rizky',
  email: 'renokun21@gmail.com',
  avatar: 'https://ui-avatars.com/api/?name=Reno Rizky&background=random',
};
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
  {
    id: 'thread-91KocEqYPRz68MhD',
    title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu',
    body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>- Siapa kamu dan dari mana kamu berasal?</div><div>- Apa pekerjaan atau pendidikan kamu saat ini?</div><div>- Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
    category: 'perkenalan',
    createdAt: '2023-05-29T07:54:35.746Z',
    ownerId: 'user-aROWej8yYA1sOfHN',
    totalComments: 1,
    upVotesBy: [
      'user-mQhLzINW_w5TxxYf',
    ],
    downVotesBy: [],
  },
];

const mockError = new Error('Error, something went wrong');

describe('asyncDownVote thunk', () => {
  beforeEach(() => {
    api._downVoteThread = api.downVoteThread;
  });

  afterEach(() => {
    api.downVoteThread = api._downVoteThread;

    // delete backup data
    delete api._downVoteThread;
  });

  it('should dispatch action correctly when down voting success', async () => {
    // arrange
    // stub implementation
    api.downVoteThread = () => Promise.resolve();

    // mock dispatch and getState
    const dispatch = vi.fn();
    const getstate = vi.fn().mockReturnValue({ authUser: mockAuthUser, threads: mockThreads });

    // action
    await asyncDownVote({ id })(dispatch, getstate);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(downVoteThreadActionCreator({ threadId: id, userId }));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when down voting failed', async () => {
    // arrange
    // stub implementation
    api.downVoteThread = () => Promise.reject(mockError);

    // mock dispatch and getState
    const dispatch = vi.fn();
    const getstate = vi.fn().mockReturnValue({ authUser: mockAuthUser, threads: mockThreads });

    // mock alert
    window.alert = vi.fn();

    // action
    await asyncDownVote({ id })(dispatch, getstate);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(downVoteThreadActionCreator({ threadId: id, userId }));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(mockError.message);
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(mockThreads));
  });
});

describe('asyncUpVote thunk', () => {
  beforeEach(() => {
    api._upVoteThread = api.upVoteThread;
  });

  afterEach(() => {
    api.upVoteThread = api._upVoteThread;

    // delete backup data
    delete api._upVoteThread;
  });

  it('should dispatch action correctly when up voting success', async () => {
    // arrange
    // stub implementation
    api.upVoteThread = () => Promise.resolve();

    // mock dispatch and getState
    const dispatch = vi.fn();
    const getstate = vi.fn().mockReturnValue({ authUser: mockAuthUser, threads: mockThreads });

    // action
    await asyncUpVote({ id })(dispatch, getstate);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(upVoteThreadActionCreator({ threadId: id, userId }));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when up voting failed', async () => {
    // arrange
    // stub implementation
    api.upVoteThread = () => Promise.reject(mockError);

    // mock dispatch and getState
    const dispatch = vi.fn();
    const getstate = vi.fn().mockReturnValue({ authUser: mockAuthUser, threads: mockThreads });

    // mock alert
    window.alert = vi.fn();

    // action
    await asyncUpVote({ id })(dispatch, getstate);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(upVoteThreadActionCreator({ threadId: id, userId }));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(mockError.message);
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(mockThreads));
  });
});

describe('asyncNeutralVote thunk', () => {
  beforeEach(() => {
    api._neutralVoteThread = api.neutralVoteThread;
  });

  afterEach(() => {
    api.neutralVoteThread = api._neutralVoteThread;

    // delete backup data
    delete api._neutralVoteThread;
  });

  it('should dispatch action correctly when neutral down voting success', async () => {
    // arrange
    // stub implementation
    api.neutralVoteThread = () => Promise.resolve();

    // mock dispatch and getState
    const dispatch = vi.fn();
    const getstate = vi.fn().mockReturnValue({ authUser: mockAuthUser, threads: mockThreads });

    // action
    await asyncNeutralVote({ id, fromUpVote })(dispatch, getstate);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      neutralizeVoteThreadActionCreator({
        threadId: id, userId, fromUpVote,
      }),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when neutral down voting failed', async () => {
    // arrange
    // stub implementation
    api.neutralVoteThread = () => Promise.reject(mockError);

    // mock dispatch and getState
    const dispatch = vi.fn();
    const getstate = vi.fn().mockReturnValue({ authUser: mockAuthUser, threads: mockThreads });

    // mock alert
    window.alert = vi.fn();

    // action
    await asyncNeutralVote({ id, fromUpVote })(dispatch, getstate);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      neutralizeVoteThreadActionCreator({
        threadId: id, userId, fromUpVote,
      }),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(mockError.message);
    expect(dispatch).toHaveBeenCalledWith(
      neutralizeVoteThreadActionCreator({
        threadId: id, userId, fromUpVote,
      }),
    );
  });
});

describe('asyncAddThread thunk', () => {
  beforeEach(() => {
    api._addThread = api.addThread;
  });

  afterEach(() => {
    api.addThread = api._addThread;

    // delete backup data
    delete api._addThread;
  });

  it('should dispatch action correctly when add new thread success', async () => {
    // arrange
    // stub implementation
    api.addThread = () => Promise.resolve(mockThread);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncAddThread({
      title, body, category, callback,
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(addThreadActionCreator(mockThread));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when add new thread failed', async () => {
    // arrange
    // stub implementation
    api.addThread = () => Promise.reject(mockError);

    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();

    // action
    await asyncAddThread({
      title, body, category, callback,
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(mockError.message);
  });
});
