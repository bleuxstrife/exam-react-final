import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../thread/action';
import { receiveUsersActionCreator } from '../user/action';

function asyncPopulateThreadAndUser() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUser();
      const threads = await api.getAllThread();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { asyncPopulateThreadAndUser };
