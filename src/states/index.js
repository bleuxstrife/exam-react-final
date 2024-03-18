import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './auth/reducer';
import isPreloadReducer from './preload/reducer';
import leaderboardReducer from './leader-board/reducer';
import threadReducer from './thread/reducer';
import usersReducer from './user/reducer';
import threadDetailReducer from './thread-detail/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    leaderboards: leaderboardReducer,
    threads: threadReducer,
    thread: threadDetailReducer,
    users: usersReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
